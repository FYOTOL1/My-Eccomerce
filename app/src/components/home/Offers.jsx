import React from "react";
import "../../style/css/home/offers.css";

export default function Offers() {
  return (
    <div className="offers">
      <div className="offer offer_1">
        <img
          loading="lazy"
          className="img"
          src="../../../images/controller.webp"
          alt="Error"
        />
        <div className="details">
          <p>{20}%</p>
          <p>Offer Of Games Accounts</p>
          <p>
            expires in: {6}
            {"h"}
          </p>
        </div>
      </div>
      <div className="offer offer_2">
        <img
          className="img"
          src="../../../images/social_media.webp"
          alt="Error"
        />
        <div className="details">
          <p>{40}%</p>
          <p>Offer Of Social media Followers And other</p>
          <p>
            expires in: {21}
            {"h"}
          </p>
        </div>
      </div>
      <div className="offer offer_3">
        <img
          loading="lazy"
          className="img"
          src="../../../images/money.webp"
          alt="Error"
        />
        <div className="details">
          <p>{75}%</p>
          <p>games money</p>
          <p>
            expires in: {17}
            {"m"}
          </p>
        </div>
      </div>
    </div>
  );
}
