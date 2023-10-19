import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AUTH from "../../components/AUTH";
import LOADING from "../../components/LOADING";
import "../../style/css/products/product.css";
import { useDispatch, useSelector } from "react-redux";
import { GetProduct } from "../../Redux/slices/productsSlice";

export default function Product() {
  const product = useSelector((state) => state?.products);
  const p = useSelector((state) => state?.products?.data);
  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(GetProduct(params.id));
    if (!product?.data || product?.error) {
      navigate("/products");
    }
  }, [dispatch, navigate, params.id, product?.error]);

  const RATE =
    p?.rate === 1 ? (
      <>
        <i className="fa-solid fa-star star"></i>
      </>
    ) : p?.rate === 2 ? (
      <>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
      </>
    ) : p?.rate === 3 ? (
      <>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
      </>
    ) : p?.rate === 4 ? (
      <>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
      </>
    ) : p?.rate === 4.5 ? (
      <>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-regular fa-star-half-stroke"></i>
      </>
    ) : p?.rate === 5 ? (
      <>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
        <i className="fa-solid fa-star star"></i>
      </>
    ) : (
      ""
    );

  return (
    <>
      <AUTH type={"user"}>
        <LOADING>
          <div className="product">
            <div className="product-cont">
              <>
                <div className="img">
                  <img src={p?.img} alt="Error" />
                </div>
                <div className="details">
                  <div className="title">
                    <h3>{p?.title}</h3>
                  </div>
                  <div className="info type">{p?.type}</div>
                  <div className="info">{p?.info}</div>
                  <div className="price">
                    <p>{p.price}$</p>
                  </div>
                  <div className="rate">{RATE}</div>
                  <div className="add-cart">
                    <button>To Cart</button>
                  </div>
                </div>
              </>
            </div>
          </div>
        </LOADING>
      </AUTH>
    </>
  );
}
