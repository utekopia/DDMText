package com.liferay.dynamic.data.mapping.form.field.type.ddmtext;

import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldType;
import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldTypeSettings;
import com.liferay.frontend.js.loader.modules.extender.npm.NPMResolver;

import org.osgi.service.component.annotations.Component;
import org.osgi.service.component.annotations.Reference;

/**
 * @author Marcellus Tavares
 */
@Component(
	immediate = true,
	property = {
		"ddm.form.field.type.description=ddmtext-description",
		"ddm.form.field.type.display.order:Integer=10",
		"ddm.form.field.type.group=customized", 
		"ddm.form.field.type.icon=text",
		"ddm.form.field.type.js.class.name=Liferay.DDM.Field.DDMText",
		"ddm.form.field.type.js.module=dynamic-data-mapping-form-field-type-ddmtext",
		"ddm.form.field.type.label=ddmtext-label",
		"ddm.form.field.type.name=ddmtext"
	},
	service = DDMFormFieldType.class
)
public class DDMTextDDMFormFieldType extends BaseDDMFormFieldType {

	@Override
	public String getModuleName() {
		return _npmResolver.resolveModuleName(
			"dynamic-data-mapping-form-field-type-ddmtext/DDMText/DDMText.es");
	}

	@Override
	public Class<? extends DDMFormFieldTypeSettings>
		getDDMFormFieldTypeSettings() {

		return DDMTextDDMFormFieldTypeSettings.class;
	}

	@Override
	public String getName() {
		return "ddmtext";
	}

	@Override
	public boolean isCustomDDMFormFieldType() {
		return true;
	}

	@Reference
	private NPMResolver _npmResolver;

}