import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetPopularServices } from "../../../Redux/slices/popularServicesSlice";
import { GetFeaturedServices } from "../../../Redux/slices/featuredServicesSlice";
import Popular from "./Popular";
import Featured from "./Featured";
import "../../../style/css/home/aboutServices.css";

export default function PopularProducts() {
  const popular = useSelector((state) => state.popular);
  const featured = useSelector((state) => state.featured);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetPopularServices());
    dispatch(GetFeaturedServices());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="about_services">
      <Popular Store={popular} />
      <Featured Store={featured} />
    </div>
  );
}
