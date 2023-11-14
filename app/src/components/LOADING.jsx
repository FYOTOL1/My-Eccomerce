import React from "react";
import { useSelector } from "react-redux";
import "../style/LOADING.css";

export default function LOADING({ children, stat, loader_type, condition }) {
  const Auth = useSelector((state) => state.auth);
  const Users = useSelector((state) => state.users);

  return (
    <>
      {Auth?.loading || Users?.loading || stat === true ? (
        <div className="loader2"></div>
      ) : loader_type === "circle" && condition ? (
        <div className="loader1"></div>
      ) : (
        children
      )}
    </>
  );
}
