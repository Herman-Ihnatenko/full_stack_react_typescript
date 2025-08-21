
import { InputWrapper, InputLabel, InputComponent, ErrorText } from "./styles";


const InputContainer = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Arial, sans-serif;


function Input({
  id,
  name,
  type = "text",
  placeholder,
  label,
  disabled = false,
  error = undefined,
  value,
  onChange,
}: InputProps) {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <InputComponent
        disabled={disabled}
        $error={error}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {!!error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>

  );
};

export default Input;