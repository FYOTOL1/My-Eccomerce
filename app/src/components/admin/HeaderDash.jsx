import React from "react";
import "../../style/css/admin/headerDash.css";
import { search } from "../../Redux/slices/admin/usersSlice";
import { useDispatch } from "react-redux";

export default function HeaderDash() {
  const dispatch = useDispatch();
  const filterSearch = (e) => {
    dispatch(search(e));
  };

  return (
    <>
      <div className="headerDash">
        <div className="logo">
          <p>
            3a<span>Y</span>ez
          </p>
        </div>
        <div className="rightSide">
          <div className="search">
            <label htmlFor="inp">
              <i className="fa-solid fa-magnifying-glass"></i>
            </label>
            <input
              onChange={(e) => filterSearch(e.target.value)}
              id="inp"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div className="other">
            <div className="circle box">
              <i className="fa-regular fa-envelope"></i>
            </div>
            <div className="circle alert">
              <i className="fa-regular fa-bell"></i>
            </div>
            <div className="circle profile">
              <img src="../../../images/logo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
