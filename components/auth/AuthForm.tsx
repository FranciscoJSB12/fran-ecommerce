import { useState, ChangeEvent, FormEvent } from "react";
import AuthInput from "./AuthInput";
import SubmitBtn from "./SubmitBtn";

interface AuthFormProps {
  isLoggingIn: boolean;
}

interface AuthFormState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  checkedPassword: string;
}

export default function AuthForm({ isLoggingIn }: AuthFormProps) {
  const [inputs, setInputs] = useState({} as AuthFormState);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <form
      onSubmit={submitHandler}
      className="w-full max-w-96 mx-auto px-4 flex flex-col items-center justify-center gap-5"
    >
      {!isLoggingIn && (
        <>
          <AuthInput
            name="firstName"
            placeHolder="First name"
            changeHandler={changeHandler}
            value={inputs.firstName}
          />
          <AuthInput
            name="lastName"
            placeHolder="Last name"
            changeHandler={changeHandler}
            value={inputs.lastName}
          />
        </>
      )}

      <AuthInput
        name="email"
        placeHolder="Email"
        changeHandler={changeHandler}
        value={inputs.email}
      />
      <AuthInput
        name="password"
        type="password"
        placeHolder="Password"
        changeHandler={changeHandler}
        value={inputs.password}
      />

      {!isLoggingIn && (
        <>
          <AuthInput
            name="repeatPassword"
            type="password"
            placeHolder="Repeat password"
            changeHandler={changeHandler}
            value={inputs.checkedPassword}
          />
        </>
      )}

      <SubmitBtn />
    </form>
  );
}
