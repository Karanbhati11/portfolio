import React from 'react'

export default function ClientLogoSlider({ logos }) {
     return (
          logos.map(logo => (
               <div div className="swiper-slide" >
                    <img
                         className="bostami-client-slider-logo"
                         src={logo}
                         alt=""
                    />
               </div >
          ))
     )
}
