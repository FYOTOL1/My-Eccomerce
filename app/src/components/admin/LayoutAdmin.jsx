import React from "react";
import HeaderDash from "./HeaderDash";
import "../../style/css/admin/layoutAdmin.css";
import NavigationList from "./NavigationList";
import AUTH from "../AUTH";

export default function LayoutAdmin({ children, pageName }) {
  return (
    <>
      <AUTH type={"user"}>
        <div className="layoutAdmin">
          <div className="HEAD">
            <HeaderDash type={pageName} />
          </div>
          <div className="SECTION">
            <NavigationList pageName={pageName} />
            <>{children}</>
          </div>
        </div>
      </AUTH>
    </>
  );
}
