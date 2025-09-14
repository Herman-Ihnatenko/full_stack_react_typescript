import { useFormik } from "formik";
import * as Yup from "yup";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import {
  CreateEmployeeWrapper,
  ContactUsContainer,
  InputsContainer,
} from "./styles";
import { type UserData, EMPLOYEE_FORM_VALUES } from "./types";
import { EmployeeContext } from "../EmployeeMain/EmployeeContext";

function CreateEmployee() {
  const { setEmployees } = useContext(EmployeeContext);
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_VALUES.NAME]: Yup.string().required("Required"),
    [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string().required("Required"),
    [EMPLOYEE_FORM_VALUES.AGE]: Yup.string().required("Required"),
    [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: Yup.string(),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const newEmployee: UserData = {
        name: values.name.trim(),
        surname: values.surname.trim(),
        age: values.age,
        jobPosition: values.jobPosition,
      };
      setEmployees((previousArray) => [...previousArray, newEmployee]);
      navigate("/employees");
    },
  });

  return (
    <CreateEmployeeWrapper>
      <ContactUsContainer onSubmit={formik.handleSubmit}>
        <InputsContainer>
          <Input
            id="name"
            name={EMPLOYEE_FORM_VALUES.NAME}
            type="text"
            placeholder="John"
            label="Name*"
            value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]}
          />
          <Input
            id="surname"
            name={EMPLOYEE_FORM_VALUES.SURNAME}
            type="text"
            placeholder="Johnson"
            label="Surname*"
            value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]}
          />
          <Input
            id="age"
            name={EMPLOYEE_FORM_VALUES.AGE}
            type="text"
            placeholder="25"
            label="Age*"
            value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
          />
          <Input
            id="job-position"
            name={EMPLOYEE_FORM_VALUES["JOB POSITION"]}
            type="text"
            placeholder="QA"
            label="Job Position"
            value={formik.values[EMPLOYEE_FORM_VALUES["JOB POSITION"]]}
            onChange={formik.handleChange}
            error={formik.errors[EMPLOYEE_FORM_VALUES["JOB POSITION"]]}
          />
        </InputsContainer>
        <Button onClick={formik.handleSubmit} name="Create" type="submit" />
      </ContactUsContainer>
    </CreateEmployeeWrapper>
  );
}

export default CreateEmployee;
