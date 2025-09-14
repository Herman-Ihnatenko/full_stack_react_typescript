import {
  CardComponent,
  CardInfo,
  CardTitle,
  CardInfoContainer,
} from "./styles";
import { useContext } from "react";
import { EmployeeContext } from "pages/UserApp/CreateEmployee/CreateEmployee";

function Card() {
  const { userData } = useContext(EmployeeContext);

  return (
    <CardComponent>
      <CardInfoContainer>
        <CardTitle>Name</CardTitle>
        <CardInfo>{userData?.name}</CardInfo>
      </CardInfoContainer>

      <CardInfoContainer>
        <CardTitle>Surname</CardTitle>
        <CardInfo>{userData?.surname}</CardInfo>
      </CardInfoContainer>

      <CardInfoContainer>
        <CardTitle>Age</CardTitle>
        <CardInfo>{userData?.age}</CardInfo>
      </CardInfoContainer>

      <CardInfoContainer>
        <CardTitle>Job Position</CardTitle>
        <CardInfo>{userData?.jobPosition}</CardInfo>
      </CardInfoContainer>
    </CardComponent>
  );
}
export default Card;
