import React, { useEffect, useState } from "react";
import "../../style/css/admin/navigationList.css";
import { Link } from "react-router-dom";

export default function NavigationList({ pageName }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 676) {
        setShow(true);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        style={
          show
            ? { left: "0px", boxShadow: "5px 5px 4px #8080801c" }
            : { left: "-250px" }
        }
        className={"navigation"}
      >
        <div onClick={() => setShow(!show)} className="list-button">
          <i
            style={
              show
                ? { transform: "rotate(90deg)" }
                : { transform: "rotate(0deg)" }
            }
            className="fas fa-chevron-right"
          ></i>
        </div>
        <ul>
          <li>
            <p>
              <Link to="/">Home</Link>
            </p>
            <i class="fa-solid fa-house-user"></i>
          </li>
          <li>
            <p>
              <Link to="/admin/users">Users</Link>
            </p>
            <i
              style={pageName === "users" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-users"
            ></i>
          </li>
          <li>
            <p>
              <Link to="/admin/products">Products</Link>
            </p>
            <i
              style={pageName === "products" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-cart-arrow-down"
            ></i>
          </li>
          <li>
            <p>
              <Link to="/admin/pages">Pages</Link>
            </p>
            <i
              style={pageName === "pages" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-pager"
            ></i>
          </li>
        </ul>
      </div>
    </>
  );
}
