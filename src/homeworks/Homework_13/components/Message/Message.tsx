import { Message } from "./styles";

export default function message(message: { message: string }) {
  return <Message>{message.message}</Message>
}
