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
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (Store.nav) {
      navigation("/");
    }
  }, [Store.nav, navigation]);

  const handleSignup = () => {
    if (
      username.length >= 3 &&
      username.length <= 10 &&
      email.length >= 8 &&
      email.length <= 30 &&
      password.length >= 6 &&
      password.length <= 20 &&
      phone_number.length <= 14
    ) {
      dispatch(SignupUser({ username, email, password, phone_number }));
      console.log(Store.signup_error);
    } else {
      let errorMessage = "";
      if (username.length < 3) {
        errorMessage += "Username should be at least 3 characters long. ";
      } else if (username.length > 10) {
        errorMessage += "Username should not exceed 10 characters. ";
      }
      if (email.length < 8) {
        errorMessage += "Email should be at least 8 characters long. ";
      } else if (email.length > 30) {
        errorMessage += "Email should not exceed 30 characters. ";
      }
      if (phone_number.length > 14) {
        errorMessage += "Phone number should not exceed 14 characters. ";
      }
      if (password.length < 6) {
        errorMessage += "Password should be at least 6 characters long. ";
      } else if (password.length > 20) {
        errorMessage += "Password should not exceed 20 characters. ";
      }
      setError(errorMessage);
    }
  };

  return (
    <>
      <div className="auth">
        {error || Store.signup_error ? (
          <div className="message">{Store?.signup_error}</div>
        ) : null}
        <div className="form signup">
          <div className="logo">
            <h2>3AYEZ</h2>
          </div>

          <div className="inp username">
            <label htmlFor="username">username</label>
            <input
              placeholder="username"
              onChange={(e) => setusername(e.target.value)}
              value={username}
              minLength={3}
              maxLength={10}
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
              maxLength={30}
              minLength={8}
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
              placeholder="phone number"
              onChange={(e) => setphone_number(e.target.value)}
              value={phone_number}
              maxLength={14}
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
              onChange={(e) => setpassword(e.target.value)}
              value={password}
              maxLength={20}
              minLength={6}
              type="text"
              id="password"
              required
              autoComplete="on"
            />
          </div>
          <Link className="link" to={"/auth/login"}>
            Have An Account
          </Link>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      </div>
    </>
  );
}
