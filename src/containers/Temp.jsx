import React, { useEffect, useState } from 'react'
// import bgImage from '../assets/img/bg/page-bg-1.jpg';
import pageBg1 from '../assets/img/bg/page-bg-1.jpg';
import logo2 from '../assets/img/logo/logo-2.png';

import ClientLogo1 from '../assets/img/client/client-logo-1.png';
import ClientLogo2 from '../assets/img/client/client-logo-2.png';
import ClientLogo3 from '../assets/img/client/client-logo-3.png';
import ClientLogo4 from '../assets/img/client/client-logo-4.png';
import ParsonImg1 from '../assets/img/parsonal-info/parson-img-1.png';

import { Link } from "react-router-dom";
import $ from 'jquery';
import Swiper from 'swiper';


// Import JavaScript files
import '../assets/js/main.js';
import '../assets/js/jquery.min.js';
import '../assets/js/bootstrap.bundle.min.js';
import '../assets/js/swipper-bundle.min.js';
import '../assets/js/jquery.meanmenu.min.js';
// import '../assets/js/wow.min.js';
import '../assets/js/odometer.min.js';
import '../assets/js/jquery.modal.min.js';
import '../assets/js/appear.min.js';


export default function Temp() {
    const [ isDarkTheme, setIsDarkTheme ] = useState(false);

    useEffect(() => {
        // Preloader logic
        const preloader = $("#preloader");
        if (preloader.length) {
            window.addEventListener("load", () => {
                preloader.addClass("preloaded");
                setTimeout(() => {
                    preloader.remove();
                }, 1500);
            });
        }

        // Mobile menu toggle
        document.body.addEventListener("click", event => {
            if (event.target.classList.contains("toggle_menu")) {
                $(".mobile-menu").toggleClass("active");
            }
        });

        // Dark theme logic
        const toggleDarkTheme = () => {
            setIsDarkTheme(prev => !prev);
        };

        // Swiper initialization
        if ($(".client_slide_active").length > 0) {
            new Swiper(".client_slide_active", {
                slidesPerView: 4,
                loop: true,
                rtl: false,
                infinite: true,
                autoplay: {
                    delay: 4000,
                },
                breakpoints: {
                    0: { slidesPerView: 2 },
                    480: { slidesPerView: 2 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                    1200: { slidesPerView: 5 },
                },
            });
        }

        enableMasonry2();

        $(".dark-btn").on("click", toggleDarkTheme);

    }, []); // Empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

    function enableMasonry2() {
        // Isotope gallery logic
        $(window).on("load", function () {
            if ($("#fillter-item-active").length) {
                const $grid = $("#fillter-item-active").isotope({
                    itemSelector: ".isotop-item",
                    percentPosition: true,
                    masonry: {
                        columnWidth: ".grid-sizer",
                    },
                });

                $(".isotop-menu-wrapper").on("click", "li", function () {
                    const filterValue = $(this).attr("data-filter");
                    $grid.isotope({ filter: filterValue });
                });

                $(".isotop-menu-wrapper").each(function (i, buttonGroup) {
                    const $buttonGroup = $(buttonGroup);
                    $buttonGroup.on("click", "li", function () {
                        $buttonGroup.find(".is-checked").removeClass("is-checked");
                        $(this).addClass("is-checked");
                    });
                });
            }
        });
    }
    return (
        <>
            <img className="page-wrapper home-1" src={pageBg1} />

            {/* <!-- PRELOADER --> */}
            {/* <div id="preloader">
                <div class="loader_line"></div>
            </div> */}
            {/* <!-- /PRELOADER --> */}


            <div className="bostami-header-area mb-30 z-index-5">
                <div className="container">
                    <div className="bostami-header-wrap">
                        <div className="row align-items-center">

                            {/* <!-- logo --> */}
                            <div className="col-6">
                                <div className="bostami-header-logo">
                                    <Link className="site-logo" to="/">
                                        <img src={logo2} alt="" />
                                    </Link>
                                </div>
                            </div>

                            {/* <!-- menu btn --> */}
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

                    {/* <!-- mobile menu --> */}
                    <div className="mobile-menu-wrap">
                        <div className="mobile-menu mobile_menu">
                        </div>
                    </div>

                </div>
            </div >

            <div className="container z-index-3">
                <div className="row">

                    {/* <!-- parsonal-info-start --> */}
                    <div className="col-xxl-3 col-xl-3">
                        <div className="bostami-parsonal-info-area">
                            <div className="bostami-parsonal-info-wrap">

                                {/* <!-- img --> */}
                                <div className="bostami-parsonal-info-img">
                                    <img src={ParsonImg1} alt="avatar" />
                                </div>

                                {/* <!-- name --> */}
                                <h4 className="bostami-parsonal-info-name">
                                    <a href="#">Bostami Hassan</a>
                                </h4>
                                <span className="bostami-parsonal-info-bio mb-15">Ui/Ux Designer</span>

                                {/* <!-- socail link --> */}
                                <ul className="bostami-parsonal-info-social-link mb-30">
                                    <li>
                                        <a href="#" className="facebook">
                                            <i className="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="twitter">
                                            <i className="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="instagram">
                                            <i className="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="linkedin">
                                            <i className="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                </ul>

                                {/* <!-- contact --> */}
                                <div className="bostami-parsonal-info-contact mb-30">
                                    <div className="bostami-parsonal-info-contact-item phone">
                                        <div className="icon">
                                            <i className="fa-solid fa-mobile-screen-button"></i>
                                        </div>
                                        <div className="text">
                                            <span>Phone</span>
                                            <p>+123 456 7890</p>
                                        </div>
                                    </div>


                                    <div className="bostami-parsonal-info-contact-item email">
                                        <div className="icon">
                                            <i className="fa-regular fa-envelope-open-text"></i>
                                        </div>
                                        <div className="text">
                                            <span>Email</span>
                                            <p>example@mail.com</p>
                                        </div>
                                    </div>

                                    <div className="bostami-parsonal-info-contact-item location">
                                        <div className="icon">
                                            <i className="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className="text">
                                            <span>Location</span>
                                            <p>Hong kong china</p>
                                        </div>
                                    </div>

                                    <div className="bostami-parsonal-info-contact-item calendar">
                                        <div className="icon">
                                            <i className="fa-light fa-calendar-days"></i>
                                        </div>
                                        <div className="text">
                                            <span>Birthday</span>
                                            <p>May 27, 1990</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- cv button --> */}
                                <div className="bostami-parsonal-info-btn">
                                    <a className="btn-1" href="#">
                                        <span className="icon">
                                            <i className="fa-regular fa-download"></i>
                                        </span>
                                        download cv
                                    </a>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* <!-- personal-info-end --> */}

                    {/* <!-- about-page-start --> */}
                    <div className="col-xxl-8 col-xl-9">
                        <div className="bostami-page-content-wrap">

                            {/* <!-- page title --> */}
                            <div className="section-wrapper pl-60 pr-60 pt-60">
                                <div className="bostami-page-title-wrap mb-35">
                                    <h2 className="page-title">about</h2>
                                    <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web
                                        development and print media. I enjoy turning complex problems into simple, beautiful
                                        and intuitive designs.</p>
                                    <p>My aim is to bring across your message and identity in the most creative way. I
                                        created web design for many famous brand companies.</p>
                                </div>
                            </div>

                            {/* <!-- what-do --> */}
                            <div className="section-wrapper pl-60 pr-60">

                                <div className="bostami-section-title-wrap mb-30">
                                    <h3 className="section-title">What I do!</h3>
                                </div>

                                <div className="bostami-what-do-wrap mb-30">
                                    <div className="row">

                                        {/* <!-- single item --> */}
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-prink">
                                                <div className="icon">
                                                    <i className="fa-light fa-swatchbook"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Ui/Ux Design</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        euismod tincidunt volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-catkrill">
                                                <div className="icon">
                                                    <i className="fa-regular fa-grid-2"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">App Development</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        euismod tincidunt volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item  bg-catkrill">
                                                <div className="icon">
                                                    <i className="fa-regular fa-camera-retro"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Photography</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        euismod tincidunt volutpat.</p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <!-- single item --> */}
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-prink bg-blue">
                                                <div className="icon">
                                                    <i className="fa-regular fa-code"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Web Development</h4>
                                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
                                                        euismod tincidunt volutpat.</p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            {/* <!-- client --> */}
                            <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">

                                <div className="bostami-section-title-wrap text-center mb-50">
                                    <h3 className="section-title">clinet</h3>
                                </div>

                                <div className="bostami-client-slider">
                                    <div className="swiper-container client_slide_active">
                                        <div className="swiper-wrapper">

                                            {/* <!-- single item --> */}
                                            <div className="swiper-slide">
                                                <img className="bostami-client-slider-logo"
                                                    src={ClientLogo1} alt="" />
                                            </div>

                                            {/* <!-- single item --> */}
                                            <div className="swiper-slide">
                                                <img className="bostami-client-slider-logo"
                                                    src={ClientLogo2} alt="" />
                                            </div>

                                            {/* <!-- single item --> */}
                                            <div className="swiper-slide">
                                                <img className="bostami-client-slider-logo"
                                                    src={ClientLogo3} alt="" />
                                            </div>

                                            {/* <!-- single item --> */}
                                            <div className="swiper-slide">
                                                <img className="bostami-client-slider-logo"
                                                    src={ClientLogo4} alt="" />
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* <!-- footer copyright --> */}
                            <div className="footer-copyright text-center pt-25 pb-25">
                                <span>© 2024 All Rights Reserved</span>
                            </div>

                        </div>
                    </div>
                    {/* <!-- about-page-end --> */}

                    {/* <!-- main-menu-start --> */}
                    <div className="col-xxl-1 d-xxl-block d-none">
                        <div className="bostami-main-menu-wrap">
                            <nav className="bastami-main-menu main_menu">
                                <ul>
                                    <li className="active">
                                        <a href="index.html">
                                            <span>
                                                <i className="fa-light fa-address-card"></i>
                                            </span>
                                            about
                                        </a>
                                    </li>
                                    <li>
                                        <a href="resume.html">
                                            <span>
                                                <i className="fa-light fa-file-user"></i>
                                            </span>
                                            Resume
                                        </a>
                                    </li>
                                    <li>
                                        <a href="portfolio.html">
                                            <span>
                                                <i className="fa-light fa-briefcase"></i>
                                            </span>
                                            Works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog.html">
                                            <span>
                                                <i className="fa-light fa-newspaper"></i>
                                            </span>
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="contact.html">
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
                    {/* <!-- main-menu-end --> */}
                </div>
            </div>
        </>
    )
}
