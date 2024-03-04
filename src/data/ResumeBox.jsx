import React from 'react';

export default function ResumeBox({ index, tenure, title, subtitle }) {
     const backgroundColorClass = index % 2 === 0 ? 'bg-prink' : 'bg-catkrill';
     return (
          <div className={`bostami-card-item ${backgroundColorClass} mb-20`}>
               <span className="card-subtitle">{tenure}</span>
               <h6 className="card-title">{title}</h6>
               <p className="card-text">{subtitle}</p>
          </div>
     );
}
