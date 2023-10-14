import React, { useEffect, useState } from "react";
import "../../style/css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const Store = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    if (Store.nav) {
      navigation("/");
    }
  }, [Store.nav, navigation]);

  const handleSubmit = () => {
    if (email.length && password.length) {
      dispatch(LoginUser({ email, password }));
    } else {
      console.log("Incorrect Email OR Password");
    }
  };

  return (
    <>
      <div className="auth">
        <div className="form login">
          <div className="logo">
            <h2>3AYEZ</h2>
          </div>
          <div className="inp email">
            <label htmlFor="email">Email</label>
            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              id="email"
              required
              autoComplete="on"
            />
          </div>
          <div className="inp password">
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              required
              autoComplete="on"
            />
          </div>
          <div className="link">
            <Link to={"/auth/signup"}>Create Account</Link>
          </div>
          <button onClick={handleSubmit}>Login</button>
        </div>
      </div>
    </>
  );
}
