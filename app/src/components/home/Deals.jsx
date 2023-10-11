import React, { useEffect, useState } from "react";
import "../../style/css/home/deals.css";

export default function Deals() {
  const [TimeOf, setTimeOf] = useState();
  useEffect(() => {
    setInterval(() => {
      setTimeOf(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div className="deals">
      <img className="img" src="../../../images/stars_of_space.jpg" alt="" />
      <div className="deal">
        <div className="text">
          <p>Deals Of The Day</p>
          <p>{TimeOf}</p>
        </div>
        <div className="services">
          <div className="cards">
            <div className="card">
              <div className="imgParent">
                <img
                  className="img"
                  src="../../../images/mac_book.jpg"
                  alt="Error"
                />
              </div>
              <h3>Mac Book</h3>
              <div className="desc">
                <p>Nice Color With Heigh Quality</p>
              </div>
              <div className="info">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="price">
                  <span>$</span>
                  {199.5}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgParent">
                <img
                  className="img"
                  src="../../../images/mac_book.jpg"
                  alt="Error"
                />
              </div>
              <h3>Mac Book</h3>
              <div className="desc">
                <p>Nice Color With Heigh Quality</p>
              </div>
              <div className="info">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="price">
                  <span>$</span>
                  {199.5}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgParent">
                <img
                  className="img"
                  src="../../../images/mac_book.jpg"
                  alt="Error"
                />
              </div>
              <h3>Mac Book</h3>
              <div className="desc">
                <p>Nice Color With Heigh Quality</p>
              </div>
              <div className="info">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="price">
                  <span>$</span>
                  {199.5}
                </p>
              </div>
            </div>
            <div className="card">
              <div className="imgParent">
                <img
                  className="img"
                  src="../../../images/mac_book.jpg"
                  alt="Error"
                />
              </div>
              <h3>Mac Book</h3>
              <div className="desc">
                <p>Nice Color With Heigh Quality</p>
              </div>
              <div className="info">
                <div className="rate">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star-half-stroke"></i>
                </div>
                <p className="price">
                  <span>$</span>
                  {199.5}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
