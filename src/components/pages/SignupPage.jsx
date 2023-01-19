import React, { useMemo, useCallback } from "react";
import { Paper } from "../molecules/Paper";
import { Form } from "../organisms/Form";
import { AppBar } from "../organisms/AppBar";

const SignupPage = () => {
  const fields = useMemo(
    () => [
      { name: "UserMail", type: "Text" },
      { name: "UserPassword", type: "password" },
    ],
    []
  );

  const onClickHandler = useCallback((data) => {
    console.log(data);
  }, []);

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
    </>
  );
};

export default SignupPage;
