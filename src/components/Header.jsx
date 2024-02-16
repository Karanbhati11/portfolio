import React from "react";
import { Link } from "react-router-dom";
import logo2 from "../assets/img/logo/logo-2.png";

export default function Header({ toggleDarkMode, isDarkMode }) {
  let menutoggole = document.querySelector(".toggle_menu");
  let mobilemenu = document.querySelector(".mobile-menu");
  const ToggleMenu = (e) => {
    e.preventDefault();
    menutoggole.classList.toggle("active");
    mobilemenu.classList.toggle("active");
  };
  return (
    <>
      <div className="bostami-header-area mb-30 z-index-5">
        <div className="container">
          <div className="bostami-header-wrap">
            <div className="row align-items-center">
              {/* logo */}
              <div className="col-6">
                <div className="bostami-header-logo">
                  <Link className="site-logo" to="/">
                    <img src={logo2} alt="" />
                  </Link>
                </div>
              </div>

              {/* menu btn */}
              <div className="col-6">
                <div className="bostami-header-menu-btn text-right">
                  {/* Dark mode toggle button */}
                  <div
                    className="dark-btn dark-btn-stored dark-btn-icon"
                    onClick={toggleDarkMode}
                  >
                    {isDarkMode ? (
                      <i className="fa-light fa-sun"></i>
                    ) : (
                      <i className="fa-light fa-moon"></i>
                    )}
                  </div>
                  <div className="menu-btn toggle_menu" onClick={ToggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* mobile menu */}
          <div className="mobile-menu-wrap">
            <div className="mobile-menu mobile_menu"></div>
          </div>
        </div>
      </div>
    </>
  );
}
