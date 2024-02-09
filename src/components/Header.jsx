import React from 'react'

export default function Header() {
    return (
        <>
            <div className="bostami-header-area mb-30 z-index-5">
                <div className="container">
                    <div className="bostami-header-wrap">
                        <div className="row align-items-center">

                            <div className="col-6">
                                <div className="bostami-header-logo">
                                    <a className="site-logo" href="https://bostami-bootstrap.ibthemespro.com/index.html">
                                        <img src="assets/img/logo/logo-2.png" alt="" />
                                    </a>
                                </div>
                            </div>

                            <div className="col-6">
                                <div className="bostami-header-menu-btn text-right">
                                    <div className="dark-btn dark-btn-stored dark-btn-icon">
                                        <i className="fa-light fa-moon"></i>
                                        <i className="fa-light fa-sun"></i>
                                    </div>
                                    <div className="menu-btn toggle_menu">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="mobile-menu-wrap">
                        <div className="mobile-menu mobile_menu">
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
