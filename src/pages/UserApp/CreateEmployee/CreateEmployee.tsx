import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { createContext, useState } from "react";

import {
  ContactUsContainer,
  CreateEmployeeWrapper,
  InputsContainer,
} from "./styles";

import {
  type UserDataContext,
  type UserData,
  EMPLOYEE_FORM_VALUES,
} from "./types";

export const EmployeeContext = createContext<UserDataContext>({
  userData: undefined,
  setUserData: () => {},
});

function CreateEmployee() {
  const [userData, setUserData] = useState<undefined | UserData>(undefined);

  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name must be no more than 50 characters")
      .required("Name is required"),
    [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
      .min(2, "Surname must be at least 2 characters")
      .max(15, "Surname must be no more than 15 characters")
      .required("Surname is required"),
    [EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
      .min(1, "Age must be at least 1")
      .max(120, "Age must be no more than 120")
      .required("Age is required"),
    [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: Yup.string()
      .min(2, "Job Position must be at least 2 characters")
      .max(30, "Job Position must be no more than 30 characters"),
  });

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_VALUES.NAME]: "",
      [EMPLOYEE_FORM_VALUES.SURNAME]: "",
      [EMPLOYEE_FORM_VALUES.AGE]: "",
      [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setUserData({
        name: values.name.trim(),
        surname: values.surname.trim(),
        age: (values.age),
        jobPosition: (values.jobPosition),
      });
    },
  });

  return (
    <EmployeeContext.Provider value={{ userData, setUserData }}>
      <CreateEmployeeWrapper>
        <ContactUsContainer onSubmit={formik.handleSubmit}>
          {/* <Title>Create Employee</Title> */}
          <InputsContainer>
            <Input
              id="name-id"
              name={EMPLOYEE_FORM_VALUES.NAME}
              type="text"
              placeholder="John"
              label="Name*"
              value={formik.values[EMPLOYEE_FORM_VALUES.NAME]}
              onChange={formik.handleChange}
              error={formik.errors[EMPLOYEE_FORM_VALUES.NAME]}
            />
            <Input
              id="surname-id"
              name={EMPLOYEE_FORM_VALUES.SURNAME}
              type="text"
              placeholder="Johnson"
              label="Surname*"
              value={formik.values[EMPLOYEE_FORM_VALUES.SURNAME]}
              onChange={formik.handleChange}
              error={formik.errors[EMPLOYEE_FORM_VALUES.SURNAME]}
            />
            <Input
              id="age-id"
              name={EMPLOYEE_FORM_VALUES.AGE}
              type="text"
              placeholder="25"
              label="Age*"
              value={formik.values[EMPLOYEE_FORM_VALUES.AGE]}
              onChange={formik.handleChange}
              error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
            />

            <Input
              id="job-position-id"
              name={EMPLOYEE_FORM_VALUES["JOB POSITION"]}
              type="text"
              placeholder="QA"
              label="Job Position"
              // value={formik.values[EMPLOYEE_FORM_VALUES["JOB POSITION"]]}
              onChange={formik.handleChange}
              // error={formik.errors[EMPLOYEE_FORM_VALUES.AGE]}
            />
          </InputsContainer>
          <Button onClick={formik.handleSubmit} name="Create" type="submit" />
        </ContactUsContainer>
      </CreateEmployeeWrapper>
    </EmployeeContext.Provider>
  );
}

export default CreateEmployee;
