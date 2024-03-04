import React from 'react'
import Copyright from './Copyright'
import Education from '../data/Education'
import Experience from '../data/Experience'
import SkillBar from '../data/SkillBar'
import educationData from '../Jsons/educationData.json'
import experienceData from '../Jsons/experienceData.json'
import skillData from '../Jsons/skillData.json'
import knowledgeData from '../Jsons/knowledgeData.json'

export default function Resume() {
     return (
          <div className="col-xxl-8 col-xl-9">
               <div className="bostami-page-content-wrap">

                    {/* page title  */}
                    <div className="section-wrapper pl-60 pr-60 pt-60">
                         <div className="bostami-page-title-wrap mb-15">
                              <h2 className="page-title">resume</h2>
                         </div>
                    </div>

                    <div className="section-wrapper pl-60 pr-60 mb-60">
                         <div className="row">

                              {/* education  */}
                              <div className="col-xl-6 col-lg-7">
                                   <div className="bostami-section-title-wrap mb-20">
                                        <h4 className="section-title"><i className="fa-light fa-school"></i>Education</h4>
                                   </div>

                                   <div className="bostami-card-wrap">
                                        {educationData.map((data, index) => (
                                             <Education
                                                  key={index}
                                                  index={index}
                                                  tenure={data.tenure}
                                                  title={data.education}
                                                  subtitle={data.location}
                                             />
                                        ))}
                                   </div>
                              </div>

                              {/* experience  */}
                              <div className="col-xl-6 col-lg-5">
                                   <div className="bostami-section-title-wrap mb-20">
                                        <h4 className="section-title"><i className="fa-light fa-briefcase"></i>experience</h4>
                                   </div>
                                   {experienceData.map((data, index) => (
                                        <Experience
                                             key={index}
                                             index={index + 1}
                                             tenure={data.tenure}
                                             position={data.position}
                                             company={data.company}
                                             projects={data.projects}
                                        />
                                   ))}
                              </div>

                         </div>
                    </div>

                    <div className="section-wrapper bg-light-white-2 pt-70 pb-60 pl-60 pr-60">
                         <div className="row">

                              {/* skill  */}
                              <div className="col-xl-6 col-lg-7">
                                   <div className="bostami-section-title-wrap mb-20">
                                        <h4 className="section-title">Working Skills</h4>
                                   </div>

                                   <div className="skill-bar-wrap">
                                        {skillData.map((skills, index) => (
                                             <SkillBar
                                                  key={index}
                                                  title={skills.title}
                                                  percentage={skills.percentage}
                                                  className={skills.className}
                                             />
                                        ))}
                                   </div>
                              </div>

                              {/* gk  */}
                              <div className="col-xl-6 col-lg-5">
                                   <div className="bostami-section-title-wrap mb-20">
                                        <h4 className="section-title">Knowledges</h4>
                                   </div>

                                   <div className="knowledeges-item-wrap">
                                        {skillData.map((data, index) => (
                                             <span key={index} className="gk-item">{data.title}</span>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* footer copyright  */}
                    <Copyright />
               </div>
          </div>
     )
}
