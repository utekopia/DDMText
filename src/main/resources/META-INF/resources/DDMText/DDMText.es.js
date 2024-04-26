import 'dynamic-data-mapping-form-field-type/FieldBase/FieldBase.es';
import './DDMTextRegister.soy.js';
import Component from 'metal-component';
import Soy from 'metal-soy';
import templates from './DDMText.soy.js';
import {Config} from 'metal-state';

class DDMText extends Component {
	willReceiveState(changes) {
		if (changes.value) {
			this.setState(
				{
					_value: changes.value.newVal
				}
			);
		}
	}

	_handleFieldBlurred(event) {
		this.emit(
			'fieldBlurred',
			{
				fieldInstance: this,
				originalEvent: event,
				value: event.target.value
			}
		);
	}

	_handleFieldChanged(event) {
		this.setState(
			{
				value: event.target.value
			},
			() => {
				this.emit(
					'fieldEdited',
					{
						fieldInstance: this,
						originalEvent: event,
						value: event.target.value
					}
				);
			}
		);
	}

	_handleFieldFocused(event) {
		this.emit(
			'fieldFocused',
			{
				fieldInstance: this,
				originalEvent: event,
				value: event.target.value
			}
		);
	}

	_internalValueFn() {
		const {value} = this;

		return value;
	}
}

DDMText.STATE = {

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	_value: Config.string().internal().valueFn('_internalValueFn'),

	/**
	 * @default 'string'
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	dataType: Config.string().value('string'),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	displayStyle: Config.string().value('singleline'),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	errorMessage: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	fieldName: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	label: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	name: Config.string().required(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	placeholder: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	predefinedValue: Config.string().value(''),

	/**
	 * @default false
	 * @instance
	 * @memberof DDMText
	 * @type {?bool}
	 */

	readOnly: Config.bool().value(false),

	/**
	 * @default undefined
	 * @instance
	 * @memberof FieldBase
	 * @type {?(bool|undefined)}
	 */

	repeatable: Config.bool(),

	/**
	 * @default false
	 * @instance
	 * @memberof DDMText
	 * @type {?(bool|undefined)}
	 */

	required: Config.bool().value(false),

	/**
	 * @default true
	 * @instance
	 * @memberof DDMText
	 * @type {?(bool|undefined)}
	 */

	showLabel: Config.bool().value(true),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	spritemap: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	tip: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof FieldBase
	 * @type {?(string|undefined)}
	 */

	tooltip: Config.string(),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	type: Config.string().value('text'),

	/**
	 * @default undefined
	 * @instance
	 * @memberof DDMText
	 * @type {?(string|undefined)}
	 */

	value: Config.string().value('')
};

Soy.register(DDMText, templates);

export default DDMText;