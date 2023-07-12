// import "./App.css";
import React, { useEffect, useState } from "react";
import mqtt from "mqtt";

//response form mqtt

const dataMqtt = {
    host: "141.147.153.133",
    clientId: "WebApp_HUB_Skripsi",
    port: 8090,
    // port: 15672, // untuk port emqx: 8083, mosquitto: 8081/8080, hivemq: 8000
    username: "guest",
    password: "guest",
};

export default function Pubsub() {
    const [client, setClient] = useState(null);
    const [payload, setPayload] = useState({});
    const [connectStatus, setConnectStatus] = useState("Connect");

    const mqttConnect = () => {
        const { host, clientId, port, username, password } = dataMqtt;
        const url = `ws://${host}:${port}/ws`;
        // const url = `ws://${host}:${port}/mqtt`;
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
    return(
        <>
        <div></div>
        </>
    )
}