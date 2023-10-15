import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";

export default function AUTH({ children, type }) {
  const Store = useSelector((state) => state.auth);
  const [Protected, setProtected] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    const cookie = new Cookies();
    const auth = cookie.get("authorization");
    // eslint-disable-next-line default-case
    switch (type) {
      case "auth":
        if (auth?.length) {
          navigation("/");
          setProtected(true);
        } else {
          setProtected(false);
        }
        break;
      case "home":
        if (auth?.length) {
          setProtected(false);
        } else {
          navigation("/auth/login");
          setProtected(true);
        }
        break;
    }
  }, [navigation, type, Store.loading]);

  return <>{!Protected ? (Store.loading ? "loading" : children) : null}</>;
}
