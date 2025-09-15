import { EmployeesWrapper } from "./styles";
import Card from "pages/UserApp/Card/Card";
import { useContext } from "react";
import { EmployeeContext } from "pages/UserApp/CreateEmployee/CreateEmployee";


function Employees() {
   const { userData } = useContext(EmployeeContext);

  return (
    <EmployeesWrapper>
       {userData && <Card/>}
    </EmployeesWrapper>
      )
}

export default Employees;