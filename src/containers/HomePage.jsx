import React, { useEffect, useState } from "react";

import logo2 from "../assets/img/logo/logo-2.png";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import ParsonalInfo from "../components/ParsonalInfo";
import About from "../components/About";
import Resume from "../components/Resume";
import Portfolio from "../components/Portfolio";
import PortfolioModal from "../components/PortfolioModal";
import Contact from "../components/Contact";
import MainMenu from "../components/MainMenu";
import Blogs from "../components/Blogs";

const HomePage = () => {
    const [ isDarkMode, setIsDarkMode ] = useState(false);
    const [ activeComponent, setActiveComponent ] = useState("about");
    // const [ isLoading, setIsLoading ] = useState(true); // State for loader

    useEffect(() => {
        // // Simulate loading process
        // setTimeout(() => {
        //     setIsLoading(false); // Hide loader after some time
        // }, 3000); // Adjust duration as needed

        const loadScript = (src) => {
            return new Promise((resolve, reject) => {
                const script = document.createElement("script");
                script.src = src;
                script.async = true;
                script.onload = resolve;
                script.onerror = reject;
                document.body.appendChild(script);
            });
        };

        const loadCSS = (href) => {
            return new Promise((resolve, reject) => {
                const link = document.createElement("link");
                link.href = href;
                link.rel = "stylesheet";
                link.onload = resolve;
                link.onerror = reject;
                document.head.appendChild(link);
            });
        };

        const cssFiles = [
            "all.min.css",
            "animate.min.css",
            "bootstrap.min.css",
            "fontawesome.min.css",
            "jquery.modal.min.css",
            "main.css",
            "meanmenu.css",
            "odometer.min.css",
            "swipper.css",
        ];

        const jsFiles = [
            "jquery.min.js",
            "bootstrap.bundle.min.js",
            "swipper-bundle.min.js",
            "jquery.meanmenu.min.js",
            "wow.min.js",
            "odometer.min.js",
            "jquery.modal.min.js",
            "appear.min.js",
            "main.js",
        ];

        const loadCSSAndJSFiles = async () => {
            try {
                for (const css of cssFiles) {
                    await loadCSS(`./src/assets/css/${css}`);
                }
                for (const js of jsFiles) {
                    await loadScript(`./src/assets/js/${js}`);
                }
            } catch (error) {
                console.error("Error loading assets:", error);
            }
        };


        loadCSSAndJSFiles();

        // Clean up on unmount
        return () => {
            cssFiles.forEach((css) => {
                const link = document.querySelector(`link[href="./src/assets/css/${css}"]`); // Corrected path
                link && link.parentNode.removeChild(link);
            });
            jsFiles.forEach((js) => {
                const script = document.querySelector(`script[src="./src/assets/js/${js}"]`); // Corrected path
                script && script.parentNode.removeChild(script);
            });
        };
    }, []);

    // Toggle the dark mode state
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        const darktoggle = document.querySelector(".dark-btn-icon");
        const home1bgimg = document.querySelector(".page-wrapper");

        // Function to toggle the dark theme
        const toggleDarkTheme = () => {
            // setIsDarkMode(!isDarkMode); // Toggle the state

            // Toggle the class on the body element
            document.body.classList.toggle("dark-theme");

            // Store the preference in local storage
            const isDarkTheme = document.body.classList.contains("dark-theme");
            localStorage.setItem("darkTheme", isDarkTheme);

            if (isDarkTheme) {
                darktoggle.src = "assets/img/icon/sun-icon.png";
                home1bgimg.style.backgroundImage =
                    "url('assets/img/bg/page-bg-dark-1.jpg')";
            } else {
                darktoggle.src = "assets/img/icon/mon-icon.png";
                home1bgimg.style.backgroundImage = "url('assets/img/bg/page-bg-1.jpg')";
            }
        };

        // Check if the user preference is already stored in local storage
        const isDarkTheme = localStorage.getItem("darkTheme") === "true";

        // Apply the dark theme if the preference is set to true
        if (isDarkTheme) {
            setIsDarkMode(true); // Update state
            document.body.classList.add("dark-theme");
            darktoggle.src = "assets/img/icon/sun-icon.png";
            home1bgimg.style.backgroundImage =
                "url('assets/img/bg/page-bg-dark-1.jpg')";
        }

        // Attach click event to the specified div
        darktoggle.addEventListener("click", toggleDarkTheme);

        // Clean up on unmount
        return () => {
            darktoggle.removeEventListener("click", toggleDarkTheme);
        };
    }, []);

    // if (isLoading) {
    //     return (
    //         // PRELOADER START 
    //         <div id="preloader">
    //             <div className="loader_line"></div>
    //         </div>
    //         // PRELOADER END
    //     );
    // }

    const [ modalOpen, setModalOpen ] = useState(false); // State to manage modal open/close

    // Function to handle opening modal
    const openModal = () => {
        setModalOpen(true);
    };

    // Function to handle closing modal
    const closeModal = () => {
        console.info("user is closing modal");
        setModalOpen(false);
    };

    const handleActiveComponent = (name) => {
        setActiveComponent(name);
    };


    return (
        <div
            className={`page-wrapper home-1 ${isDarkMode ? "dark-theme" : ""}`}
            style={{
                backgroundImage: `url(${isDarkMode
                    ? "./src/assets/img/bg/page-bg-dark-2.jpg"
                    : "./src/assets/img/bg/page-bg-1.jpg"
                    })`
            }}
        >
            {/* header-start */}
            {/* <div className="bostami-header-area mb-30 z-index-5" style={{ border: "2px solid red" }}>
                <div className="container">
                    <div className="bostami-header-wrap">
                        <div className="row align-items-center">
                            //  logo 
                            <div className="col-6">
                                <div className="bostami-header-logo">
                                    <Link className="site-logo" to="/">
                                        <img src={logo2} alt="" />
                                    </Link>
                                </div>
                            </div>

                            //  menu btn 
                            <div className="col-6">
                                <div className="bostami-header-menu-btn text-right">
                                    //  Dark mode toggle button 
                                    <div
                                        className="dark-btn dark-btn-stored dark-btn-icon"
                                        onClick={toggleDarkMode}
                                    >
                                        {isDarkMode ? (
                                            <i className="fa-light fa-sun"></i>
                                        ) : (
                                            <i className="fa-light fa-moon"></i>
                                        )}
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

                    //  mobile menu 
                    <div className="mobile-menu-wrap">
                        <div className="mobile-menu mobile_menu"></div>
                    </div>
                </div>
            </div> */}

            <Header toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
            {/* header-end */}

            <div className="container z-index-3">
                <div className="row">
                    {/* parsonal-info-start */}
                    {/* <div className="col-xxl-3 col-xl-3">
                        <div className="bostami-parsonal-info-area">
                            <div className="bostami-parsonal-info-wrap">
                                // img
                                <div className="bostami-parsonal-info-img">
                                    <img src={ParsonImg1} alt="avatar" />
                                </div>

                                // name
                                <h4 className="bostami-parsonal-info-name">
                                    <a href="#">Bostami Hassan</a>
                                </h4>
                                <span className="bostami-parsonal-info-bio mb-15">
                                    Ui/Ux Designer
                                </span>

                                // socail link
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

                                // contact
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

                                // cv button
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
                    </div> */}
                    <ParsonalInfo />
                    {/* personal-info-end */}

                    {/* about-page-start */}
                    {/* <div className="col-xxl-8 col-xl-9" style={{ border: "2px solid green" }}>
                        <div className="bostami-page-content-wrap">
                            // page title
                            <div className="section-wrapper pl-60 pr-60 pt-60">
                                <div className="bostami-page-title-wrap mb-35">
                                    <h2 className="page-title">about</h2>
                                    <p>
                                        I'm Creative Director and UI/UX Designer from Sydney,
                                        Australia, working in web development and print media. I
                                        enjoy turning complex problems into simple, beautiful and
                                        intuitive designs.
                                    </p>
                                    <p>
                                        My aim is to bring across your message and identity in the
                                        most creative way. I created web design for many famous
                                        brand companies.
                                    </p>
                                </div>
                            </div>

                            // what-do
                            <div className="section-wrapper pl-60 pr-60 ">
                                <div className="bostami-section-title-wrap mb-30">
                                    <h3 className="section-title">What I do!</h3>
                                </div>

                                <div className="bostami-what-do-wrap mb-30">
                                    <div className="row">
                                        // single item
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-prink">
                                                <div className="icon">
                                                    <i className="fa-light fa-swatchbook"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Ui/Ux Design</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                        elit, sed diam euismod tincidunt volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        // single item
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-catkrill">
                                                <div className="icon">
                                                    <i className="fa-regular fa-grid-2"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">App Development</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                        elit, sed diam euismod tincidunt volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        // single item
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item  bg-catkrill">
                                                <div className="icon">
                                                    <i className="fa-regular fa-camera-retro"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Photography</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                        elit, sed diam euismod tincidunt volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        // single item
                                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                                            <div className="bostami-what-do-item bg-prink bg-blue">
                                                <div className="icon">
                                                    <i className="fa-regular fa-code"></i>
                                                </div>
                                                <div className="text">
                                                    <h4 className="title">Web Development</h4>
                                                    <p>
                                                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                                                        elit, sed diam euismod tincidunt volutpat.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            // client
                            <div className="section-wrapper bg-light-white-2 pt-45 pb-60 pl-60 pr-60">
                                <div className="bostami-section-title-wrap text-center mb-50">
                                    <h3 className="section-title">clinet</h3>
                                </div>

                                <div className="bostami-client-slider">
                                    <div className="swiper-container client_slide_active">
                                        <div className="swiper-wrapper">
                                            // single item
                                            <div className="swiper-slide">
                                                <img
                                                    className="bostami-client-slider-logo"
                                                    src={ClientLogo1}
                                                    alt=""
                                                />
                                            </div>

                                            // single item
                                            <div className="swiper-slide">
                                                <img
                                                    className="bostami-client-slider-logo"
                                                    src={ClientLogo2}
                                                    alt=""
                                                />
                                            </div>

                                            // single item
                                            <div className="swiper-slide">
                                                <img
                                                    className="bostami-client-slider-logo"
                                                    src={ClientLogo3}
                                                    alt=""
                                                />
                                            </div>

                                            // single item
                                            <div className="swiper-slide">
                                                <img
                                                    className="bostami-client-slider-logo"
                                                    src={ClientLogo4}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            // footer copyright
                            <div className="footer-copyright text-center pt-25 pb-25">
                                <span>© 2024 All Rights Reserved</span>
                            </div>
                        </div>
                    </div> */}
                    {/* about-page-end */}


                    {
                        activeComponent == "about" ?
                            <About /> :
                            activeComponent == "resume" ?
                                <Resume /> :
                                activeComponent == "works" ?
                                    <Portfolio openModal={openModal} /> :
                                    activeComponent == "blogs" ?
                                        <Blogs openModal={openModal} /> :
                                        <Contact />
                    }

                    {/* main-menu-start */}
                    {/* <div className="col-xxl-1 d-xxl-block d-none">
                        <div className="bostami-main-menu-wrap">
                            <nav className="bastami-main-menu main_menu">
                                <ul>
                                    <li className="active">
                                        <a onClick={() => setActiveComponent("about")}>
                                            <span>
                                                <i className="fa-light fa-address-card"></i>
                                            </span>
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("resume")}>
                                            <span>
                                                <i className="fa-light fa-file-user"></i>
                                            </span>
                                            Resume
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("works")}>
                                            <span>
                                                <i className="fa-light fa-briefcase"></i>
                                            </span>
                                            Works
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("blogs")}>
                                            <span>
                                                <i className="fa-light fa-newspaper"></i>
                                            </span>
                                            Blogs
                                        </a>
                                    </li>
                                    <li>
                                        <a onClick={() => setActiveComponent("contact")}>
                                            <span>
                                                <i className="fa-light fa-address-book"></i>
                                            </span>
                                            contact
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div> */}

                    <MainMenu handleActiveComponent={handleActiveComponent} activeComponent={activeComponent} />
                    {/* main-menu-end */}
                </div>
            </div>

            {/* <PortfolioModal modalOpen={modalOpen} closeModal={closeModal} /> */}

            {/* JS here */}
            <script src="assets/js/jquery.min.js"></script>
            <script src="assets/js/bootstrap.bundle.min.js"></script>
            <script src="assets/js/swipper-bundle.min.js"></script>
            <script src="assets/js/jquery.meanmenu.min.js"></script>
            <script src="assets/js/wow.min.js"></script>
            <script src="assets/js/odometer.min.js"></script>
            <script src="assets/js/jquery.modal.min.js"></script>
            <script src="assets/js/appear.min.js"></script>
            <script src="assets/js/main.js"></script>
        </div >
    );
};

export default HomePage;
