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
     // TODO: fix this
     function calculateExperience(jsonData) {
          const currentDate = new Date(2024, 2, 5); // March 5, 2024
          let totalMonths = 0;

          // Loop through each entry in the JSON data starting from index 1
          for (let i = 1; i < jsonData.length; i++) {
               const entry = jsonData[ i ];

               // Check if the tenure string has the expected format
               const tenureMatch = entry.tenure.match(/(\w{3} \d{4})/g);
               if (tenureMatch && tenureMatch.length === 2) {
                    // Extract start and end dates from the tenure string
                    const startDate = new Date(tenureMatch[ 0 ]);
                    const endDate = tenureMatch[ 1 ].includes("Present") ? currentDate : new Date(tenureMatch[ 1 ]);

                    // Calculate the difference in months
                    const diffMonths = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());

                    // Add the difference to total months
                    totalMonths += diffMonths;
               }
          }

          // Convert total months to years and remaining months
          const years = Math.floor(totalMonths / 12);
          const remainingMonths = totalMonths % 12;

          // Convert remaining months to decimal part of years
          const decimalPart = remainingMonths / 12;

          // Return the total experience in the desired format
          return `${years + parseFloat(decimalPart.toFixed(2))} yrs`;
     }




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
                                        <h4 className="section-title"><i className="fa-light fa-briefcase"></i>experience {calculateExperience(experienceData)}</h4>
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
                                        {knowledgeData.map((data, index) => (
                                             <span key={index} className="gk-item">{data}</span>
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
