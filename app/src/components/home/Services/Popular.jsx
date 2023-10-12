import React, { useEffect } from "react";
import "../../../style/css/home/aboutServices.css";
import { useDispatch, useSelector } from "react-redux";
import { GetPopularServices } from "../../../Redux/slices/popularServicesSlice";

export default function Popular() {
  const Store = useSelector((state) => state.popular);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPopularServices());
  }, [dispatch]);

  return (
    <>
      <div className="popular">
        <h2>popular services</h2>
        <div className="cards">
          {Store?.data?.length
            ? Store?.data?.map((e) => (
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
            : "No Data"}
        </div>
      </div>
    </>
  );
}
