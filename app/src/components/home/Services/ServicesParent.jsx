import React, { memo } from "react";
import Popular from "./Popular";
import Featured from "./Featured";
import "../../../style/css/home/servicesParent.css";

function PopularProducts() {
  return (
    <div className="about_services">
      <Popular />
      <Featured />
    </div>
  );
}

export default memo(PopularProducts);
