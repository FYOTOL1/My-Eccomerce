import React, { useEffect, useRef, useState } from "react";
import "../../style/css/auth.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const Store = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setmsg] = useState("");
  const navigation = useNavigate();
  const inpRef = useRef();

  useEffect(() => {
    inpRef.current.focus();
    if (Store.nav) {
      navigation("/");
    }
  }, [Store.nav, navigation]);

  const handleSubmit = () => {
    if (email.length && password.length) {
      dispatch(LoginUser({ email, password }));
      navigation("/");
    } else {
      setmsg("Incorrect Email OR Password");
    }
  };

  return (
    <>
      <div className="auth">
        {msg || Store?.login_error ? (
          <div className="message">{msg || Store?.login_error}</div>
        ) : null}
        <div className="form login">
          <div className="logo">
            <h2>3AYEZ</h2>
          </div>
          <div className="inp email">
            <label htmlFor="email">Email</label>
            <input
              style={
                Store?.login_error || email?.length <= 1
                  ? { outlineColor: "#ff000065" }
                  : null
              }
              placeholder="Email"
              ref={inpRef}
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
              style={
                Store?.login_error || password?.length <= 1
                  ? { outlineColor: "#ff000065" }
                  : null
              }
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
