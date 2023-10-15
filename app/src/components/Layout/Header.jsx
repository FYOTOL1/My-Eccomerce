import React, { useEffect, useState } from "react";
import "../../style/css/layout/header.css";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

export default function Header() {
  const [dropList, setDropList] = useState(false);
  const [Authed, setAuthed] = useState(false);
  const cookie = new Cookies();
  useEffect(() => {
    const cookie = new Cookies();
    const checkAuthed = cookie.get("authorization");
    if (checkAuthed?.length) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, []);

  const handleLogout = async () => {
    cookie.remove("authorization");
    const check = cookie.get("authorization");
    cookie.remove("authorization");
    window.location.reload();
    if (!check) {
      setAuthed(false);
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <p>
            <span>3</span>a<span>Y</span>ez
          </p>
        </div>
        <div className="search">
          <label htmlFor="search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </label>
          <input id="search" placeholder="search products" type="text" />
        </div>
        <div className="options">
          <div className="row">
            <div className="status">
              {Authed ? (
                <button onClick={() => handleLogout()} className="Link">
                  logout
                </button>
              ) : (
                <>
                  <Link className="Link" to={"/auth/login"}>
                    login
                  </Link>
                  <p>/</p>
                  <Link className="Link" to={"/auth/signup"}>
                    sign up
                  </Link>
                </>
              )}
            </div>
            <div className="download">
              <Link className="Link">download</Link>
            </div>
          </div>
          <div className="list">
            {dropList ? (
              <i
                onClick={(e) => setDropList(!dropList)}
                className="fa-solid fa-bars-staggered"
              ></i>
            ) : (
              <i
                onClick={(e) => setDropList(!dropList)}
                className="fa-solid fa-bars"
              ></i>
            )}
          </div>
        </div>
        {dropList ? (
          <div className="drop_list">
            <ul>
              <li>
                <Link className="link" to="auth/login">
                  login
                </Link>
                <p>/</p>
                <Link className="link" to="auth/signup">
                  sign up
                </Link>
              </li>
              <li>
                <Link className="Link">download</Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
