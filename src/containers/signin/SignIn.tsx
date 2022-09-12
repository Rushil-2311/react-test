import React, { useState } from "react";
import { AppButton } from "../../component/common/AppButton";
import AppInput from "../../component/common/AppInput";
import { checkIfEmailIdExist } from "../../helper/helperMethods";
import {
  FormDataInputsForSignIn,
  FormErrorsForSignIn,
} from "../../types/interface/service.signin";

const SignIn = () => {
  const [formData, setFormData] = useState<FormDataInputsForSignIn>({
    password: "",
    email: "",
  });
  const [error, setError] = useState<FormErrorsForSignIn>({
    password: null,
    email: null,
  });
  const handleSubmit = (e: any) => {
    if (!checkIfEmailIdExist(formData.email)) {
      return setFromsError("email", "Your credentials are worng");
    }
    e.preventDefault();
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
    </form>
  );
};

export default SignIn;
