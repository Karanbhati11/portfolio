import React from 'react';

export default function Experience({ index, tenure, position, company, projects }) {
     const backgroundColorClass = index % 2 === 0 ? 'bg-prink' : 'bg-catkrill';

     return (
          <div className={`bostami-card-item ${backgroundColorClass} mb-20`}>
               <span className="card-subtitle">{tenure}</span>
               <h6 className="card-title">{position}</h6>
               <p className="card-text">{company}</p>
               {projects && projects.map((project, i) => (
                    <div key={i}>
                         <br />
                         {
                              project.name &&
                              <h6>project: {project.name}</h6>
                         }
                         <ul style={{ listStyleType: 'disc' }}>
                              {project.highlights.map((highlight, j) => (
                                   <li key={j}>{highlight}</li>
                              ))}
                         </ul>
                    </div>
               ))}
          </div>
     );
}
