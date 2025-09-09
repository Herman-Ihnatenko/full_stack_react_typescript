import {type FC} from "react";
import  Message  from "homeworks/Homework_13/components/Message/Message";
interface CardProps {
  message: string;
}

const Card: FC<CardProps> = (message: { message: string }) => {
  return (
    <div>
      <h1>Tom Sawyer</h1>
      <Message message={message.message} />
    </div>
  );
};

export default Card;
