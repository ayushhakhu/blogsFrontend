import React, { useMemo, useCallback } from "react";
import { Form } from "../organisms/Form";
import { Paper } from "../molecules/Paper";
import { useLogin } from "../../api/mutations/useLogin";
import { useNavigate } from "react-router-dom";
import { Snackbar } from "../molecules/Snackbar";

const LoginPage = () => {
  const naviagte = useNavigate();
  const { mutate, isError, isSuccess } = useLogin();
  const fields = useMemo(
    () => [
      { name: "UserMail", type: "text", required: true },
      { name: "UserPassword", type: "password", required: true },
    ],
    []
  );

  const onClickHandler = useCallback(
    (data) => {
      const payload = { email: data.UserMail, password: data.UserPassword };
      mutate(payload, {
        onSuccess: (data) => {
          naviagte("/");
        },
      });
    },
    [mutate, naviagte]
  );

  if (isError) {
    return <Snackbar message="Please Login with Valid Credentials" />;
  }
  return (
    <Paper elevation={0}>
      <Form fields={fields} onClickHandler={onClickHandler} formtitle="Login" />
    </Paper>
  );
};

export default LoginPage;
