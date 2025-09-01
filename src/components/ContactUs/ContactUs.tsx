/*
Задание
Требования
Создайте компоент ContactUs, который должен содержать в себе форму 
Контролировать форму нужно с помощью Formik 
Валидацию формы нужно делать с помощью Yup 
Используйте компоненты Input и Button 
Форма должна содержать следующие элементы:
Заголовок - Contact us 

Поле ввода "Full name":
лейбл "Full name*" 
плейсхолдер "Your full name" 
компонент Input; 
обязательное поле; 
тип данных: string; 
минимальное количество символов - 3;
максимальное количество символов - 50 

Поле ввода "Phone":
лейбл "Phone*" 
плейсхолдер "Your phone number" 
компонент Input; 
обязательное поле; 
тип данных: string; 
минимальное количество символов - 4; 
максимальное количество символов - 20 

Поле ввода "Email": 
лейбл "Email" 
плейсхолдер "Your email" 
компонент Input; 
тип данных: string; 
минимальное количество символов - 6; 
максимальное количество символов - 60 

Кнопка "Send request":
имя кнопки - SEND REQUEST; 
компонент Button; 
кнопка с типом submit. При клике на нее необходимо вывести сообщение в консоль, 
в котором будут перечислены все значения из полей в виде объекта
Примечания:
Для отображения компонента ContactUs создайте новый компонент Homework_11 
*/

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { CONTACT_FORM_VALUES } from "./types";
import { ContactUsContainer, InputsContainer, Title } from "./styles";

function ContactUsForm() {
  
  const validationSchema = Yup.object().shape({
    [CONTACT_FORM_VALUES.FULL_NAME]: Yup.string()
      .min(3, "Your name is too short!")
      .max(50, "Your name is too long!")
      .required("Required"),
    [CONTACT_FORM_VALUES.PHONE]: Yup.string()
      .min(4, "Your phone number is too short!")
      .max(20, "Your phone number is too long!")
      .required("Required"),
    [CONTACT_FORM_VALUES.EMAIL]: Yup.string()
      .min(6, "Your email is too short!")
      .max(60, "Your email is too long!")
      .email("Invalid email"),
  });

  const formik = useFormik({
    initialValues: {
      [CONTACT_FORM_VALUES.FULL_NAME]: "",
      [CONTACT_FORM_VALUES.PHONE]: "",
      [CONTACT_FORM_VALUES.EMAIL]: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <ContactUsContainer onSubmit={formik.handleSubmit}>
      <Title>Contact us</Title>
      <InputsContainer>
        <Input
          id="full-name-id"
          name={CONTACT_FORM_VALUES.FULL_NAME}
          type="text"
          placeholder="Your full name"
          label="Full name*"
          value={formik.values[CONTACT_FORM_VALUES.FULL_NAME]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.FULL_NAME]}
        />
        <Input
          id="phone-id"
          name={CONTACT_FORM_VALUES.PHONE}
          type="text"
          placeholder="Your phone number"
          label="Phone*"
          value={formik.values[CONTACT_FORM_VALUES.PHONE]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.PHONE]}
        />
        <Input
          id="email-id"
          name={CONTACT_FORM_VALUES.EMAIL}
          type="email"
          placeholder="Your email"
          label="Email"
          value={formik.values[CONTACT_FORM_VALUES.EMAIL]}
          onChange={formik.handleChange}
          error={formik.errors[CONTACT_FORM_VALUES.EMAIL]}
        />
      </InputsContainer>
      <Button onClick={formik.handleSubmit} name="SEND REQUEST" type="submit" />
    </ContactUsContainer>
  );
}

export default ContactUsForm;
