import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../style/css/home/aboutServices.css";
import { GetFeaturedServices } from "../../../Redux/slices/featuredServicesSlice";

export default function Featured() {
  const Store = useSelector((state) => state?.featured);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFeaturedServices());
  }, [dispatch]);

  return (
    <div className="featured">
      <h2>featured services</h2>
      <div className="cards">
        {Store.data &&
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
          ))}
      </div>
    </div>
  );
}
