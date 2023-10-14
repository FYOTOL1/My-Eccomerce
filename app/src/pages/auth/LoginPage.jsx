import React from "react";
import Login from "../../components/auth/Login";
import AUTH from "../../components/AUTH";

export default function LoginPage() {
  return (
    <>
      <AUTH type={"auth"}>
        <Login />
      </AUTH>
    </>
  );
}
