import React from 'react'
import ParsonImg1 from "../assets/img/parsonal-info/parson-img-1.png";

export default function ParsonalInfo() {
     return (
          <div className="col-xxl-3 col-xl-3">
               <div className="bostami-parsonal-info-area">
                    <div className="bostami-parsonal-info-wrap">
                         {/* img */}
                         <div className="bostami-parsonal-info-img">
                              <img src={ParsonImg1} alt="avatar" />
                         </div>

                         {/* name */}
                         <h4 className="bostami-parsonal-info-name">
                              <a href="#">Ankit Pakhale</a>
                         </h4>
                         <span className="bostami-parsonal-info-bio mb-15">
                              Python Fullstack Developer
                         </span>

                         {/* socail link */}
                         <ul className="bostami-parsonal-info-social-link mb-30">
                              <li>
                                   <a href="#" className="facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="twitter">
                                        <i className="fa-brands fa-twitter"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="#" className="linkedin">
                                        <i className="fa-brands fa-linkedin-in"></i>
                                   </a>
                              </li>
                         </ul>

                         {/* contact */}
                         <div className="bostami-parsonal-info-contact mb-30">
                              <div className="bostami-parsonal-info-contact-item phone">
                                   <div className="icon">
                                        <i className="fa-solid fa-mobile-screen-button"></i>
                                   </div>
                                   <div className="text">
                                        <span>Phone</span>
                                        <p>+91 940 732 8187</p>
                                   </div>
                              </div>


                              <div className="bostami-parsonal-info-contact-item email">
                                   <div className="icon">
                                        <i className="fa-regular fa-envelope-open-text"></i>
                                   </div>
                                   <div className="text">
                                        <span>Email</span>
                                        <p><a href="mailto:akp3067@mail.com?subject=We%20want%20to%20hire%20you.&body=Hi%20Ankit,%0D%0A%0D%0AWe%20found%20your%20profile%20interesting.%20When%20might%20you%20be%20free%20to%20talk%20about%20the%20stages%20of%20the%20hiring%20process%3F%0D%0AThanks">akp3067@mail.com</a></p>
                                   </div>
                              </div>


                              <div className="bostami-parsonal-info-contact-item location">
                                   <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                   </div>
                                   <div className="text">
                                        <span>Location</span>
                                        <p>Ahmedabad, GJ, India</p>
                                   </div>
                              </div>

                              <div className="bostami-parsonal-info-contact-item calendar">
                                   <div className="icon">
                                        <i className="fa-light fa-calendar-days"></i>
                                   </div>
                                   <div className="text">
                                        <span>Birthday</span>
                                        <p>Mar 10, 2000</p>
                                   </div>
                              </div>
                         </div>

                         {/* cv button */}
                         <div className="bostami-parsonal-info-btn">
                              <a className="btn-1" href="#">
                                   <span className="icon">
                                        <i className="fa-regular fa-download"></i>
                                   </span>
                                   download cv
                              </a>
                         </div>
                    </div>
               </div>
          </div>
     )
}
