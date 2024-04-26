package com.liferay.dynamic.data.mapping.form.field.type.ddmtext;


 import com.liferay.dynamic.data.mapping.form.field.type.BaseDDMFormFieldRenderer;
 import com.liferay.dynamic.data.mapping.form.field.type.DDMFormFieldRenderer;
 import com.liferay.dynamic.data.mapping.model.DDMFormField;
 import com.liferay.dynamic.data.mapping.render.DDMFormFieldRenderingContext;
 import com.liferay.portal.kernel.template.Template;
 import com.liferay.portal.kernel.template.TemplateConstants;
 import com.liferay.portal.kernel.template.TemplateResource;
 
 import java.util.Map;
 
 import org.osgi.service.component.annotations.Activate;
 import org.osgi.service.component.annotations.Component;
 import org.osgi.service.component.annotations.Deactivate;
 import org.osgi.service.component.annotations.Reference;
 
 /**
  * @author Marcellus Tavares
  */
 @Component(
     immediate = true, property = "ddm.form.field.type.name=ddmtext",
     service = DDMFormFieldRenderer.class
 )
 public class DDMTextDDMFormFieldRenderer extends BaseDDMFormFieldRenderer {
 
     @Override
     public String getTemplateLanguage() {
         return TemplateConstants.LANG_TYPE_SOY;
     }
 
     @Override
     public String getTemplateNamespace() {
         return "DDMText.render";
     }
 
     @Override
     public TemplateResource getTemplateResource() {
         return _templateResource;
     }
 
     @Activate
     protected void activate(Map<String, Object> properties) {
         _templateResource = getTemplateResource(
             "/META-INF/resources/DDMText/DDMText.soy");
     }
 
     @Deactivate
     protected void deactivate() {
         _templateResource = null;
     }
 
     @Override
     protected void populateOptionalContext(
         Template template, DDMFormField ddmFormField,
         DDMFormFieldRenderingContext ddmFormFieldRenderingContext) {
 
         Map<String, Object> parameters =
             ddmtextDDMFormFieldTemplateContextContributor.getParameters(
                 ddmFormField, ddmFormFieldRenderingContext);
 
         template.putAll(parameters);
     }
 
     @Reference
     protected DDMTextDDMFormFieldTemplateContextContributor
         ddmtextDDMFormFieldTemplateContextContributor;
 
     private TemplateResource _templateResource;
 
 }