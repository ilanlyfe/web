import { FC, FormEvent, useState, useEffect, Fragment } from "react";
import { Dialog } from "@headlessui/react";
import { Login } from "./login";
import { getSession } from "next-auth/react";
import { Formik, Field, Form } from "formik";
import { handleSignUp } from "@/utils/auth";

interface FormProps {
  closeFn: (data: any) => void;
  type: FormType;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  errMsg?: string;
  title?: string;
}

interface FormData {
  username: string;
  password: string;
}

export enum FormType {
  SIGNUP = "signup",
  LOGIN = "login",
  RESET_PASSWORD = "reset_password",
}

const JForm: FC<FormProps> = ({ closeFn, onSubmit, errMsg, title, type }) => {
  const [formData, setFormData] = useState<FormData>();

  useEffect(() => {
    console.log("formData", formData);
    switch (type) {
      case FormType.LOGIN:
      // update the session
    }
  }, [formData]);

  return <Fragment>{renderFormType(type)}</Fragment>;
};

export default JForm;

function renderFormType(type: FormType) {
  console.log("renderFormType", type);
  switch (type) {
    case FormType.LOGIN:
      return <Login />;

    case FormType.SIGNUP:
      return (
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={async (values) => {
            let { email, password } = values;
            let resp = await handleSignUp(email, password);
            await new Promise((resolve) => setTimeout(resolve, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <Field name="email" type="email" />
            <Field name="password" type="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      );

    default:
      return (
        <>
          <p className="for-debugging">-- no valid form type provided --</p>
        </>
      );
  }
}
