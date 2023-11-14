import React, { useEffect, useState } from "react";
import "../../style/css/products/layout.css";
import { Link } from "react-router-dom";

export default function Cart() {
  const [data, setdata] = useState([]);
  const [product_info, set_product_info] = useState({});

  console.log(product_info);

  useEffect(() => {
    const arr_data = localStorage.getItem("cart");
    if (arr_data?.length >= 1) {
      setdata(JSON.parse(arr_data));
      return;
    } else {
      setdata([]);
      return;
    }
  }, []);

  const delete_from_cart = () => {
    const get_from_local_storage = JSON.parse(localStorage.getItem("cart"));
    if (get_from_local_storage?.length) {
      const find_product = get_from_local_storage?.filter(
        (p) => p?._id === product_info?._id
      );
      if (find_product?.length) {
        localStorage.setItem(
          "cart",
          JSON.stringify(
            get_from_local_storage?.filter((p) => p?._id !== product_info?._id)
          )
        );
        set_product_info([]);
        const arr_data = localStorage.getItem("cart");
        if (arr_data?.length >= 1) {
          setdata(JSON.parse(arr_data));
          return;
        } else {
          setdata([]);
          return;
        }
      }
    }
  };

  return (
    <>
      <div className="cart-page">
        <div className="cart-products">
          <div className="cards">
            {data?.length
              ? data?.map((e) => (
                  <>
                    <div onClick={(a) => set_product_info(e)} className="card">
                      <div className="img">
                        <img src={e?.img} alt={e?.title} />
                      </div>
                      <div className="name">{e?.title}</div>
                      <div className="cate">{e?.category}</div>
                      <div className="quantity">{e?.quantity}</div>
                      <div className="price">{e?.price}$</div>
                    </div>
                  </>
                ))
              : "Empty Cart"}
          </div>
          <div className="cards-info">
            {product_info?.title?.length ? (
              <>
                <div className="img">
                  <img src={product_info?.img} alt={product_info?.title} />
                </div>
                <div className="item title">{product_info?.title}</div>
                <div className="item category">{product_info?.category}</div>
                <div className="item quantity">{product_info?.quantity}</div>
                <div className="item price">{product_info?.price}</div>
                <div className="item actions">
                  <button className="" onClick={(e) => delete_from_cart()}>
                    Delete
                  </button>
                  <button onClick={(e) => alert("Not Supported Right Now")}>
                    Buy Now
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
        <Link className="nav" to={"/products"}>
          Back
        </Link>
      </div>
    </>
  );
}
