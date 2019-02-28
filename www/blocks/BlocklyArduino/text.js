
'use strict';

goog.provide('Blockly.Blocks.texts');

goog.require('Blockly.Blocks');

Blockly.Blocks.texts.HUE = "#8A55D7";

Blockly.Blocks['text_char'] = {
  init: function() {
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendDummyInput()
        .appendField(this.newQuote_(true))
        .appendField(new Blockly.FieldTextInput('',Blockly.FieldTextInput.char_validator), 'TEXT')
        .appendField(this.newQuote_(false));
    this.setOutput(true, 'String');
    this.setTooltip(Blockly.Msg.TEXT_CHAR_TOOLTIP);
  },
  newQuote_: function(open) {
	var file = '';
    if (open == this.RTL) {
      file = 'quote3.png';
    } else {
      file = 'quote2.png';
    }
    return new Blockly.FieldImage(Blockly.pathToMedia + file, 7, 12, '"');
  }
};

Blockly.Blocks['text_compare_string'] = {
    /**
   * Block for compare two strings.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.TEXT_COMPARE_STRING_HELPURL);
    this.setColour(Blockly.Blocks.texts.HUE);
    this.appendValueInput('STRING1')
        .setCheck('String')
        .appendField(Blockly.Msg.TEXT_COMPARE_STRING_TEXT);
    this.appendValueInput('STRING2')
        .setCheck('String')
        .appendField(Blockly.Msg.TEXT_COMPARE_STRING_TEXT2);
    this.setInputsInline(true);
    this.setOutput(true, 'Boolean');
    this.setTooltip(Blockly.Msg.TEXT_COMPARE_STRING_TOOLTIP);
  }
};