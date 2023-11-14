import React, { memo, useEffect, useState } from "react";
import Header from "../Layout/Header";
import "../../style/css/products/layout.css";
import { useDispatch, useSelector } from "react-redux";
import { products_search_user } from "../../Redux/slices/productsSlice";
import { Link } from "react-router-dom";
import Products from "./Products";

function Layout() {
  const Store = useSelector((state) => state.products);
  const [count_of_cart, set_count_of_cart] = useState([]);
  const dispatch = useDispatch();

  const filter_fun = (v) => {
    dispatch(products_search_user({ find_by: "title", value: v }));
  };
  useEffect(() => {
    const get_cart_item_from_local_storage = JSON.parse(
      localStorage.getItem("cart")
    );
    set_count_of_cart(get_cart_item_from_local_storage);
  }, []);

  return (
    <>
      <div className="products-layout">
        <Header />
        <div className="products-cont">
          <div className="header-cont">
            <div className="filter">
              <select
                onChange={(e) =>
                  dispatch(
                    products_search_user({
                      find_by: "category",
                      value: e?.target?.value,
                    })
                  )
                }
                className="cate"
                defaultValue={"all"}
              >
                <option value="web">web</option>
                <option value="car">car</option>
                <option value="fruit">fruit</option>
                <option value="all">all</option>
              </select>
              <select
                onChange={(e) =>
                  dispatch(
                    products_search_user({
                      find_by: "count",
                      value: e?.target?.value,
                    })
                  )
                }
                className="count"
                defaultValue={"un"}
              >
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
                <option value="100">100</option>
                <option value="un">unlimited</option>
              </select>
              <select
                onChange={(e) =>
                  dispatch(
                    products_search_user({
                      find_by: "price",
                      value: e?.target?.value,
                    })
                  )
                }
                className="price"
                defaultValue={"un"}
              >
                <option value="100">{">100"}</option>
                <option value="200">{">400"}</option>
                <option value="400">{">999+"}</option>
                <option value="un">unlimited</option>
              </select>
              <Link to={"/products/cart"} className="cart-link">
                <p>{count_of_cart?.length}</p>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
            <div className="search">
              <input
                type="search"
                name="search"
                placeholder="Search By Name"
                autoFocus="on"
                onChange={(e) => filter_fun(e.target.value)}
              />
              <Link to={"/products/cart"} className="cart-search">
                <p>{count_of_cart?.length}</p>
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </div>
          </div>
          <Products Store={Store} />
        </div>
      </div>
    </>
  );
}

export default memo(Layout);
