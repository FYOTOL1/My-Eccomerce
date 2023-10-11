import React, { useState } from "react";
import "../style/css/header.css";

export default function Header() {
  const [dropList, setDropList] = useState(false);
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
              <button>login</button>
              <p>/</p>
              <button>sign up</button>
            </div>
            <div className="download">
              <button>download</button>
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
                <button>login</button>
                <p>/</p>
                <button>sign up</button>
              </li>
              <li>
                <button>download</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
