import React, { memo, useEffect } from "react";
import "../../../style/css/home/servicesParent.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../../../Redux/slices/productsSlice";
import { Link } from "react-router-dom";

function Popular() {
  const Store = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);

  useEffect(() => {}, [Store?.data]);

  return (
    <>
      <div className="popular">
        <h2>popular services</h2>
        {Store?.data?.length && Store.loading !== true ? (
          <div className="cards">
            {Store.data?.map((d, i) =>
              i >= 6 ? null : (
                <Link to={`/products/${d?._id}`} key={d?._id} className="card">
                  <div className="imgParent">
                    <img
                      loading="lazy"
                      className="img"
                      src={d?.img}
                      alt={d?.name}
                    />
                  </div>
                  <h3>{d?.name}</h3>
                  <div className="desc">
                    <p>{d?.info}</p>
                  </div>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star star"></i>
                      <p>{d?.rate}</p>
                    </div>
                    <p className="price">
                      <span>$</span>
                      {d?.price}
                    </p>
                  </div>
                </Link>
              )
            )}
          </div>
        ) : (
          <div className="load"></div>
        )}
      </div>
    </>
  );
}

export default memo(Popular);
