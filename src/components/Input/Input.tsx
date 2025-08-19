import styled from '@emotion/styled';

const InputContainer = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
  font-size: 16px;
  font-family: Arial, sans-serif;

  &:disabled {
    background-color: #f0f0f0;
    color: #666;
    cursor: not-allowed;
  }

  &:focus {
    outline: none;
    border-color: #aaa;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  ${props => props.error`
    border-color: #f00;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.1);
  `}
`;

interface InputProps {
  disabled?: boolean;
  error?: string;
}

const Input: React.FC<InputProps> = ({ disabled, error, ...props }) => {
  return (
    <InputContainer
      disabled={disabled}
      error={error}
      {...props}
    />
  );
};

export default Input;