import React, { useEffect, useState } from "react";
import "../../../style/css/home/aboutServices.css";
import { useSelector } from "react-redux";

export default function Popular() {
  const Store = useSelector((state) => state?.popular);
  const [data, setdata] = useState([]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const maping = () => {
    return (
      Store &&
      Store?.data?.map((e) => (
        <div key={e?._id} className="card">
          <div className="imgParent">
            <img className="img" src={e?.img} alt={e?.name} />
          </div>
          <h3>{e?.name}</h3>
          <div className="desc">
            <p>{e?.info}</p>
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
              {e?.price}
            </p>
          </div>
        </div>
      ))
    );
  };

  useEffect(() => {
    setdata(maping());
  }, [maping]);
  return (
    <>
      <div className="popular">
        <h2>popular services</h2>
        <div className="cards">{Store.length ? data : null}</div>
      </div>
    </>
  );
}
