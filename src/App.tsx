import React from "react";
import FormSection from "./Components/FormSection";
import FormFooter from "./Components/FormGrid/FormFooter";
import Form from "./Components/Form";
import FormBody from "./Components/FormGrid/FormBody";
import FormColumn from "./Components/FormGrid/FormColumn";
import Fieldset from "./Components/Fieldset/Fieldset";
import FieldsetHeader from "./Components/Fieldset/FieldsetHeader";
import CustomControl from "./utils/CustomControl";
import {
  fieldsetLogo,
  fieldsetPhone,
  fieldsetLink,
  fieldsetSocial
} from "./utils/constants";

export default function App() {
  return (
    <div className="App">
      <FormSection component="section">
        <Form name="about-company" noValidate>
          <FormBody>
            <FormColumn>
              <Fieldset>
                <FieldsetHeader title="Логотип" />
                {fieldsetLogo.map((item) => (
                  <React.Fragment key={item.id}>
                    {CustomControl(item)}
                  </React.Fragment>
                ))}
              </Fieldset>
            </FormColumn>

            <FormColumn>
              <Fieldset>
                <FieldsetHeader
                  title="Телефон"
                  description="Используется для кнопки «Позвонить» на странице вашей компании."
                />
                {CustomControl(fieldsetPhone)}
              </Fieldset>
              <Fieldset>
                <FieldsetHeader
                  title="Ссылка компании"
                  description="Используется для того, чтобы клиенты могли поситить ваш веб-сайт"
                />
                {fieldsetLink.map((item) => (
                  <React.Fragment key={item.id}>
                    {CustomControl(item)}
                  </React.Fragment>
                ))}
              </Fieldset>
              <Fieldset>
                <FieldsetHeader title="Социальные сети" />
                {CustomControl(fieldsetSocial)}
              </Fieldset>
            </FormColumn>
          </FormBody>
          <FormFooter />
        </Form>
      </FormSection>
    </div>
  );
}
