import { CardComponent, CardInfo, CardTitle } from "./styles";
import type { UserData } from "../CreateEmployee/types";
import Button from "components/Button/Button";

interface CardProps {
  userData: UserData;
  onDelete?: () => void;
}

function Card({ userData, onDelete }: CardProps) {
  return (
    <CardComponent>
      <CardTitle>Name</CardTitle>
      <CardInfo>{userData.name}</CardInfo>
      <CardTitle>Surname</CardTitle>
      <CardInfo>{userData.surname}</CardInfo>
      <CardTitle>Age</CardTitle>
      <CardInfo>{userData.age}</CardInfo>
      <CardTitle>Job Position</CardTitle>
      <CardInfo>{userData.jobPosition}</CardInfo>
          {/* Только если передана onDelete — рендерим кнопку */}
      {/* {onDelete && ( */}
      <Button onClick={onDelete} name="Delete" type="submit"
  isRed/>
    </CardComponent>
  );
}

export default Card;
