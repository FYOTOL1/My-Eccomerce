import React from "react";
import HeaderDash from "./HeaderDash";
import "../../style/css/admin/layoutAdmin.css";
import NavigationList from "./NavigationList";

export default function LayoutAdmin({ children, pageName }) {
  return (
    <>
      <div className="layoutAdmin">
        <div className="HEAD">
          <HeaderDash />
        </div>
        <div className="SECTION">
          <NavigationList pageName={pageName} />
          <>{children}</>
        </div>
      </div>
    </>
  );
}
