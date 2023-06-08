import React, { FC, useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ForgotPasswordProps } from "@/interfaces";

export const ForgotPassword: FC<ForgotPasswordProps> = () => {
  return (
    <div>
      <h1>Signup</h1>
      <button onClick={() => signOut()}>Sign out</button>
    </div>
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
