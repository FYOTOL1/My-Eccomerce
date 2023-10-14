import React from "react";
import Signup from "../../components/auth/Signup";
import AUTH from "../../components/AUTH";

export default function SignupPage() {
  return (
    <>
      <AUTH type={"auth"}>
        <Signup />
      </AUTH>
    </>
  );
}
