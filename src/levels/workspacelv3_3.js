import "../App.css";
import "../customBlocks/custom_Blocks";
import "../customBlocks/looping_Blocks";

import { Link } from "react-router-dom"
import React, { useEffect, useState } from "react";
import { BlocklyWorkspace } from "react-blockly";
import Blockly from "blockly";
import mqtt from "mqtt";
import { PlayIcon, PauseIcon, ChevronLeftIcon } from "@heroicons/react/solid";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureDown } from '@fortawesome/free-solid-svg-icons';
import { faHandHoldingDroplet } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faRoad } from '@fortawesome/free-solid-svg-icons';

//generate clientID with random string
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

//data mqtt
const dataMqtt = {
    host: "mqtt-dashboard.com",
    clientId: generateString(5),
    port: 8000,
    // port: 15672, // untuk port emqx: 8083, mosquitto: 8081/8080, hivemq: 8000
    username: "vedc",
    password: "vedc",
};
// const dataMqtt = {
//   host: "168.138.182.140",
//   clientId: "WebApp_HUB_Skripsi",
//   port: 8080,
//   // port: 15672, // untuk port emqx: 8083, mosquitto: 8081/8080, hivemq: 8000
//   username: "",
//   password: "",
// };

export default function Workspace() {
    const navigate = useNavigate();
    const [client, setClient] = useState(null);

    // blockly session
    const [xml, setXml] = useState("");
    const [javascriptCode, setJavascriptCode] = useState("");
    const [toggleButton, settoggleButton] = useState(false);

    const initialXml =
        '<xml xmlns="http://www.w3.org/1999/xhtml"><block type="iot_devboard" x="70" y="30"><statement name="device"><block type="controls_for"> <field name="VAR" id="m:?eq*)`(r$R`p`;N?c`">i</field> <value name="FROM"><block type="math_number"> <field name="NUM">1</field> </block> </value><value name="TO"> <block type="math_number"><field name="NUM">8</field> </block></value> <value name="BY"><block type="math_number"><field name="NUM">1</field> </block> </value> <statement name="DO"> <block type="controls_if">  <value name="IF0"> <block type="logic_compare"><field name="OP">EQ</field> <value name="A"> <block type="variables_get"> <field name="VAR" id="m:?eq*)`(r$R`p`;N?c`">i</field></block></value> <value name="B"> <block type="math_number"><field name="NUM">4</field></block></value> </block></value><statement name="DO0"><block type="controls_flow_statements"><field name="FLOW">CONTINUE</field></block> </statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="m:?eq*)`(r$R`p`;N?c`">i</field> </block> </value>   </block></next></block>   </statement></block>   </statement> </block> </xml>';
    
    const toolboxCategories = {
        kind: "categoryToolbox",
        contents: [
            // kategori blok logika
            {
                kind: "category",
                name: "Operasi Logika",
                colour: "#5C81A6",
                contents: [
                    {
                        kind: "block",
                        type: "controls_if",
                    },
                    {
                        kind: "block",
                        type: "logic_compare",
                    },
                    {
                        kind: "block",
                        type: "math_number",
                    },
                    {
                        kind: "block",
                        type: "sensor",
                    },
                    {
                        kind: "block",
                        type: "variables_gets",
                    },
                ],
            },
            // kategori blok looping
            {
                kind: "category",
                name: "Perulangan",
                colour: "#5CA65C",
                contents: [
                    {
                        kind: "block",
                        type: "controls_forEach",
                    },
                    {
                        kind: "block",
                        type: "controls_for",
                    },

                    {
                        kind: "block",
                        type: "controls_whileUntil",
                    },
                    {
                        kind: "block",
                        type: "math_arithmetic",
                    },
                    {
                        kind: "block",
                        type: "controls_flow_statements",
                    }
                ],
            },
            // kategori blok aktuator
            {
                kind: "category",
                name: "Kontrol LED",
                colour: "#000000",
                contents: [
                    {
                        kind: "block",
                        type: "iot_devboard",
                    },
                    {
                        kind: "block",
                        type: "aktuator_led",
                    },
                ],
            },
            {
                kind: "category",
                name: "Kontrol FAN",
                colour: "#A5745B",
                contents: [
                    {
                        kind: "block",
                        type: "iot_devboard",
                    },
                    {
                        kind: "block",
                        type: "aktuator_fan",
                    },
                ],
            },
            {
                kind: "category",
                name: "Nyalakan Buzzer",
                colour: "#5BA55B",
                contents: [
                    {
                        kind: "block",
                        type: "iot_devboard",
                    },
                    {
                        kind: "block",
                        type: "aktuator_buzzer_on",
                    },
                ],
            },

            {
                kind: "category",
                name: "Matikan Buzzer",
                colour: "#5BA58C",
                contents: [
                    {
                        kind: "block",
                        type: "iot_devboard",
                    },
                    {
                        kind: "block",
                        type: "aktuator_buzzer_off",
                    },
                ],
            },

            {
                kind: "category",
                name: "Kontrol Relay",
                colour: "#5BA58C",
                contents: [
                    {
                        kind: "block",
                        type: "iot_devboard",
                    },
                    {
                        kind: "block",
                        type: "aktuator_relay",
                    },
                ],
            },
            {
                kind: "category",
                name: "Text Print",
                colour: "#5BA58C",
                contents: [
                    {
                        "kind": "block",
                        "type": "text_print",
                    },
                    {
                        "kind": "block",
                        "type": "text",
                    }
                ],
            },
            {
                kind: "category",
                name: "Timer With LED",
                colour: "#A55B80",
                contents: [
                    // {
                    //     kind: "block",
                    //     type: "set_timer",
                    // },
                    {
                        kind: "block",
                        type: "aktuator_led_delay_1s",
                    },
                    {
                        kind: "block",
                        type: "aktuator_led_delay_3s",
                    },
                    {
                        kind: "block",
                        type: "aktuator_led_delay_5s",
                    },
                ],
            },
            {
                kind: "category",
                name: "Variables",
                colour: "#a55b80",
                custom: "VARIABLE",
            },
            
        ],
    };

    function workspaceDidChange(workspace) {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        // console.log(code);
        // const code2 = Blockly.Python.workspaceToCode(workspace);
        if (!code.toLocaleLowerCase().includes("device")) {
            settoggleButton(true);
            setJavascriptCode(code);
        } else {
            settoggleButton(false);
            setJavascriptCode(code);
        }
    }

    const runCode = () => {
        console.log(javascriptCode);
        try {
            // eslint-disable-next-line no-eval
            eval(javascriptCode);
            toast.success("Run Code Berhasil", { position: "bottom-center" });
        } catch (error) {
            console.log(error);
        }
    };

    // mqtt session

    // response dari mqtt

    const [payload, setPayload] = useState({});
    const [connectStatus, setConnectStatus] = useState("Connect");

    const mqttConnect = () => {
        const { host, clientId, port, username, password } = dataMqtt;
        // const url = `ws://${host}:${port}/ws`;
        const url = `mqtt://${host}:${port}/mqtt`;
        const options = {
            keepalive: 30,
            protocolId: "MQTT",
            protocolVersion: 4,
            clean: true,
            reconnectPeriod: 1000,
            connectTimeout: 30 * 1000,
            will: {
                topic: "WillMsg",
                payload: "Connection Closed abnormally..!",
                qos: 0,
                retain: false,
            },
            rejectUnauthorized: false,
        };
        options.clientId = clientId;
        options.username = username;
        options.password = password;

        setConnectStatus("Connecting");
        setClient(mqtt.connect(url, options));
    };

    useEffect(() => {
        mqttConnect();
    }, []);

    useEffect(() => {
        if (client) {
            client.on("connect", () => {
                setConnectStatus("Connected");
                mqttSub();
            });
            client.on("error", (err) => {
                setConnectStatus("Error");
                console.error("Connection error: ", err);
                client.end();
            });
            client.on("reconnect", () => {
                setConnectStatus("Reconnecting");
            });
            client.on("message", (topic, message) => {
                const payload = { topic, message: message.toString() };
                // console.log("message");
                console.log(payload?.message);
                console.log(JSON.parse(payload?.message));
                setPayload(payload?.message && JSON.parse(payload?.message));
            });
        }
    }, [client]);

    useEffect(() => {
        console.log(connectStatus);
    }, [connectStatus]);

    // const mqttPublish = (context) => {
    //   if (client) {
    //     const { topic, qos, payload } = context;
    //     client.publish(topic, payload, { qos }, (error) => {
    //       if (error) {
    //         console.log("Publish error: ", error);
    //       }
    //     });
    //   }
    // };

    const mqttSub = () => {
        if (client) {
            const { topic, qos } = { topic: "sensor", qos: 0 };
            client.subscribe(topic, { qos }, (error) => {
                if (error) {
                    console.log("Subscribe to topics error", error);
                    return;
                }
            });
        }
    };

    const generateColorButton = (key) => {
        switch (key) {
            case 'Connected':
                return '#5098FF'
            case 'Reconnecting':
                return '#FDD736'
            default:
                return '#FF4229'
        }
    }

    return (
        <>
            <Toaster />
            <div style={{ backgroundColor: "#471D8C", padding: "2%" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "1rem",
                    }}
                >
                    <button
                        style={{
                            cursor: "pointer",
                            backgroundColor: "#5098FF",
                            color: "#fff",
                            border: "none",
                            padding: "0.5rem",
                            borderRadius: "5px",
                            boxShadow: "0 4px #2E6ECD",
                        }}
                        onClick={() => navigate("/workspace3")}
                        disabled={toggleButton}
                    >
                        <ChevronLeftIcon style={{ width: "2rem", height: "2rem" }} />
                    </button>
                    <button
                        style={{
                            cursor: "pointer",
                            backgroundColor: generateColorButton(connectStatus),
                            color: "#fff",
                            border: "none",
                            padding: "0.5rem",
                            borderRadius: "5px",
                            boxShadow: "0 4px #2E6ECD",
                            display: "flex",
                            alignItems: "center",
                        }}
                        onClick={() => runCode()}
                        tabIndex={0}
                        onKeyPress={(e) => {
                            console.log(e);
                            e.key.toLocaleLowerCase() === "r" && runCode();
                        }}
                        disabled={toggleButton}
                    >
                        <PlayIcon style={{ width: "2rem", height: "2rem" }} />
                    </button>
                </div>

                <div style={{ width: "100%", position: "relative" }}>
                    <div
                        style={{
                            backgroundColor: "#dedede",
                            position: "absolute",
                            zIndex: 1000,
                            padding: "2rem",
                            top: "18%",
                            right: "5%",
                            borderRadius: "10px",
                        }}
                        className="shadow-sm">
                        <FontAwesomeIcon icon={faSun} className="px-2" />
                        Cahaya : {payload?.cahaya} <br />
                        <FontAwesomeIcon icon={faTemperatureDown} className="px-2" />
                        Suhu : {payload?.suhu} <br />
                        <FontAwesomeIcon icon={faHandHoldingDroplet} className="px-2" />
                        Kelembapan : {payload?.kelembapan} <br />
                        <FontAwesomeIcon icon={faRoad} className="px-2" />
                        Jarak : {payload?.jarak} <br />
                    </div>

                    {/* workspace */}
                    <div
                        style={{
                            backgroundColor: "#5098FF",
                            padding: "1%",
                            borderRadius: "10px",
                        }}
                    >
                        {/* start levels */}
                        <div>
                            <p className="level text-white">Example Level 3</p>
                            <nav aria-label="Page navigation example">
                                <ul class="pagination levels gap-1">
                                    {/* <Link to="/workspace1" class="btn btn-primary-1 mt-3 fw-semibold">
                                        <FontAwesomeIcon icon={faBook} className="px-2" /> Mulai Belajar Sekarang
                                    </Link> */}
                                    <Link to="/contoh3">
                                        <li class="page-item"><a class="page-link">Back to Example</a></li>
                                    </Link>
                                    <Link to="/tantangan">
                                        <li class="page-item"><a class="page-link">Challenges</a></li>
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                        {/* end levels */}
                        <BlocklyWorkspace
                            toolboxConfiguration={toolboxCategories}
                            initialXml={initialXml}
                            // className='fill-height'
                            className='blocklyDiv'
                            workspaceConfiguration={{
                                grid: {
                                    spacing: 20,
                                    length: 3,
                                    colour: "#ccc",
                                    snap: true,
                                },
                            }}
                            onWorkspaceChange={workspaceDidChange}
                            onXmlChange={setXml}
                        />
                    </div>

                    {/* <div
            style={{
              position: "absolute",
              zIndex: 1000,
              bottom: "5%",
              left: "1%",
              margin: "1rem 0",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                backgroundColor: "#5098FF",
                color: "#fff",
                border: "none",
                padding: "0.5rem",
                borderRadius: "5px",
                boxShadow: "0 4px #2E6ECD",
              }}
              onClick={() => runCode()}
              disabled={toggleButton}
            >
              <PlayIcon style={{ width: "3rem", height: "3rem" }} />
            </button>
          </div> */}
                </div>

                <div style={{ color: "white" }}>
                    {toggleButton && (
                        <p>Harap menggunakan Block Device IOT Development Board</p>
                    )}
                </div>

                {/* <pre id='generated-xml'>{xml}</pre> */}

                <h2 style={{ color: "white" }}>Kode Program</h2>
                <textarea
                    id='code'
                    style={{ height: "200px", width: "400px" }}
                    value={javascriptCode}
                    readOnly
                />
            </div>
        </>
    );
}
