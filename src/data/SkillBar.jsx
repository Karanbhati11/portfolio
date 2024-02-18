import React from 'react'

export default function SkillBar({ title, percentage, className }) {
     return (
          <div className="skill-bar-item mb-30">
               <div className="title-wrap">
                    <h5 className="title">{title}</h5>
                    <span className="count">{`${percentage} %`}</span>
               </div>
               <div className="progress-bar-wrap">
                    <div className={`progress-line ${className}`} style={{ "width": "72%" }}>
                    </div>
               </div>
          </div>
     )
}
