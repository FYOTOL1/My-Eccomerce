import React from "react";
import LayoutAdmin from "../LayoutAdmin";
import LOADING from "../../LOADING";
import "../../../style/css/admin/pages.css";
import { Link } from "react-router-dom";

export default function Pages() {
  return (
    <>
      <LayoutAdmin pageName={"pages"}>
        <LOADING>
          <div className="pages">
            <Link to={"/"} className="card">
              <img
                loading="lazy"
                src="../../../../images/homepageimg.webp"
                alt="Error"
              />
              <h1>Home Page</h1>
            </Link>
            <Link to={"/admin/products"} className="card">
              <img
                loading="lazy"
                src="../../../../images/productspageimg.webp"
                alt="Error"
              />
              <h1>Products Dash</h1>
            </Link>
            <Link to={"/admin/users"} className="card">
              <img
                loading="lazy"
                src="../../../../images/userspageimg.webp"
                alt="Error"
              />
              <h1>Users Dash</h1>
            </Link>
            <Link to={"/products"} className="card">
              <img
                loading="lazy"
                src="../../../../images/productspageimg.png"
                alt="Error"
              />
              <h1>Products Page</h1>
            </Link>
          </div>
        </LOADING>
      </LayoutAdmin>
    </>
  );
}
