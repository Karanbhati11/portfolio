import React from "react";
import Copyright from "./Copyright";
import portfolioImg1 from "../assets/img/work/work-img-1.png";
import portfolioImg2 from "../assets/img/work/work-img-2.png";
import portfolioImg3 from "../assets/img/work/work-img-3.png";
import portfolioImg4 from "../assets/img/work/work-img-4.png";
import portfolioImg5 from "../assets/img/work/work-img-5.png";
import portfolioImg6 from "../assets/img/work/work-img-6.png";

export default function Portfolio({ openModal }) {
  const handleImageClick = () => {
    openModal(); // Call openModal function when image is clicked
  };

  return (
    <div className="col-xxl-8 col-xl-9">
      <div className="bostami-page-content-wrap">
        {/* page title  */}
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">Portfolio</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          <div className="row">
            <div className="col-12">
              <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper mb-30">
                <li className="fillter-btn is-checked" data-filter="*">
                  All
                </li>
                <li className="fillter-btn" data-filter=".mockup">
                  Mockup
                </li>
                <li className="fillter-btn" data-filter=".design">
                  Graphic Design
                </li>
                <li className="fillter-btn" data-filter=".logo">
                  Logo
                </li>
              </ul>
            </div>

            <div className="col-12">
              <div id="fillter-item-active" className="fillter-item-wrap row">
                {/* <div className="grid-sizer"></div> */}

                {/* Single item 1 */}
                <div onClick={handleImageClick} className="isotop-item logo col-12 col-md-6">
                  <div className="fillter-item bg-prink">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-1"
                    >
                      <img src={portfolioImg1} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-1"
                      >
                        Chul urina
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Single item 2 */}
                <div onClick={handleImageClick} className="isotop-item design mockup col-12 col-md-6">
                  <div className="fillter-item bg-catkrill">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-2"
                    >
                      <img src={portfolioImg2} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-2"
                      >
                        Aura Dione
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Single item 3 */}
                <div onClick={handleImageClick} className=" isotop-item logo mockup col-12 col-md-6">
                  <div className="fillter-item bg-catkrill">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-3"
                    >
                      <img src={portfolioImg3} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-3"
                      >
                        T-Shirt Design
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Single item 4 */}
                <div onClick={handleImageClick} className="isotop-item mockup col-12 col-md-6">
                  <div className="fillter-item bg-prink">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-4"
                    >
                      <img src={portfolioImg4} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-4"
                      >
                        Packaging Box
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Single item 5 */}
                <div onClick={handleImageClick} className="isotop-item design logo col-12 col-md-6">
                  <div className="fillter-item bg-prink">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-5"
                    >
                      <img src={portfolioImg5} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-5"
                      >
                        Modern Bag Design
                      </a>
                    </h6>
                  </div>
                </div>

                {/* Single item 6 */}
                <div onClick={handleImageClick} className="isotop-item mockup design col-12 col-md-6">
                  <div className="fillter-item bg-catkrill">
                    <a
                      className="img"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#portfolio-6"
                    >
                      <img src={portfolioImg6} alt="" />
                    </a>
                    <span className="item-subtitle">Travel Landing, UX/UI</span>
                    <h6 className="item-title">
                      <a
                        href="#"
                        data-bs-toggle="modal"
                        data-bs-target="#portfolio-6"
                      >
                        Chul urina
                      </a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer copyright  */}
        <Copyright />
      </div>
    </div>
  );
}
