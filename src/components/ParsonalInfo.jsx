import React from 'react'
import ParsonImg1 from "../assets/img/parsonal-info/parson-img-1.png";

export default function ParsonalInfo() {
     const name = "Ankit Pakhale"
     const position = "Python Fullstack Developer"
     const phone = "+91 940 732 8187"
     const email = "akp3067@mail.com"
     const mailSubject = 'Opportunity Discussion: Your Impressive Profile';
     const mailBody = encodeURIComponent(`Hello ${name.split(" ")[ 0 ]},\n\nYour profile has caught our attention, and we're intrigued. We'd like to schedule a discussion to learn more about your experience and skills. \n\nLooking forward to connecting with you. \n\nThank you.`);
     const location = "Ahmedabad, GJ, India"
     const birthday = "Mar 10, 2000"

     const handleDownload = () => {
          const cvUrl = 'https://drive.google.com/uc?export=download&id=1Q6vlGhJ6lYeTftkBWA9K6P_gxe7CRC73';
          const link = document.createElement('a');
          link.href = cvUrl;
          link.setAttribute('download', 'CV.pdf');
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
     };

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
                              <a href="#">{name}</a>
                         </h4>
                         <span className="bostami-parsonal-info-bio mb-15">
                              {position}
                         </span>

                         {/* socail link */}
                         <ul className="bostami-parsonal-info-social-link mb-30">
                              <li>
                                   <a href="https://www.facebook.com/akp0745" target="_blank" className="facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="https://twitter.com/AnkitPakhale1" target="_blank" className="twitter">
                                        <i className="fa-brands fa-twitter"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="https://www.instagram.com/ankitpakhale_/" target="_blank" className="instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                   </a>
                              </li>
                              <li>
                                   <a href="https://www.linkedin.com/in/ankitpakhale/" target="_blank" className="linkedin">
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
                                        <p>{phone}</p>
                                   </div>
                              </div>


                              <div className="bostami-parsonal-info-contact-item email">
                                   <div className="icon">
                                        <i className="fa-regular fa-envelope-open-text"></i>
                                   </div>
                                   <div className="text">
                                        <span>Email</span>
                                        <p>
                                             <a href={`mailto:${email}?subject=${mailSubject}&body=${mailBody}`}>
                                                  {email}
                                             </a>
                                        </p>
                                   </div>
                              </div>


                              <div className="bostami-parsonal-info-contact-item location">
                                   <div className="icon">
                                        <i className="fa-solid fa-location-dot"></i>
                                   </div>
                                   <div className="text">
                                        <span>Location</span>
                                        <p>{location}</p>
                                   </div>
                              </div>

                              <div className="bostami-parsonal-info-contact-item calendar">
                                   <div className="icon">
                                        <i className="fa-light fa-calendar-days"></i>
                                   </div>
                                   <div className="text">
                                        <span>Birthday</span>
                                        <p>{birthday}</p>
                                   </div>
                              </div>
                         </div>

                         {/* cv button */}
                         {/* <div className="bostami-parsonal-info-btn">
                              <a className="btn-1" href="#">
                                   <span className="icon">
                                        <i className="fa-regular fa-download"></i>
                                   </span>
                                   download cv
                              </a>
                         </div> */}
                         <div className="bostami-parsonal-info-btn">
                              <button className="btn-1" onClick={handleDownload}>
                                   <span className="icon">
                                        <i className="fa-regular fa-download"></i>
                                   </span>
                                   Download CV
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
