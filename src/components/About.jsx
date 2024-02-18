import React from 'react'

import Copyright from './Copyright';
import ServiceItem from '../data/ServiceItem';
import ClientLogoSlider from '../data/ClientLogoSlider';

import clientLogoData from '../Jsons/clientLogoData.json';
import serviceItemData from '../Jsons/serviceItemData.json';

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
                    <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                         <div className="bostami-section-title-wrap text-center mb-50">
                              <h3 className="section-title">clinet</h3>
                         </div>

                         <div className="bostami-client-slider">
                              <div className="swiper-container client_slide_active">
                                   <div className="swiper-wrapper">
                                        {/* <div className="swiper-slide">
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
                                        </div> */}

                                        <ClientLogoSlider logos={clientLogoData} />

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
