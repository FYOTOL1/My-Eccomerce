import React, { useEffect, useState } from "react";
import "../../style/css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { SignupUser } from "../../Redux/slices/authSlice";

export default function Signup() {
  const Store = useSelector((state) => state.auth);
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [phone_number, setphone_number] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (Store.nav) {
      navigation("/");
    }
  }, [Store.nav, navigation]);

  const handleSignup = (e) => {
    if (
      username?.length &&
      email?.length &&
      password?.length &&
      phone_number?.length
    ) {
      dispatch(SignupUser({ username, email, password, phone_number }));
      console.log("Login Successfully");
      return;
    }
    console.log("Missing Something");
  };
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
          <button onClick={(e) => handleSignup()}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
