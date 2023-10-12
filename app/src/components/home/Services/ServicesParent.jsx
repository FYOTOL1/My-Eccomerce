import React from "react";
import Popular from "./Popular";
import Featured from "./Featured";
import "../../../style/css/home/aboutServices.css";

export default function PopularProducts() {
  return (
    <div className="about_services">
      <Popular />
      <Featured />
    </div>
  );
}
