import React from 'react';

// Component for rendering experience section
const Experience = ({ data }) => (
     <div className="col-xl-6 col-lg-5">
          <div className="bostami-section-title-wrap mb-20">
               <h4 className="section-title"><i className="fa-light fa-briefcase"></i>Experience</h4>
          </div>
          <div className="bostami-card-item-wrap">
               {/* Mapping over experience data to render individual experience items */}
               {data.map((item, index) => (
                    <div key={index} className="bostami-card-item bg-catkrill mb-20">
                         <span className="card-subtitle">{item.duration}</span>
                         <h6 className="card-title">{item.title}</h6>
                         <p className="card-text">{item.company}</p>
                    </div>
               ))}
          </div>
     </div>
);

export default Experience;
