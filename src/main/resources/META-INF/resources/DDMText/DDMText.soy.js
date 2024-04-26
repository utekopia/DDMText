/* jshint ignore:start */
import Component from 'metal-component';
import Soy from 'metal-soy';

var templates;
goog.loadModule(function(exports) {
var soy = goog.require('soy');
var soydata = goog.require('soydata');
// This file was automatically generated from DDMText.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace DDMText.
 * @public
 */

goog.module('DDMText.incrementaldom');

goog.require('goog.soy.data.SanitizedContent');
var incrementalDom = goog.require('incrementaldom');
goog.require('soy.asserts');
var soyIdom = goog.require('soy.idom');

var $templateAlias1 = Soy.getTemplate('FieldBase.incrementaldom', 'render');


/**
 * @param {{
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldChanged: (*|null|undefined),
 *  _handleFieldFocused: (*|null|undefined),
 *  _value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  displayStyle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  errorMessage: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  predefinedValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  readOnly: (boolean|null|undefined),
 *  repeatable: (boolean|null|undefined),
 *  required: (boolean|null|undefined),
 *  showLabel: (boolean|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  tip: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  tooltip: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $render(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldChanged = opt_data._handleFieldChanged;
  /** @type {*|null|undefined} */
  var _handleFieldFocused = opt_data._handleFieldFocused;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var _value = soy.asserts.assertType(opt_data._value == null || (goog.isString(opt_data._value) || opt_data._value instanceof goog.soy.data.SanitizedContent), '_value', opt_data._value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var displayStyle = soy.asserts.assertType(opt_data.displayStyle == null || (goog.isString(opt_data.displayStyle) || opt_data.displayStyle instanceof goog.soy.data.SanitizedContent), 'displayStyle', opt_data.displayStyle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var errorMessage = soy.asserts.assertType(opt_data.errorMessage == null || (goog.isString(opt_data.errorMessage) || opt_data.errorMessage instanceof goog.soy.data.SanitizedContent), 'errorMessage', opt_data.errorMessage, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var label = soy.asserts.assertType(opt_data.label == null || (goog.isString(opt_data.label) || opt_data.label instanceof goog.soy.data.SanitizedContent), 'label', opt_data.label, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var predefinedValue = soy.asserts.assertType(opt_data.predefinedValue == null || (goog.isString(opt_data.predefinedValue) || opt_data.predefinedValue instanceof goog.soy.data.SanitizedContent), 'predefinedValue', opt_data.predefinedValue, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var readOnly = soy.asserts.assertType(opt_data.readOnly == null || (goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0), 'readOnly', opt_data.readOnly, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var repeatable = soy.asserts.assertType(opt_data.repeatable == null || (goog.isBoolean(opt_data.repeatable) || opt_data.repeatable === 1 || opt_data.repeatable === 0), 'repeatable', opt_data.repeatable, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var required = soy.asserts.assertType(opt_data.required == null || (goog.isBoolean(opt_data.required) || opt_data.required === 1 || opt_data.required === 0), 'required', opt_data.required, 'boolean|null|undefined');
  /** @type {boolean|null|undefined} */
  var showLabel = soy.asserts.assertType(opt_data.showLabel == null || (goog.isBoolean(opt_data.showLabel) || opt_data.showLabel === 1 || opt_data.showLabel === 0), 'showLabel', opt_data.showLabel, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var spritemap = soy.asserts.assertType(opt_data.spritemap == null || (goog.isString(opt_data.spritemap) || opt_data.spritemap instanceof goog.soy.data.SanitizedContent), 'spritemap', opt_data.spritemap, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var tip = soy.asserts.assertType(opt_data.tip == null || (goog.isString(opt_data.tip) || opt_data.tip instanceof goog.soy.data.SanitizedContent), 'tip', opt_data.tip, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var tooltip = soy.asserts.assertType(opt_data.tooltip == null || (goog.isString(opt_data.tooltip) || opt_data.tooltip instanceof goog.soy.data.SanitizedContent), 'tooltip', opt_data.tooltip, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var param23 = function() {
    $content({_handleFieldBlurred: _handleFieldBlurred, _handleFieldChanged: _handleFieldChanged, _handleFieldFocused: _handleFieldFocused, displayStyle: displayStyle, id: id, name: name, placeholder: placeholder, predefinedValue: predefinedValue, readOnly: readOnly, value: _value}, null, opt_ijData);
  };
  $templateAlias1({contentRenderer: param23, errorMessage: errorMessage, id: id, label: label, repeatable: repeatable, required: required, showLabel: showLabel, spritemap: spritemap, tip: tip, tooltip: tooltip, name: name}, null, opt_ijData);
}
exports.render = $render;
/**
 * @typedef {{
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldChanged: (*|null|undefined),
 *  _handleFieldFocused: (*|null|undefined),
 *  _value: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  displayStyle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  errorMessage: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  label: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  predefinedValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  readOnly: (boolean|null|undefined),
 *  repeatable: (boolean|null|undefined),
 *  required: (boolean|null|undefined),
 *  showLabel: (boolean|null|undefined),
 *  spritemap: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  tip: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  tooltip: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$render.Params;
if (goog.DEBUG) {
  $render.soyTemplateName = 'DDMText.render';
}


/**
 * @param {{
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldChanged: (*|null|undefined),
 *  _handleFieldFocused: (*|null|undefined),
 *  displayStyle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  predefinedValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  readOnly: (boolean|null|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }} opt_data
 * @param {Object<string, *>=} opt_ijData
 * @param {Object<string, *>=} opt_ijData_deprecated
 * @return {void}
 * @suppress {checkTypes}
 */
function $content(opt_data, opt_ijData, opt_ijData_deprecated) {
  opt_ijData = opt_ijData_deprecated || opt_ijData;
  /** @type {!goog.soy.data.SanitizedContent|string} */
  var name = soy.asserts.assertType(goog.isString(opt_data.name) || opt_data.name instanceof goog.soy.data.SanitizedContent, 'name', opt_data.name, '!goog.soy.data.SanitizedContent|string');
  /** @type {*|null|undefined} */
  var _handleFieldBlurred = opt_data._handleFieldBlurred;
  /** @type {*|null|undefined} */
  var _handleFieldChanged = opt_data._handleFieldChanged;
  /** @type {*|null|undefined} */
  var _handleFieldFocused = opt_data._handleFieldFocused;
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var displayStyle = soy.asserts.assertType(opt_data.displayStyle == null || (goog.isString(opt_data.displayStyle) || opt_data.displayStyle instanceof goog.soy.data.SanitizedContent), 'displayStyle', opt_data.displayStyle, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var id = soy.asserts.assertType(opt_data.id == null || (goog.isString(opt_data.id) || opt_data.id instanceof goog.soy.data.SanitizedContent), 'id', opt_data.id, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var placeholder = soy.asserts.assertType(opt_data.placeholder == null || (goog.isString(opt_data.placeholder) || opt_data.placeholder instanceof goog.soy.data.SanitizedContent), 'placeholder', opt_data.placeholder, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var predefinedValue = soy.asserts.assertType(opt_data.predefinedValue == null || (goog.isString(opt_data.predefinedValue) || opt_data.predefinedValue instanceof goog.soy.data.SanitizedContent), 'predefinedValue', opt_data.predefinedValue, '!goog.soy.data.SanitizedContent|null|string|undefined');
  /** @type {boolean|null|undefined} */
  var readOnly = soy.asserts.assertType(opt_data.readOnly == null || (goog.isBoolean(opt_data.readOnly) || opt_data.readOnly === 1 || opt_data.readOnly === 0), 'readOnly', opt_data.readOnly, 'boolean|null|undefined');
  /** @type {!goog.soy.data.SanitizedContent|null|string|undefined} */
  var value = soy.asserts.assertType(opt_data.value == null || (goog.isString(opt_data.value) || opt_data.value instanceof goog.soy.data.SanitizedContent), 'value', opt_data.value, '!goog.soy.data.SanitizedContent|null|string|undefined');
  var attributes__soy60 = function() {
    incrementalDom.attr('class', 'ddm-field-ddmtext form-control');
    incrementalDom.attr('name', name);
    incrementalDom.attr('type', 'text');
    incrementalDom.attr('data-oninput', _handleFieldChanged);
    incrementalDom.attr('data-onfocus', _handleFieldFocused);
    if (id) {
      incrementalDom.attr('id', id);
    }
    if (placeholder) {
      incrementalDom.attr('placeholder', placeholder);
    }
    incrementalDom.attr('data-onblur', _handleFieldBlurred);
    incrementalDom.attr('data-oninput', _handleFieldChanged);
    if (readOnly) {
      incrementalDom.attr('disabled', 'disabled');
    }
    if (value) {
      incrementalDom.attr('value', value);
    } else {
      incrementalDom.attr('value', predefinedValue);
    }
  };
  if (displayStyle == 'singleline') {
    incrementalDom.elementOpenStart('input');
        attributes__soy60();
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('input');
  } else {
    incrementalDom.elementOpenStart('textarea');
        attributes__soy60();
    incrementalDom.elementOpenEnd();
    incrementalDom.elementClose('textarea');
  }
}
exports.content = $content;
/**
 * @typedef {{
 *  name: (!goog.soy.data.SanitizedContent|string),
 *  _handleFieldBlurred: (*|null|undefined),
 *  _handleFieldChanged: (*|null|undefined),
 *  _handleFieldFocused: (*|null|undefined),
 *  displayStyle: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  id: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  placeholder: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  predefinedValue: (!goog.soy.data.SanitizedContent|null|string|undefined),
 *  readOnly: (boolean|null|undefined),
 *  value: (!goog.soy.data.SanitizedContent|null|string|undefined)
 * }}
 */
$content.Params;
if (goog.DEBUG) {
  $content.soyTemplateName = 'DDMText.content';
}

exports.render.params = ["name","_handleFieldBlurred","_handleFieldChanged","_handleFieldFocused","_value","displayStyle","errorMessage","id","label","placeholder","predefinedValue","readOnly","repeatable","required","showLabel","spritemap","tip","tooltip"];
exports.render.types = {"name":"string","_handleFieldBlurred":"any","_handleFieldChanged":"any","_handleFieldFocused":"any","_value":"string","displayStyle":"string","errorMessage":"string","id":"string","label":"string","placeholder":"string","predefinedValue":"string","readOnly":"bool","repeatable":"bool","required":"bool","showLabel":"bool","spritemap":"string","tip":"string","tooltip":"string"};
exports.content.params = ["name","_handleFieldBlurred","_handleFieldChanged","_handleFieldFocused","displayStyle","id","placeholder","predefinedValue","readOnly","value"];
exports.content.types = {"name":"string","_handleFieldBlurred":"any","_handleFieldChanged":"any","_handleFieldFocused":"any","displayStyle":"string","id":"string","placeholder":"string","predefinedValue":"string","readOnly":"bool","value":"string"};
templates = exports;
return exports;

});

class DDMText extends Component {}
Soy.register(DDMText, templates);
export { DDMText, templates };
export default templates;
/* jshint ignore:end */
