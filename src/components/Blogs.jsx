import React from 'react'
import blogImg1 from "../assets/img/blog/blog-img-1.png";
import blogImg2 from "../assets/img/blog/blog-img-2.png";
import blogImg3 from "../assets/img/blog/blog-img-3.png";
import blogImg4 from "../assets/img/blog/blog-img-4.png";
import Copyright from './Copyright';

export default function Blogs({ openModal }) {
     return (
          <div class="col-xxl-8 col-xl-9">
               <div class="bostami-page-content-wrap">

                    {/* page title  */}
                    <div class="section-wrapper pl-60 pr-60 pt-60">
                         <div class="bostami-page-title-wrap mb-15">
                              <h2 class="page-title">blogs</h2>
                         </div>
                    </div>


                    <div class="section-wrapper pr-60 pl-60 mb-60">

                         {/* blog slider  */}
                         <div class="blog-slider-wrap">
                              <div class="swiper-container blog-slider-active">
                                   <div class="swiper-wrapper">

                                        {/* single slider  */}
                                        <div class="swiper-slide">
                                             <div class="row">

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src={blogImg1} alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">27 April</span>
                                                                 <span class="blog-cetagory">Inspiration</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">How to Own Your Audience by
                                                                      Creating an Email List.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src={blogImg2} alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">06 october</span>
                                                                 <span class="blog-cetagory">web design</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">the window know to
                                                                      say beside you</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src={blogImg3} alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">12 March</span>
                                                                 <span class="blog-cetagory">Travel Landing</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Everything You Need to Know
                                                                      About Web Accessibility.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src={blogImg4} alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">15 november</span>
                                                                 <span class="blog-cetagory">webdesign</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Top 10 Toolkits for Deep
                                                                      Learning
                                                                      in 2021.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                             </div>
                                        </div>

                                        {/* single slider  */}
                                        <div class="swiper-slide">
                                             <div class="row">

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-1.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">27 April</span>
                                                                 <span class="blog-cetagory">Inspiration</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">How to Own Your Audience by
                                                                      Creating an Email List.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-2.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">06 october</span>
                                                                 <span class="blog-cetagory">web design</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">the window know to
                                                                      say beside you</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-3.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">12 March</span>
                                                                 <span class="blog-cetagory">Travel Landing</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Everything You Need to Know
                                                                      About Web Accessibility.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-4.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">15 november</span>
                                                                 <span class="blog-cetagory">webdesign</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Top 10 Toolkits for Deep
                                                                      Learning
                                                                      in 2021.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                             </div>
                                        </div>

                                        {/* single slider  */}
                                        <div class="swiper-slide">
                                             <div class="row">

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-1.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">27 April</span>
                                                                 <span class="blog-cetagory">Inspiration</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">How to Own Your Audience by
                                                                      Creating an Email List.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-2.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">06 october</span>
                                                                 <span class="blog-cetagory">web design</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">the window know to
                                                                      say beside you</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-catkrill">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-3.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">12 March</span>
                                                                 <span class="blog-cetagory">Travel Landing</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Everything You Need to Know
                                                                      About Web Accessibility.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                                  {/* single blog  */}
                                                  <div class="col-lg-6 col-md-6">
                                                       <div class="blog-slider-single bg-prink">
                                                            <a href="#" class="img" data-bs-toggle="modal"
                                                                 data-bs-target="#h1-blog-1">
                                                                 <img src="../assets/img/blog/blog-img-4.png" alt="" />
                                                            </a>
                                                            <div class="blog-meta">
                                                                 <span class="blog-date">15 november</span>
                                                                 <span class="blog-cetagory">webdesign</span>
                                                            </div>
                                                            <h6 class="blog-title">
                                                                 <a href="#" data-bs-toggle="modal"
                                                                      data-bs-target="#h1-blog-1">Top 10 Toolkits for Deep
                                                                      Learning
                                                                      in 2021.</a>
                                                            </h6>
                                                       </div>
                                                  </div>

                                             </div>
                                        </div>

                                   </div>
                                   <div class="blog-progation"></div>
                              </div>
                         </div>

                    </div>

                    {/* footer copyright  */}
                    <Copyright />

               </div>
          </div>
     )
}
