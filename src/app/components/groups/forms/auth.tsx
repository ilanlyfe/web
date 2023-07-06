import React, { FC, useState } from "react";
// import { useSession, signIn, signOut } from 'next-auth/react'
import { AuthModalProps } from "@/interfaces";

export const AuthModal: FC<AuthModalProps> = () => {
  // const { data: session } = useSession()

  if (true) {
    return (
      <div>
        <h1>AuthModal</h1>
        {/* <button onClick={() => signOut()}>Sign out</button> */}
      </div>
    );
  } else {
    return (
      <div>
        <h1>Other Modal</h1>
        {/* <button onClick={() => signIn()}>Sign out</button> */}
      </div>
    );
  }
};
