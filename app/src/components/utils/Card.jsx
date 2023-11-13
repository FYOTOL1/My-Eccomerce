import React from "react";

export default function Card(Store) {
  return
  Store?.data?.map((data) => (
    <div key={data?._id} className="card">
      <div className="imgParent">
        <img loading="lazy" className="img" src={data?.img} alt={data?.name} />
      </div>
      <h3>{data?.name}</h3>
      <div className="desc">
        <p>{data?.info}</p>
      </div>
      <div className="info">
        <div className="rate">
          <i className="fa-solid fa-star star"></i>
          <p>{data?.rate}</p>
        </div>
        <p className="price">
          <span>$</span>
          {data?.price}
        </p>
      </div>
    </div>
  ));
}
