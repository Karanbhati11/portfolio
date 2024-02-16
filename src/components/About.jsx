import React from 'react'

import ClientLogo1 from "../assets/img/client/client-logo-1.png";
import ClientLogo2 from "../assets/img/client/client-logo-2.png";
import ClientLogo3 from "../assets/img/client/client-logo-3.png";
import ClientLogo4 from "../assets/img/client/client-logo-4.png";
import Copyright from './Copyright';

export default function About() {
     return (
          <div className="col-xxl-8 col-xl-9">
               <div className="bostami-page-content-wrap">
                    {/* <!-- page title --> */}
                    <div className="section-wrapper pl-60 pr-60 pt-60">
                         <div className="bostami-page-title-wrap mb-35">
                              <h2 className="page-title">about</h2>
                              <p>
                                   I'm Creative Director and UI/UX Designer from Sydney,
                                   Australia, working in web development and print media. I
                                   enjoy turning complex problems into simple, beautiful and
                                   intuitive designs.
                              </p>
                              <p>
                                   My aim is to bring across your message and identity in the
                                   most creative way. I created web design for many famous
                                   brand companies.
                              </p>
                         </div>
                    </div>

                    {/* <!-- what-do --> */}
                    <div className="section-wrapper pl-60 pr-60 ">
                         <div className="bostami-section-title-wrap mb-30">
                              <h3 className="section-title">What I do!</h3>
                         </div>

                         <div className="bostami-what-do-wrap mb-30">
                              <div className="row">
                                   {/* <!-- single item --> */}
                                   <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="bostami-what-do-item bg-prink">
                                             <div className="icon">
                                                  <i className="fa-light fa-swatchbook"></i>
                                             </div>
                                             <div className="text">
                                                  <h4 className="title">Ui/Ux Design</h4>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                       elit, sed diam euismod tincidunt volutpat.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="bostami-what-do-item bg-catkrill">
                                             <div className="icon">
                                                  <i className="fa-regular fa-grid-2"></i>
                                             </div>
                                             <div className="text">
                                                  <h4 className="title">App Development</h4>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                       elit, sed diam euismod tincidunt volutpat.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="bostami-what-do-item  bg-catkrill">
                                             <div className="icon">
                                                  <i className="fa-regular fa-camera-retro"></i>
                                             </div>
                                             <div className="text">
                                                  <h4 className="title">Photography</h4>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                       elit, sed diam euismod tincidunt volutpat.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                                   {/* <!-- single item --> */}
                                   <div className="col-xxl-6 col-xl-6 col-lg-6">
                                        <div className="bostami-what-do-item bg-prink bg-blue">
                                             <div className="icon">
                                                  <i className="fa-regular fa-code"></i>
                                             </div>
                                             <div className="text">
                                                  <h4 className="title">Web Development</h4>
                                                  <p>
                                                       Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                       elit, sed diam euismod tincidunt volutpat.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* <!-- client --> */}
                    <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                         <div className="bostami-section-title-wrap text-center mb-50">
                              <h3 className="section-title">clinet</h3>
                         </div>

                         <div className="bostami-client-slider">
                              <div className="swiper-container client_slide_active">
                                   <div className="swiper-wrapper">
                                        {/* <!-- single item --> */}
                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo1}
                                                  alt=""
                                             />
                                        </div>

                                        {/* <!-- single item --> */}
                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo2}
                                                  alt=""
                                             />
                                        </div>

                                        {/* <!-- single item --> */}
                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo3}
                                                  alt=""
                                             />
                                        </div>

                                        {/* <!-- single item --> */}
                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo4}
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* <!-- footer copyright --> */}
                    <Copyright />
               </div>
          </div>
     )
}
