import React from 'react';

// Component for rendering education section
const Education = ({ data }) => (
     <div className="col-xl-6 col-lg-7">
          <div className="bostami-section-title-wrap mb-20">
               <h4 className="section-title"><i className="fa-light fa-school"></i>Education</h4>
          </div>
          <div className="bostami-card-wrap">
               {/* Mapping over education data to render individual education items */}
               {data.map((item, index) => (
                    <div key={index} className="bostami-card-item bg-prink mb-20">
                         <span className="card-subtitle">{item.duration}</span>
                         <h6 className="card-title">{item.title}<span> - {item.location}</span></h6>
                         <p className="card-text">{item.description}</p>
                    </div>
               ))}
          </div>
     </div>
);

export default Education;
