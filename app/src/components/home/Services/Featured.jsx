import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../style/css/home/servicesParent.css";
import { Link } from "react-router-dom";
import { GetProduct } from "../../../Redux/slices/productsSlice";
import LOADING from "../../LOADING";

export default function Featured() {
  const Store = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetProduct());
  }, [dispatch]);

  return (
    <div className="featured">
      <h2>featured services</h2>
      <div className="cards">
        <LOADING loader_type={"circle"} condition={Store?.data?.length === 0}>
          {Store?.data?.length && Store.loading !== true ? (
            <div className="cards">
              {Store.data?.map((d, i) =>
                i >= 6 ? null : (
                  <Link
                    to={`/products/${d?._id}`}
                    key={d?._id}
                    className="card"
                  >
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
            "null"
          )}
        </LOADING>
      </div>
    </div>
  );
}
