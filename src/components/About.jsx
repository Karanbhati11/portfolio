import React from 'react'

import Copyright from './Copyright';
import ServiceItem from '../data/ServiceItem';
import ClientLogoSlider from '../data/ClientLogoSlider';

import serviceItemData from '../Jsons/serviceItemData.json';

import ClientLogo1 from "../assets/img/client/client-logo-1.png";
import ClientLogo2 from "../assets/img/client/client-logo-2.png";
import ClientLogo3 from "../assets/img/client/client-logo-3.png";
import ClientLogo4 from "../assets/img/client/client-logo-4.png";

export default function About() {
     const clientLogoData = [ ClientLogo1, ClientLogo2, ClientLogo3, ClientLogo4 ];

     return (
          <div className="col-xxl-8 col-xl-9">
               <div className="bostami-page-content-wrap">
                    {/* <!-- page title --> */}
                    <div className="section-wrapper pl-60 pr-60 pt-60">
                         <div className="bostami-page-title-wrap mb-35">
                              <h2 className="page-title">about</h2>
                              <p>
                                   With over three years of experience in Python development, including expertise in Django, AWS, and Deep Learning, I've led successful projects at multiple organizations, leveraging cutting-edge technologies to enhance user interactions and automate tasks. Skilled in microservice architecture and API integration, I bring a robust skill set to drive innovation and efficiency.
                              </p>
                              <p>
                                   As a Python Developer, I've demonstrated proficiency in Python, AWS & Django, contributing to many projects, where I've optimized text detection accuracy and engineered end-to-end systems for data retrieval and processing. Passionate about interactive projects, I've developed applications utilizing OpenCV and Hand Tracking Modules, showcasing my commitment to leveraging technology for intuitive user experiences.
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
                                   {serviceItemData.map((item, index) => (
                                        <ServiceItem
                                             key={index}
                                             iconClass={item.iconClass}
                                             title={item.title}
                                             description={item.description}
                                             backgroundColor={item.backgroundColor}
                                        />
                                   ))}
                              </div>
                         </div>
                    </div>

                    {/* <!-- client --> */}
                    {/* <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                         <div className="bostami-section-title-wrap text-center mb-50">
                              <h3 className="section-title">clinet</h3>
                         </div>

                         <div className="bostami-client-slider">
                              <div className="swiper-container client_slide_active">
                                   <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo1}
                                                  alt=""
                                             />
                                        </div>

                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo2}
                                                  alt=""
                                             />
                                        </div>

                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo3}
                                                  alt=""
                                             />
                                        </div>

                                        <div className="swiper-slide">
                                             <img
                                                  className="bostami-client-slider-logo"
                                                  src={ClientLogo4}
                                                  alt=""
                                             />
                                        </div>

                                        <ClientLogoSlider logos={clientLogoData} />
                                   </div>
                              </div>
                         </div>
                    </div> */}

                    {/* <!-- footer copyright --> */}
                    <Copyright />
               </div>
          </div>
     )
}
