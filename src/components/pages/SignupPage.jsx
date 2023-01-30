import React, { useMemo, useCallback } from "react";
import { Paper } from "../molecules/Paper";
import { Form } from "../organisms/Form";
import { AppBar } from "../organisms/AppBar";
import { useSignup } from "../../api/mutations/useSignup";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { mutate } = useSignup();

  const fields = useMemo(
    () => [
      { name: "FirstName", type: "Text", required: true },
      { name: "LastName", type: "Text", required: true },
      { name: "UserMail", type: "Text", required: true },
      { name: "UserPassword", type: "password", required: true },
    ],
    []
  );

  const naviagte = useNavigate();

  const onSignupHander = useCallback(
    (data) => {
      const payload = {
        username: data.UserMail,
        password: data.UserPassword,
        firstName: data.FirstName,
        lastName: data.LastName,
      };
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
        <Form
          fields={fields}
          onClickHandler={onSignupHander}
          formtitle="Signup"
        />
      </Paper>
    </>
  );
};

export default SignupPage;
