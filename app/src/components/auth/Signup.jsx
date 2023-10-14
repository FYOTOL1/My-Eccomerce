import React, { useState } from "react";
import "../../style/css/auth.css";
import { Link } from "react-router-dom";

export default function Signup() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {};
  return (
    <>
      <div className="auth">
        <div className="form signup">
          <div className="logo">
            <h2>3AYEZ</h2>
          </div>
          <div className="inp username">
            <label htmlFor="username">username</label>
            <input
              placeholder="username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              type="text"
              id="username"
              required
              autoComplete="on"
            />
          </div>
          <div className="inp email">
            <label htmlFor="email">email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              type="text"
              id="email"
              required
              autoComplete="on"
            />
          </div>
          <div className="inp phonenumber">
            <label htmlFor="phonenumber">phone number</label>
            <input
              placeholder="phonenumber"
              value={phone_number}
              onChange={(e) => setphone_number(e.target.value)}
              type="text"
              id="phonenumber"
              required
              autoComplete="on"
            />
          </div>
          <div className="inp password">
            <label htmlFor="password">password</label>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              type="text"
              id="password"
              required
              autoComplete="on"
            />
          </div>
          <Link className="link" to={"/auth/login"}>
            Have An Account
          </Link>
          <button onClick={(e) => handleSubmit()}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
