import Blockly from "blockly";
import "blockly/python";
// import "webduino-blockly";
// require('webduino-blockly');

Blockly.Blocks["new_boundary_function"] = {
  init: function () {
    this.appendDummyInput().appendField(
      new Blockly.FieldTextInput("Boundary Function Name"),
      "Name"
    );
    this.appendStatementInput("Content").setCheck(null);
    this.setInputsInline(true);
    this.setColour(315);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["new_boundary_function"] = function (block) {
  var text_name = block.getFieldValue("Name");
  var statements_content = Blockly.Python.statementToCode(block, "Content");
  // TODO: Assemble Python into code variable.
  var code =
    "def " + text_name + "(_object,**kwargs):\n" + statements_content + "\n";
  return code;
};

Blockly.Blocks["return"] = {
  init: function () {
    this.appendValueInput("NAME").setCheck(null).appendField("return");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.Python["return"] = function (block) {
  var value_name = Blockly.Python.valueToCode(
    block,
    "NAME",
    Blockly.Python.ORDER_ATOMIC
  );
  // TODO: Assemble Python into code variable.
  var code = "return " + value_name + "\n";
  return code;
};



Blockly.Blocks["iot_devboard"] = {
  init: function () {
    this.appendStatementInput("device")
      .setCheck(null)
      .appendField("IOT Development Board");
    this.appendDummyInput().appendField("*wajib");
    this.setInputsInline(false);
    this.setColour(230);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["iot_devboard"] = function (block) {
  var value_device = Blockly.JavaScript.statementToCode(
    block,
    "device",
    Blockly.JavaScript.ORDER_ATOMIC
  );

  // TODO: Assemble JavaScript into code variable.
  var code = "Device :" + value_device;
  return code;
};

Blockly.Blocks["aktuator_buzzer"] = {
  init: function () {
    this.appendDummyInput("buzzer")
      .appendField("Buzzer")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "ON"],
          ["OFF", "OFF"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["aktuator_buzzer"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_buzzer = Blockly.JavaScript.valueToCode(
    block,
    "buzzer",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish( "piezo", "${dropdown_kondisi}", "0");`;
  return code;
};

Blockly.Blocks["aktuator_relay"] = {
  init: function () {
    this.appendDummyInput("relay")
      .appendField("Relay")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "ON"],
          ["OFF", "OFF"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["aktuator_relay"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_relay = Blockly.JavaScript.valueToCode(
    block,
    "relay",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("relay", "${dropdown_kondisi}", "0");`;
  return code;
};

Blockly.Blocks["aktuator_led"] = {
  init: function () {
    this.appendDummyInput("led")
      .appendField("LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["aktuator_led"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_led = Blockly.JavaScript.valueToCode(
    block,
    "led",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("ledanim", "${dropdown_kondisi}", "0");`;
  return code;
  return code;
};

Blockly.Blocks["aktuator_fan"] = {
  init: function () {
    this.appendDummyInput("fan")
      .appendField("Fan")
      .appendField(new Blockly.FieldNumber(0), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour("20")
  },
};

Blockly.JavaScript["aktuator_fan"] = function (block) {
  var value = block.getFieldValue("value");
  var value_fan = Blockly.JavaScript.valueToCode(
    block,
    "fan",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.

  var code = `client.publish("fanpwm", "${value}", "0");`;
  return code;
};

Blockly.Blocks["sensor"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["SUHU", "suhu"],
          ["KELEMBAPAN", "kelembapan"],
          ["CAHAYA", "cahaya"],
          ["JARAK", "jarak"],
        ]),
        "pilihan_sensor"
      )
      .appendField(
        new Blockly.FieldDropdown([
          ["<", "<"],
          ["<=", "<="],
          ["==", "=="],
          ["=>", "=>"],
          [">", ">"],
          ["!=", "!="],
        ]),
        "pilihan_operator"
      )
      .appendField(new Blockly.FieldNumber(0), "value_sensor");
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["sensor"] = function (block) {
  var dropdown_pilihan_sensor = block.getFieldValue("pilihan_sensor");
  var dropdown_pilihan_operator = block.getFieldValue("pilihan_operator");
  var number_value_sensor = block.getFieldValue("value_sensor");
  // TODO: Assemble JavaScript into code variable.
  var code = `payload?.${dropdown_pilihan_sensor} ${dropdown_pilihan_operator} ${number_value_sensor}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};


// block variable
Blockly.Blocks["variables_gets"] = {
  init: function () {
    this.appendDummyInput()
      .appendField(
        new Blockly.FieldDropdown([
          ["SUHU", "suhu"],
          ["KELEMBAPAN", "kelembapan"],
          ["CAHAYA", "cahaya"],
          ["JARAK", "jarak"],
        ]),
        "pilihan_sensor"
      )
    this.setOutput(true, null);
    this.setTooltip("");
    this.setHelpUrl("");

  },
};

Blockly.JavaScript["variables_gets"] = function (block) {
  var dropdown_pilihan_sensor = block.getFieldValue("pilihan_sensor");
  var dropdown_pilihan_operator = block.getFieldValue("pilihan_operator");
  var number_value_sensor = block.getFieldValue("value_sensor");
  // TODO: Assemble JavaScript into code variable.
  var code = `payload?.${dropdown_pilihan_sensor}`;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

// Blockly.Blocks['move_ozobot'] = {
//   init: function () {
//     this.appendDummyInput()
//       .appendField(new Blockly.FieldLabelSerializable("Move"), "Move")
//       .appendField(new Blockly.FieldDropdown([["forward", "forward"], ["backward", "backward"]]), "moveoption")
//       .appendField(new Blockly.FieldLabelSerializable("Distance"), "Distance")
//       .appendField(new Blockly.FieldDropdown([["1step", "1step"], ["2step", "2step"], ["3step", "3step"], ["4step", "4step"], ["5step", "5step"]]), "stepoption");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setColour(20);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   }
// };

// Blockly.JavaScript['move_ozobot'] = function(block) {
//   var dropdown_moveoption = block.getFieldValue('moveoption');
//   var dropdown_stepoption = block.getFieldValue('stepoption');
//   // TODO: Assemble JavaScript into code variable.
//   var code = '...;\n';
//   return code;
// };
// Blockly.Blocks["perintah"] = {
//   init: function () {
//     this.appendDummyInput().appendField(
//       new Blockly.FieldDropdown([
//         ["ON", "ON"],
//         ["OFF", "OFF"],
//       ]),
//       "kondisi"
//     );
//     this.setOutput(true, null);
//     this.setColour(230);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["perintah"] = function (block) {
//   var dropdown_kondisi = block.getFieldValue("kondisi");
//   // TODO: Assemble JavaScript into code variable.
//   var code = dropdown_kondisi;
//   // TODO: Change ORDER_NONE to the correct strength.
//   //   return [code, Blockly.JavaScript.ORDER_NONE];
//   return [code, Blockly.JavaScript.ORDER_ATOMIC];
// };

// Blockly.Blocks["buzzer"] = {
//   init: function () {
//     this.appendValueInput("buzzer").setCheck(null).appendField("Buzzer");
//     this.setPreviousStatement(true, null);
//     this.setNextStatement(true, null);
//     this.setTooltip("");
//     this.setHelpUrl("");
//   },
// };

// Blockly.JavaScript["buzzer"] = function (block) {
//   var value_buzzer = Blockly.JavaScript.valueToCode(
//     block,
//     "buzzer",
//     Blockly.JavaScript.ORDER_ATOMIC
//   );
//   // TODO: Assemble JavaScript into code variable.
//   var code = `Buzzer : ${value_buzzer}`;
//   return code;
// };
//custom block menyalakan buzzer on
Blockly.Blocks["aktuator_buzzer_on"] = {
  init: function () {
    this.appendDummyInput("buzzer")
      .appendField("Buzzer")
      .appendField(
        new Blockly.FieldDropdown([
          ["ON", "ON"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour("120")
  },
};
Blockly.JavaScript["aktuator_buzzer_on"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_buzzer = Blockly.JavaScript.valueToCode(
    block,
    "buzzer",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish( "piezo", "${dropdown_kondisi}", "0");`;
  return code;
};


Blockly.Blocks["aktuator_buzzer_off"] = {
  init: function () {
    this.appendDummyInput("buzzer")
      .appendField("Buzzer")
      .appendField(
        new Blockly.FieldDropdown([
          ["OFF", "OFF"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour("160")
  },
};

Blockly.JavaScript["aktuator_buzzer_off"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_buzzer = Blockly.JavaScript.valueToCode(
    block,
    "buzzer",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish( "piezo", "${dropdown_kondisi}", "0");`;
  return code;
};

//custom block timer
Blockly.Blocks['set_timer'] = {
  init: function () {
    this.appendDummyInput()
      .appendField("set delay")
      .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"]]), "number")
      .appendField("seconds(s)");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip("");
    this.setHelpUrl("");
  }
};
Blockly.JavaScript['set_timer'] = function (block) {
  var dropdown_number = block.getFieldValue('number');
  var sensor = Blockly.JavaScript.valueToCode(
    block,
    "sensor",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `delay(${dropdown_number*1000});`;
  return code;
};


//blocklyduino example


// goog.provide('Blockly.Blocks.custom');

// goog.require('Blockly.Blocks');


// led delay 1 s
Blockly.Blocks["aktuator_led_delay_1s"] = {
  init: function () {
    this.appendDummyInput("led")
      .appendField("Set LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
        ]),
        "kondisi"
      )
      .appendField("with delay 1 seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour(65);
  },
};

Blockly.JavaScript["aktuator_led_delay_1s"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_led = Blockly.JavaScript.valueToCode(
    block,
    "led",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("leddelay1", "${dropdown_kondisi}", "0");`;
  return code;
};

// led delay 3s
Blockly.Blocks["aktuator_led_delay_3s"] = {
  init: function () {
    this.appendDummyInput("led")
      .appendField("Set LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
        ]),
        "kondisi"
      )
      .appendField("with delay 3 seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour(315);
  },
};

Blockly.JavaScript["aktuator_led_delay_3s"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_led = Blockly.JavaScript.valueToCode(
    block,
    "led",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("leddelay3", "${dropdown_kondisi}", "0");`;
  return code;
};

// led delay 1 s
Blockly.Blocks["aktuator_led_delay_5s"] = {
  init: function () {
    this.appendDummyInput("led")
      .appendField("Set LED")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
        ]),
        "kondisi"
      )
      .appendField("with delay 5 seconds");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
    this.setColour(330);
  },
};

Blockly.JavaScript["aktuator_led_delay_5s"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_led = Blockly.JavaScript.valueToCode(
    block,
    "led",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("leddelay5", "${dropdown_kondisi}", "0");`;
  return code;
};

//add delay custom block
Blockly.Blocks["delay_only"] = {
  init: function () {
    this.appendDummyInput("delay")
      .appendField("DELAY")
      .appendField(
        new Blockly.FieldDropdown([
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
        ]),
        "kondisi"
      );
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip("");
    this.setHelpUrl("");
  },
};

Blockly.JavaScript["delay_only"] = function (block) {
  var dropdown_kondisi = block.getFieldValue("kondisi");
  var value_led = Blockly.JavaScript.valueToCode(
    block,
    "led",
    Blockly.JavaScript.ORDER_ATOMIC
  );
  // TODO: Assemble JavaScript into code variable.
  var code = `client.publish("delay", "${dropdown_kondisi*1000}", "0");`;
  return code;
};


