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

  const add_to_cart = (e) => {
    const get_cart_from_local_storage = localStorage.getItem("cart");

    const isset = JSON.parse(get_cart_from_local_storage)?.filter(
      (p) => p?._id === e?._id
    );
    if (isset?.length) {
      alert("Product Already Exist");
    } else {
      alert("Added Successfully");
      const get_cart_products = JSON.parse(localStorage.getItem("cart"));
      if (get_cart_products?.length) {
        localStorage.setItem("cart", JSON.stringify([e, ...get_cart_products]));
      } else {
        localStorage.setItem("cart", JSON.stringify([e]));
      }
    }
  };

  return (
    <>
      <AUTH type={"user"}>
        <LOADING>
          <div className="product">
            <div className="product-cont">
              <>
                <div className="img">
                  <img loading="lazy" src={p?.img} alt="Error" />
                </div>
                <div className="details">
                  <div className="title">
                    <h3>{p?.title}</h3>
                  </div>
                  <div className="info type">Category: {p?.category}</div>
                  <div className="info">Info: {p?.info}</div>
                  <div className="info">Quantity: {p?.quantity}</div>
                  <div className="price">
                    <p>{p.price}$</p>
                  </div>
                  <div className="rate">
                    <i className="fa-solid fa-star star"></i>
                    <p>{p?.rate}</p>
                  </div>
                  <div className="add-cart">
                    <button onClick={(e) => navigate("/products")}>Back</button>
                    <button onClick={(e) => add_to_cart(p)}>To Cart</button>
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
