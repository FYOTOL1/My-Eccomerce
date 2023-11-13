import React from "react";
import "../../style/css/home/bigScreen.css";

export default function bigScreen() {
  return (
    <>
      <div className="bigScreen">
        <div className="commentCards">
          <img
            loading="lazy"
            className="img"
            src="../../../images/apple.webp"
            alt="Error"
          />
          <div className="card card1">
            <div className="user">
              <i className="fa-regular fa-circle-user"></i>
              <h2>ahmed</h2>
            </div>
            <div className="comment">
              <p>Nice Service</p>
              <i className="fa-regular fa-face-laugh-beam"></i>
            </div>
            <div className="rate">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-regular fa-star star-half-stroke"></i>
            </div>
          </div>
          <div className="card card2">
            <div className="user">
              <i className="fa-regular fa-circle-user"></i>
              <h2>ali</h2>
            </div>
            <div className="comment">
              <p>Safe Service</p>
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div className="rate">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-regular fa-star star emp"></i>
            </div>
          </div>
          <div className="card card3">
            <div className="user">
              <i className="fa-regular fa-circle-user"></i>
              <h2>lina</h2>
            </div>
            <div className="comment">
              <p>Heigh Quality</p>
              <i className="fa-regular fa-face-grin-hearts"></i>
            </div>
            <div className="rate">
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
              <i className="fa-solid fa-star star"></i>
            </div>
          </div>
        </div>
        <div className="desc">
          <h2>
            3a<span>Y</span>ez
          </h2>
          <button>Get Started</button>
          <div className="info">
            <div className="info_item already_sold">
              <p>already sold</p>
              <div className="range">{500}+</div>
            </div>
            <div className="info_item evaluation">
              <p>evaluation</p>
              <div className="range">{126}+</div>
            </div>
            <div className="info_item Customers">
              <p>Customers</p>
              <div className="range">{800}+</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
