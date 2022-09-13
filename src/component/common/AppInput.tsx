import React, { FunctionComponent } from "react";
import styled from "styled-components";

const AppInputWrapper = styled("div")`
  margin-bottom: 10px;
  label {
    margin-bottom: 0.5em;
    color: #444;
    font-weight: lighter;
  }
  input {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
    width: 100%;
  }
  span {
    color: red;
    padding-top: 3px;
  }
`;

interface appInputProps {
  label: string;
  value?: string | number;
  onChange?: (e: any) => void;
  name: string;
  type?: string;
  required?: boolean;
  errorText: string | null;
}

const AppInput: FunctionComponent<appInputProps> = ({
  label,
  value,
  onChange,
  name,
  type,
  required,
  errorText,
}) => {
  return (
    <AppInputWrapper>
      <label style={{ paddingTop: "6px" }}>
        {label}:
        <input
          name={name}
          type={type ? type : "text"}
          value={value}
          onChange={onChange}
          required={required ? required : false}
        />
        {errorText && <span>{errorText}</span>}
      </label>
    </AppInputWrapper>
  );
};

export default AppInput;
