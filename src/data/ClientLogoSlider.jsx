import React from 'react'

export default function ClientLogoSlider({ logos }) {
     console.info("logos: ", logos);
     return (
          <div className="swiper-container">
               <div className="swiper-wrapper">
                    {logos.map((logo, index) => (
                         <div key={index} className="swiper-slide" >
                              <img className="bostami-client-slider-logo"
                                   src={logo}
                                   alt={`Client Logo ${index + 1}`}
                              />
                         </div>
                    ))}
               </div>
          </div>
     )
}
