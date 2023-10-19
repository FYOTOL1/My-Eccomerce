import React from "react";
import { useSelector } from "react-redux";
import "../style/LOADING.css";

export default function LOADING({ children }) {
  const Auth = useSelector((state) => state.auth);
  const Users = useSelector((state) => state.users);
  const Products = useSelector((state) => state.products);

  return (
    <>
      {Auth?.loading || Users?.loading || Products?.loading ? (
        <div className="loader"></div>
      ) : (
        children
      )}
    </>
  );
}
