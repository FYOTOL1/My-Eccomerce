import React from "react";
import "../../style/css/home/otherOffers.css";

export default function OtherOffers() {
  return (
    <div className="other_offers">
      <div className="cards">
        <div className="card">
          <img
            className="img"
            src="../../../images/apple-watch.jpg"
            alt="Error"
          />
        </div>
        <div className="card">
          <img
            className="img"
            src="../../../images/apple_iphone.jpg"
            alt="Error"
          />
        </div>
        <div className="card">
          <img
            className="img"
            src="../../../images/xbox-controller.jpg"
            alt="Error"
          />
        </div>
      </div>
    </div>
  );
}
