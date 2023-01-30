import React, { useMemo, useCallback } from "react";
import { Form } from "../organisms/Form";
import { Paper } from "../molecules/Paper";
import { AppBar } from "../organisms/AppBar";
import { useLogin } from "../../api/mutations/useLogin";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const naviagte = useNavigate();
  const { mutate } = useLogin();
  const fields = useMemo(
    () => [
      { name: "UserMail", type: "text", required: true },
      { name: "UserPassword", type: "password", required: true },
    ],
    []
  );

  const loginHandler = useCallback(
    (data) => {
      const payload = { username: data.UserMail, password: data.UserPassword };
      mutate(payload, {
        onSuccess: (data) => {
          naviagte("/");
        },
      });
    },
    [mutate, naviagte]
  );

  return (
    <>
      <AppBar />
      <Paper elevation={0}>
        <Form fields={fields} onClickHandler={loginHandler} formtitle="Login" />
      </Paper>
    </>
  );
};

export default LoginPage;
