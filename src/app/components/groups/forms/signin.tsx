import React, { FC, useState } from "react";
import { Formik, Field, Form } from "formik";
import { SignInProps } from "@/interfaces";
import { handleSignIn } from "@/utils/auth";

export const SignIn: FC<SignInProps> = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={async (values) => {
        let { email, password } = values;
        let resp = await handleSignIn(email, password);
        await new Promise((resolve) => setTimeout(resolve, 500));
        alert(JSON.stringify(resp, null, 2));
      }}
    >
      <Form>
        <Field name="email" type="email" />
        <Field name="password" type="password" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

/*
   const { mutateUser } = useUser({
        redirectTo: '/profile-sg',
        redirectIfFound: true,
      })

      ---------
      import useUser from '../../../lib/useUser'
import Form from '../../molecules/forms'
import fetchJson, { FetchError } from '../../../lib/fetchJson'

      ----------

       <Form
          errorMessage={errorMsg}
          onSubmit={async function handleSubmit(event) {
            event.preventDefault()

            const body = {
              username: event.currentTarget.username.value,
            }

            try {
              mutateUser(
                await fetchJson('/api/login', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify(body),
                })
              )
            } catch (error) {
              if (error instanceof FetchError) {
                setErrorMsg(error.data.message)
              } else {
                console.error('An unexpected error happened:', error)
              }
            }
          }}
        />

        ----


      const [errorMsg, setErrorMsg] = useState('')
    return (
        <div>
            <h1>AuthModal</h1>
           
        </div>
    )
    
*/
