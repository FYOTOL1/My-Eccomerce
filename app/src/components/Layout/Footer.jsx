import React from "react";
import "../../style/css/layout/footer.css";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="row">
            <a href="https://www.facebook.com/profile.php?id=100090759159174">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/3ayez_store/?hl=ar">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://chat.whatsapp.com/Jt48jAzAClZ338PXOIWDqf">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>

          <div className="row">
            <ul>
              <li>
                <a href="/">Our Services</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms & Conditions</a>
              </li>
              <li>
                <a href="/">Career</a>
              </li>
            </ul>
          </div>

          <div className="row">
            Copyright © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </footer>
    </>
  );
}
