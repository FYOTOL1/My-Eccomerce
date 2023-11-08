import React from "react";
import LayoutAdmin from "../LayoutAdmin";
import LOADING from "../../LOADING";
import "../../../style/css/admin/pages.css";

export default function Pages() {
  return (
    <>
      <LayoutAdmin pageName={"pages"}>
        <LOADING>
          <div className="pages">
            <div className="card">
              <img src="../../../../images/homepageimg.png" alt="" />
              <h1>Home Page</h1>
            </div>
            <div className="card">
              <img src="../../../../images/productspageimg.png" alt="" />
              <h1>Products Dash</h1>
            </div>
            <div className="card">
              <img src="../../../../images/userspageimg.png" alt="" />
              <h1>Users Dash</h1>
            </div>
          </div>
        </LOADING>
      </LayoutAdmin>
    </>
  );
}
