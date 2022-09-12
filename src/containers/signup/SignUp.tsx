import React, { useState } from "react";
import { AppButton } from "../../component/common/AppButton";
import AppInput from "../../component/common/AppInput";
import { formDataInputs } from "../../services/interface/service.signup";

const SignUp = () => {
  const [formData, setFormData] = useState<formDataInputs>({
    name: "",
    password: "",
    username: "",
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
      <h1>Create Account</h1>
      <AppInput
        label="Name"
        name="name"
        type="text"
        value={formData.name}
        onChange={(e) => setFromDataValues("name", e.target.value)}
        required
      />
      <AppInput
        label="Username"
        name="username"
        type="text"
        value={formData.username}
        onChange={(e) => setFromDataValues("username", e.target.value)}
        required
      />
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

export default SignUp;
