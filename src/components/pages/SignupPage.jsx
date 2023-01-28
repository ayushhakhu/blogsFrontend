import React, { useMemo, useCallback, useState } from "react";
import { Paper } from "../molecules/Paper";
import { Form } from "../organisms/Form";
import { AppBar } from "../organisms/AppBar";
import { useSignup } from "../../api/mutations/useSignup";
import AlertProvider from "../atoms/AlertProvider";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const { mutate, isSuccess, isError, isLoading, status } = useSignup();

  const fields = useMemo(
    () => [
      { name: "FirstName", type: "Text" },
      { name: "LastName", type: "Text" },
      { name: "UserMail", type: "Text" },
      { name: "UserPassword", type: "password" },
    ],
    []
  );

  const [showSuccessLogin, setshowSuccessLogin] = useState(false);
  const naviagte = useNavigate();

  const onClickHandler = useCallback(
    (data) => {
      mutate(
        {
          username: data.UserMail,
          password: data.UserPassword,
          firstName: data.FirstName,
          lastName: data.LastName,
        },
        {
          onSuccess: (data) => {
            setshowSuccessLogin((prevState) => !prevState);
            naviagte("/");
          },
        }
      );
    },
    [mutate]
  );

  return (
    <>
      <AppBar />
      <Paper elevation={0}>
        <Form
          fields={fields}
          onClickHandler={onClickHandler}
          formtitle="Signup"
        />
      </Paper>
      {showSuccessLogin && (
        <AlertProvider severity="info" text="Sucessfully Logged in" />
      )}
    </>
  );
};

export default SignupPage;
