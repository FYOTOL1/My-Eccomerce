import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../../../style/css/home/aboutServices.css";

export default function Featured() {
  const Store = useSelector((state) => state?.featured);
  const [data, setdata] = useState([]);
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
  }, []);
  return (
    <div className="featured">
      <h2>featured services</h2>
      <div className="cards">{data && data}</div>
    </div>
  );
}
