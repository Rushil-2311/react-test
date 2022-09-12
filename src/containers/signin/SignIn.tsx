import React, { useState } from "react";
import { AppButton } from "../../component/common/AppButton";
import AppInput from "../../component/common/AppInput";
import { formDataInputsForSignIn } from "../../services/interface/service.signin";

const SignIn = () => {
  const [formData, setFormData] = useState<formDataInputsForSignIn>({
    password: "",
    email: "",
  });

  const handleSubmit = (event: any) => {
    event.preventDefault();
  };
  const setFromDataValues = (type: string, value: string | number) => {
    setFormData((prev) => {
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
        onChange={(e) => setFromDataValues("email", e.target.value)}
        required
      />
      <AppInput
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={(e) => setFromDataValues("password", e.target.value)}
        required
      />
      <AppButton buttonName="Submit" />
    </form>
  );
};

export default SignIn;
