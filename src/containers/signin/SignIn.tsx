import React, { useState } from "react";
import { AppButton } from "../../component/common/AppButton";
import AppInput from "../../component/common/AppInput";
import {
  checkIfEmailIdExist,
  checkPassowrdIsValid,
  setCurrentLoginUserInfo,
} from "../../helper/helperMethods";
import {
  FormDataInputsForSignIn,
  FormErrorsForSignIn,
} from "../../types/interface/signin";
import { useNavigate } from "react-router-dom";
import * as S from "../signup/signupStyle";
const SignIn = () => {
  const [formData, setFormData] = useState<FormDataInputsForSignIn>({
    password: "",
    email: "",
  });
  const [error, setError] = useState<FormErrorsForSignIn>({
    password: null,
    email: null,
  });
  const navigate = useNavigate();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!checkIfEmailIdExist(formData.email)) {
      return setFromsError("email", "Your credentials are worng");
    }
    if (!checkPassowrdIsValid(formData.email, formData.password)) {
      return setFromsError("email", "Your credentials are worng");
    }
    setCurrentLoginUserInfo(formData.email, formData.password);
    navigate("/dashboard/?_start=0&_limit=5");
  };
  const setFromDataValues = (type: string, value: string | number) => {
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
      <h1>Login </h1>
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
        Don't have an account?{" "}
        <S.LoginSpan onClick={() => navigate("/signup")}>Signup</S.LoginSpan>{" "}
      </S.AlreadyHaveAcc>
    </form>
  );
};

export default SignIn;
