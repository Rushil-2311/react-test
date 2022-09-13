import React, { useState } from "react";
import { AppButton } from "../../component/common/AppButton";
import AppInput from "../../component/common/AppInput";
import {
  checkIfEmailIdExist,
  storeDataIntoDb,
} from "../../helper/helperMethods";
import {
  FormDataInputs,
  FormErrors,
} from "../../types/interface/service.signup";
import * as S from "./signupStyle";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormDataInputs>({
    name: "",
    password: "",
    username: "",
    email: "",
  });
  const [error, setError] = useState<FormErrors>({
    name: null,
    password: null,
    username: null,
    email: null,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (checkIfEmailIdExist(formData.email)) {
      return setFromsError("email", "This email is already taken");
    }
    storeDataIntoDb(formData);
  };
  const setFromDataValues = (type: string, value: string) => {
    setFormData((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  const setFromsError = (type: string, value: string | null) => {
    setError((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Account</h1>
      <AppInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        errorText={error.name}
        onChange={(e) => setFromDataValues("name", e.target.value)}
        required
      />
      <AppInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        errorText={error.username}
        onChange={(e) => setFromDataValues("username", e.target.value)}
        required
      />
      <AppInput
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        errorText={error.email}
        onChange={(e) => setFromDataValues("email", e.target.value)}
        required
      />
      <AppInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        errorText={error.password}
        onChange={(e) => setFromDataValues("password", e.target.value)}
        required
      />
      <AppButton buttonName="Submit" onClick={(e: any) => handleSubmit(e)} />
      <S.AlreadyHaveAcc>
        Already have an account?{" "}
        <S.LoginSpan onClick={() => navigate("/signin")}>Login</S.LoginSpan>{" "}
      </S.AlreadyHaveAcc>
    </form>
  );
};

export default SignUp;
