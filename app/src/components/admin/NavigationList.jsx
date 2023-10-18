import React, { useEffect, useState } from "react";
import "../../style/css/admin/navigationList.css";

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
            <p>Dashboard</p>
            <i
              style={pageName === "dashboard" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-chart-pie"
            ></i>
          </li>
          <li>
            <p>Analyses</p>
            <i
              style={pageName === "analyses" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-chart-simple"
            ></i>
          </li>
          <li>
            <p>Users</p>
            <i
              style={pageName === "users" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-users"
            ></i>
          </li>
          <li>
            <p>Top Products</p>
            <i
              style={
                pageName === "top_products" ? { color: " #4169e1d5" } : null
              }
              className="fa-solid fa-cart-plus"
            ></i>
          </li>

          <li>
            <p>Products</p>
            <i
              style={pageName === "products" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-cart-arrow-down"
            ></i>
          </li>
          <li>
            <p>Containers</p>
            <i
              style={pageName === "containers" ? { color: " #4169e1d5" } : null}
              className="fa-solid fa-box-open"
            ></i>
          </li>
        </ul>
      </div>
    </>
  );
}
