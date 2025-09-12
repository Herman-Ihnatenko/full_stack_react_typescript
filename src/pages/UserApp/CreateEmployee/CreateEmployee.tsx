// import { CreateEmployeeWrapper } from "./styles";
// function CreateEmployee() {
//   return <CreateEmployeeWrapper>CreateEmployee</CreateEmployeeWrapper>;
// }

// export default CreateEmployee;

// import { Formik, Form, Field, ErrorMessage } from "formik";
// import * as Yup from "yup";
// import Button from "components/Button/Button";
// import { CreateEmployeeWrapper } from "./styles";
// import { EMPLOYEE_FORM_VALUES } from "./types";

// const CreateEmployeeSchema = Yup.object().shape({
//   [EMPLOYEE_FORM_VALUES.NAME]: Yup.string()
//     .min(2, "Name must be at least 2 characters")
//     .max(50, "Name must be no more than 50 characters")
//     .required("Name is required"),
//   [EMPLOYEE_FORM_VALUES.SURNAME]: Yup.string()
//     .min(2, "Surname must be at least 2 characters")
//     .max(15, "Surname must be no more than 15 characters")
//     .required("Surname is required"),
//   [EMPLOYEE_FORM_VALUES.AGE]: Yup.string()
//     .min(1, "Age must be at least 1")
//     .max(120, "Age must be no more than 120")
//     .required("Age is required"),
//   [EMPLOYEE_FORM_VALUES["JOB POSITION"]]: Yup.string()
//     .min(2, "Job Position must be at least 2 characters")
//     .max(30, "Job Position must be no more than 30 characters"),
// });

// // interface CreateEmployeeCardProps {
// //   name: string;
// //   surname: string;
// //   age: number;
// //   jobPosition: string;
// // }

// // export const CreateEmployeeCard: React.FunctionComponent<CreateEmployeeCardProps> = (
// //   employee: any
// // ) => {
// //   const { name, surname, age, jobPosition } = employee;

// //   return (
// //     <div>
// //       <h1>{name}</h1>
// //       <p>{surname}</p>
// //       <p>{age}</p>
// //       <p>{jobPosition}</p>
// //     </div>
// //   );
// // };

// const CreateEmployee = () => {
//   const handleSubmit = (values: any, { setSubmitting }: any) => {
//     console.log(values);
//     setSubmitting(false);
//   };

//   return (
//     <CreateEmployeeWrapper>
//       <Formik
//         initialValues={{
//           name: "",
//           surname: "",
//           age: "",
//           jobPosition: "",
//         }}
//         validationSchema={CreateEmployeeSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting }) => (
//           <Form>
//             <Field label="Name*" type="text" name="name" placeholder="Name" />
//             <ErrorMessage name="name" component="div" />

//             <Field label="Surname*" type="text" name="surname" placeholder="Surname" />
//             <ErrorMessage name="surname" component="div" />

//             <Field label="Age*" type="text" name="age" placeholder="Age" />
//             <ErrorMessage name="age" component="div" />

//             <Field label="Job Position*" type="text" name="jobPosition" placeholder="Job Position" />
//             <ErrorMessage name="jobPosition" component="div" />

//             <Button type="submit" name="Create" disabled={isSubmitting} />
//           </Form>
//         )}
//       </Formik>
//     </CreateEmployeeWrapper>
//   );
// };

// export default CreateEmployee;

import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button/Button";
import Input from "components/Input/Input";

import { createContext, useState } from "react";

import { EMPLOYEE_FORM_VALUES, type UserData } from "./types";
import {
  CreateEmployeeWrapper,
  ContactUsContainer,
  InputsContainer,
  Title,
} from "./styles";

export const EmployeeContext = createContext({useData: undefined, setUserData: () => {}});

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
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
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
            label="Job Position*"
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

    // Todo: Зафиксить проблемы с контекстом