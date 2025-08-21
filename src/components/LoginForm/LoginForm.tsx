import { type FormEvent, useState, type ChangeEvent } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { LoginFormContainer, InputsContainer, Title } from "./styles";
function LoginForm() {
    const CAT_FACT_URL = "https://catfact.ninja/fact";
  // const [inputValue, setInputValue] = useState<String>("");

  // const changeInputValue = (event) => {
  //   console.log(event.target.value);
  //   console.log("onChange event");
  //   setInputValue(event.target.value);
  // };

  const [email, setEmail] = useState<string>("");
  const [passward, setPassword] = useState<string>("");
  const changeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const changePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const login = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Login started");
  };
  return (
    <LoginFormContainer onSubmit={login}>
      <Title>Login form</Title>
      <InputsContainer>
        <Input
          id="email-id"
          name="email"
          type="email"
          placeholder="Enter your email"
          label="Email"
        />
        <Input
          id="password-id"
          name="password"
          type="password"
          placeholder="Enter your password"
          label="Password"
        />
      </InputsContainer>
      <input value={inputValue} onChange={changeInputValue} />
      <Button name="Login" type="submit" />
    </LoginFormContainer>
  );
}
export default LoginForm;
