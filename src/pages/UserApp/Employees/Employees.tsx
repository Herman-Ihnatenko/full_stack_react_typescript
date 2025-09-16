import { useContext } from "react";
import { EmployeeContext } from "../EmployeeMain/EmployeeContext";
import Card from "pages/UserApp/Card/Card";
import { EmployeesWrapper } from "./styles";

function Employees() {
  const { employees, setEmployees } = useContext(EmployeeContext);

  const deleteEmployee = (index: number) => {
    const updated = employees.filter((_emoloyees, i) => i !== index);
    setEmployees(updated);
  };

  return (
    <EmployeesWrapper>
      {employees.map((employee, index) => (
        <Card
          key={index}
          userData={employee}
          onDelete={() => deleteEmployee(index)}
        />
      ))}
    </EmployeesWrapper>
  );
}

export default Employees;
