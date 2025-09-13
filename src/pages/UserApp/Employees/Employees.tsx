// import { EmployeesWrapper } from "./styles"
// function Employees() {
//     return (
//         <EmployeesWrapper >Employees</EmployeesWrapper>
//     )
// }

// export default Employees

import React from "react";
import { EmployeesWrapper } from "./styles";
import  Card  from "pages/UserApp/Card/Card";

function Employees () {
  return (
    <EmployeesWrapper>
      <Card />
    </EmployeesWrapper>
  );
};

export default Employees;

