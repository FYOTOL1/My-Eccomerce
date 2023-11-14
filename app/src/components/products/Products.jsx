import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../../style/css/products/products.css";
import {
  GetProducts,
  products_search_user_un_filter,
} from "../../Redux/slices/productsSlice";
import AUTH from "../AUTH";
import { Link } from "react-router-dom";
import LOADING from "../LOADING";

function Products({ Store }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <AUTH type="user">
      <LOADING
        loader_type={"circle"}
        condition={Store.loading || Store.data?.length === 0}
      >
        <div className="products-user">
          <div className="cards">
            {Store?.data?.length && Store.loading !== true ? (
              Store?.products_filter?.length ? (
                Store?.products_filter.map((e) => (
                  <Link key={e?._id} to={`/products/${e._id}`} className="card">
                    <div className="imgParent">
                      <img
                        loading="lazy"
                        className="img"
                        src={e?.img}
                        alt="Error"
                      />
                    </div>
                    <h3>{e?.title}</h3>
                    <div className="desc">
                      <p>{e?.info}</p>
                    </div>
                    <div className="info">
                      <div className="rate">
                        <i className="fa-solid fa-star star"></i>
                        <p>{e?.rate}</p>
                      </div>
                      <p className="price">
                        <span>{`${e?.price}$`}</span>
                      </p>
                    </div>
                  </Link>
                ))
              ) : (
                Store?.data.map((e) => (
                  <Link
                    onClick={(r) => products_search_user_un_filter()}
                    key={e?._id}
                    to={`/products/${e._id}`}
                    className="card"
                  >
                    <div className="imgParent">
                      <img
                        loading="lazy"
                        className="img"
                        src={e?.img}
                        alt="Error"
                      />
                    </div>
                    <h3>{e?.title}</h3>
                    <div className="desc">
                      <p>{e?.info}</p>
                    </div>
                    <div className="info">
                      <div className="rate">
                        <i className="fa-solid fa-star star"></i>
                        <p>{e?.rate}</p>
                      </div>
                      <p className="price">
                        <span>{`${e?.price}$`}</span>
                      </p>
                    </div>
                  </Link>
                ))
              )
            ) : (
              <div className="load"></div>
            )}
          </div>
        </div>
      </LOADING>
    </AUTH>
  );
}

export default memo(Products);
