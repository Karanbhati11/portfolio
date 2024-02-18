import React from 'react'

export default function ServiceItem({ iconClass, title, description, backgroundColor }) {
     return (
          <div className="col-xxl-6 col-xl-6 col-lg-6">
               <div className={`bostami-what-do-item ${backgroundColor}`}>
                    <div className="icon">
                         <i className={iconClass}></i>
                    </div>
                    <div className="text">
                         <h4 className="title">{title}</h4>
                         <p>{description}</p>
                    </div>
               </div>
          </div>
     )
}
