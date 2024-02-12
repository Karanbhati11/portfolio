import React from 'react'

export default function MainMenu({ handleActiveComponent, activeComponent }) {

     const handleClick = (name) => {
          handleActiveComponent(name)
     }

     return (
          <div className="col-xxl-1 d-xxl-block d-none">
               <div className="bostami-main-menu-wrap">
                    <nav className="bastami-main-menu main_menu">
                         <ul>
                              <li className={`${activeComponent == "about" ? "active" : ""}`}>
                                   <a onClick={() => handleClick("about")}>
                                        <span>
                                             <i className="fa-light fa-address-card"></i>
                                        </span>
                                        About
                                   </a>
                              </li>
                              <li className={`${activeComponent == "resume" ? "active" : ""}`}>
                                   <a onClick={() => handleClick("resume")}>
                                        <span>
                                             <i className="fa-light fa-file-user"></i>
                                        </span>
                                        Resume
                                   </a>
                              </li>
                              <li className={`${activeComponent == "works" ? "active" : ""}`}>
                                   <a onClick={() => handleClick("works")}>
                                        <span>
                                             <i className="fa-light fa-briefcase"></i>
                                        </span>
                                        Works
                                   </a>
                              </li>
                              <li className={`${activeComponent == "blogs" ? "active" : ""}`}>
                                   <a onClick={() => handleClick("blogs")}>
                                        <span>
                                             <i className="fa-light fa-newspaper"></i>
                                        </span>
                                        Blogs
                                   </a>
                              </li>
                              <li className={`${activeComponent == "contact" ? "active" : ""}`}>
                                   <a onClick={() => handleClick("contact")}>
                                        <span>
                                             <i className="fa-light fa-address-book"></i>
                                        </span>
                                        contact
                                   </a>
                              </li>
                         </ul>
                    </nav>
               </div>
          </div>
     )
}
