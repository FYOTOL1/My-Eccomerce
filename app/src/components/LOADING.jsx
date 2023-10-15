import React from "react";
import { useSelector } from "react-redux";
import "../style/LOADING.css";

export default function LOADING({ children }) {
  const Auth = useSelector((state) => state.auth);

  return <>{Auth?.loading ? <div className="loader"></div> : children}</>;
}
