import React from 'react';

// Component for rendering knowledge section
const Knowledge = ({ data }) => (
     <div className="col-xl-6 col-lg-5">
          <div className="bostami-section-title-wrap mb-20">
               <h4 className="section-title">Knowledges</h4>
          </div>
          <div className="knowledeges-item-wrap">
               {/* Mapping over knowledge data to render individual knowledge items */}
               {data.map((item, index) => (
                    <span key={index} className="gk-item">{item}</span>
               ))}
          </div>
     </div>
);

export default Knowledge;
