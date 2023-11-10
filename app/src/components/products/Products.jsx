import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../style/css/products/products.css";
import { GetProducts } from "../../Redux/slices/productsSlice";
import AUTH from "../AUTH";
import LOADING from "../LOADING";

export default function Products() {
  const Store = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProducts());
  }, [dispatch]);
  return (
    <AUTH type="user">
      <LOADING>
        <div className="products">
          <br />
          <h2>Products</h2>
          <br />
          <div className="cards">
            {Store?.data?.length
              ? Store?.data.map((e) => (
                  <div className="card">
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
                  </div>
                ))
              : "null"}
          </div>
        </div>
      </LOADING>
    </AUTH>
  );
}
