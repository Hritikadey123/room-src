import React from "react";
import banner1 from "../assets/banner/1.png"
import banner2 from "../assets/banner/2.png"
import feture1 from "../assets/fetures/1.svg"
import feture2 from "../assets/fetures/2.svg"
import feture3 from "../assets/fetures/3.svg"
import avater from "../assets/avatars/1.png"
import { Footer } from "../inc/footer";
import Add_header from "../inc/additional_header";
const About = () => {
    return (
        <>
            <Add_header />
            <div className="preloader js-preloader">
                <div className="preloader__wrap">
                    <div className="preloader__icon">
                        <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_1_41)">
                                <path d="M32.9675 13.9422C32.9675 6.25436 26.7129 0 19.0251 0C11.3372 0 5.08289 6.25436 5.08289 13.9422C5.08289 17.1322 7.32025 21.6568 11.7327 27.3906C13.0538 29.1071 14.3656 30.6662 15.4621 31.9166V35.8212C15.4621 36.4279 15.9539 36.92 16.561 36.92H21.4895C22.0965 36.92 22.5883 36.4279 22.5883 35.8212V31.9166C23.6849 30.6662 24.9966 29.1071 26.3177 27.3906C30.7302 21.6568 32.9675 17.1322 32.9675 13.9422V13.9422ZM30.7699 13.9422C30.7699 16.9956 27.9286 21.6204 24.8175 25.7245H23.4375C25.1039 20.7174 25.9484 16.7575 25.9484 13.9422C25.9484 10.3587 25.3079 6.97207 24.1445 4.40684C23.9229 3.91841 23.6857 3.46886 23.4347 3.05761C27.732 4.80457 30.7699 9.02494 30.7699 13.9422ZM20.3906 34.7224H17.6598V32.5991H20.3906V34.7224ZM21.0007 30.4014H17.0587C16.4167 29.6679 15.7024 28.8305 14.9602 27.9224H16.1398C16.1429 27.9224 16.146 27.9227 16.1489 27.9227C16.152 27.9227 23.0902 27.9224 23.0902 27.9224C22.3725 28.8049 21.6658 29.6398 21.0007 30.4014ZM19.0251 2.19765C20.1084 2.19765 21.2447 3.33365 22.1429 5.3144C23.1798 7.60078 23.7508 10.6649 23.7508 13.9422C23.7508 16.6099 22.8415 20.6748 21.1185 25.7245H16.9322C15.2086 20.6743 14.2994 16.6108 14.2994 13.9422C14.2994 10.6649 14.8706 7.60078 15.9075 5.3144C16.8057 3.33365 17.942 2.19765 19.0251 2.19765V2.19765ZM7.28053 13.9422C7.28053 9.02494 10.3184 4.80457 14.6157 3.05761C14.3647 3.46886 14.1273 3.91841 13.9059 4.40684C12.7425 6.97207 12.102 10.3587 12.102 13.9422C12.102 16.7584 12.9462 20.7176 14.6126 25.7245H13.2259C9.33565 20.6126 7.28053 16.5429 7.28053 13.9422Z" fill="#3554D1" />
                            </g>

                            <defs>
                                <clipPath id="clip0_1_41">
                                    <rect width="36.92" height="36.92" fill="white" transform="translate(0.540039)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <div className="preloader__title">Roomtopia</div>
            </div>

            <main>

                <section className="section-bg layout-pt-lg layout-pb-lg">
                    <div className="section-bg__item col-12">
                        <img src={banner1} alt="image" />
                    </div>

                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-xl-6 col-lg-8 col-md-10">
                                <h1 className="text-40 md:text-25 fw-600 text-white">Looking for joy?</h1>
                                <div className="text-white mt-15">Your trusted trip companion</div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="layout-pt-lg layout-pb-md">
                    <div data-anim-wrap className="container">
                        <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionTitle -md">
                                    <h2 className="sectionTitle__title">Why Choose Us</h2>
                                    <p className="sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
                                </div>
                            </div>
                        </div>

                        <div className="row y-gap-40 justify-between pt-50">

                            <div data-anim-child="slide-up delay-2" className="col-lg-3 col-sm-6">

                                <div className="featureIcon -type-1 ">
                                    <div className="d-flex justify-center">
                                        <img src="#" data-src={feture1} alt="image" className="js-lazy" />
                                    </div>

                                    <div className="text-center mt-30">
                                        <h4 className="text-18 fw-500">Best Price Guarantee</h4>
                                        <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                            </div>

                            <div data-anim-child="slide-up delay-3" className="col-lg-3 col-sm-6">

                                <div className="featureIcon -type-1 ">
                                    <div className="d-flex justify-center">
                                        <img src="#" data-src={feture2} alt="image" className="js-lazy" />
                                    </div>

                                    <div className="text-center mt-30">
                                        <h4 className="text-18 fw-500">Easy & Quick Booking</h4>
                                        <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                            </div>

                            <div data-anim-child="slide-up delay-4" className="col-lg-3 col-sm-6">

                                <div className="featureIcon -type-1 ">
                                    <div className="d-flex justify-center">
                                        <img src="#" data-src={feture3} alt="image" className="js-lazy" />
                                    </div>

                                    <div className="text-center mt-30">
                                        <h4 className="text-18 fw-500">Customer Care 24/7</h4>
                                        <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </section>

                <section className="layout-pt-md">
                    <div className="container">
                        <div className="row y-gap-30 justify-between items-center">
                            <div className="col-lg-5">
                                <h2 className="text-30 fw-600">About Roomtopia</h2>
                                <p className="mt-5">These popular destinations have a lot to offer</p>

                                <p className="text-dark-1 mt-60 lg:mt-40 md:mt-20">
                                    London is a shining example of a metropolis at the highest peak of modernity and boasts an economy and cultural diversity that’s the envy of other global superpowers.
                                    <br /><br /> Take the opportunity to acquaint yourself with its fascinating history chronicled by institutions like the British Museum as well as see how far it has come by simply riding the Tube and passing by celebrated landmarks
                                    like Buckingham Palace, Westminster Abbey, and marvels like Big Ben, the London Eye, and the Tower Bridge.
                                </p>
                            </div>

                            <div className="col-lg-6">
                                <img src={banner2} alt="image" className="rounded-4" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pt-60">
                    <div className="container">
                        <div className="border-bottom-light pb-40">
                            <div className="row y-gap-30 justify-center text-center">

                                <div className="col-xl-3 col-6">
                                    <div className="text-40 lg:text-30 lh-13 fw-600">4,958</div>
                                    <div className="text-14 lh-14 text-light-1 mt-5">Destinations</div>
                                </div>

                                <div className="col-xl-3 col-6">
                                    <div className="text-40 lg:text-30 lh-13 fw-600">2,869</div>
                                    <div className="text-14 lh-14 text-light-1 mt-5">Total Properties</div>
                                </div>

                                <div className="col-xl-3 col-6">
                                    <div className="text-40 lg:text-30 lh-13 fw-600">2M</div>
                                    <div className="text-14 lh-14 text-light-1 mt-5">Happy customers</div>
                                </div>

                                <div className="col-xl-3 col-6">
                                    <div className="text-40 lg:text-30 lh-13 fw-600">574,974</div>
                                    <div className="text-14 lh-14 text-light-1 mt-5">Our Volunteers</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                {/* 
                <section className="layout-pt-lg layout-pb-lg">
                    <div className="container">
                        <div className="row y-gap-20 justify-between items-end">
                            <div className="col-auto">
                                <div className="sectionTitle -md">
                                    <h2 className="sectionTitle__title">Our Team</h2>
                                    <p className=" sectionTitle__text mt-5 sm:mt-0">Lorem ipsum dolor sit amet</p>
                                </div>
                            </div>

                            <div className="col-auto">

                                <div className="d-flex x-gap-15 items-center justify-center">
                                    <div className="col-auto">
                                        <button className="d-flex items-center text-24 arrow-left-hover js-team-prev">
                                            <i className="icon icon-arrow-left"></i>
                                        </button>
                                    </div>

                                    <div className="col-auto">
                                        <div className="pagination -dots text-border js-team-pag"></div>
                                    </div>

                                    <div className="col-auto">
                                        <button className="d-flex items-center text-24 arrow-right-hover js-team-next">
                                            <i className="icon icon-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="overflow-hidden pt-40 js-section-slider" data-gap="30" data-slider-cols="xl-5 lg-4 md-2 sm-2 base-1" data-nav-prev="js-team-prev" data-pagination="js-team-pag" data-nav-next="js-team-next">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/1.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Cody Fisher</div>
                                            <div className="text-14 lh-15">Medical Assistant</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/2.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Dianne Russell</div>
                                            <div className="text-14 lh-15">Web Designer</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/3.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Jerome Bell</div>
                                            <div className="text-14 lh-15">Marketing Coordinator</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/4.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Theresa Webb</div>
                                            <div className="text-14 lh-15">Nursing Assistant</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/5.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Cameron Williamson</div>
                                            <div className="text-14 lh-15">Dog Trainer</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/6.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Courtney Henry</div>
                                            <div className="text-14 lh-15">Medical Assistant</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="">
                                        <img src="img/team/7.png" alt="image" className="rounded-4 col-12" />

                                        <div className="mt-10">
                                            <div className="text-18 lh-15 fw-500">Theresa Williamson</div>
                                            <div className="text-14 lh-15">Web Designer</div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="section-bg layout-pt-lg layout-pb-lg">
                    <div className="section-bg__item -mx-20 bg-light-2"></div>

                    <div className="container">
                        <div className="row justify-center text-center">
                            <div className="col-auto">
                                <div className="sectionTitle -md">
                                    <h2 className="sectionTitle__title">Overheard from travelers</h2>
                                    <p className=" sectionTitle__text mt-5 sm:mt-0">These popular destinations have a lot to offer</p>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-hidden pt-80 js-section-slider" data-gap="30" data-slider-cols="xl-3 lg-3 md-2 sm-1 base-1">
                            <div className="swiper-wrapper">

                                <div className="swiper-slide">
                                    <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                                        <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                                        <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                                        <div className="pt-20 mt-28 border-top-light">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <img className="size-60" src={avater} alt="image" />
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                                                    <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                                        <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                                        <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                                        <div className="pt-20 mt-28 border-top-light">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <img className="size-60" src={avater} alt="image" />
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                                                    <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                                        <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                                        <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                                        <div className="pt-20 mt-28 border-top-light">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <img className="size-60" src={avater} alt="image" />
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                                                    <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                                        <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                                        <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                                        <div className="pt-20 mt-28 border-top-light">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <img className="size-60" src={avater} alt="image" />
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 fw-500 lh-14">Courtney Henry</div>
                                                    <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide">
                                    <div className="testimonials -type-1 bg-white rounded-4 pt-40 pb-30 px-40">
                                        <h4 className="text-16 fw-500 text-blue-1 mb-20">Hotel Equatorial Melaka</h4>
                                        <p className="testimonials__text lh-18 fw-500 text-dark-1">&quot;Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic.&quot;</p>

                                        <div className="pt-20 mt-28 border-top-light">
                                            <div className="row x-gap-20 y-gap-20 items-center">
                                                <div className="col-auto">
                                                    <img className="size-60" src={avater} alt="image" />
                                                </div>

                                                <div className="col-auto">
                                                    <div className="text-15 fw-500 lh-14">Indian</div>
                                                    <div className="text-14 lh-14 text-light-1 mt-5">Web Designer</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="row y-gap-30 items-center pt-40 sm:pt-20">
                            <div className="col-xl-4">
                                <div className="row y-gap-30 text-dark-1">
                                    <div className="col-sm-5 col-6">
                                        <div className="text-30 lh-15 fw-600">13m+</div>
                                        <div className="lh-15">Happy People</div>
                                    </div>

                                    <div className="col-sm-5 col-6">
                                        <div className="text-30 lh-15 fw-600">4.88</div>
                                        <div className="lh-15">Overall rating</div>

                                        <div className="d-flex x-gap-5 items-center pt-10">

                                            <div className="text-dark-1 text-10"><i class="fa-solid fa-star"></i></div>

                                            <div className="text-dark-1 text-10"><i class="fa-solid fa-star"></i></div>

                                            <div className="text-dark-1 text-10"><i class="fa-solid fa-star"></i></div>

                                            <div className="text-dark-1 text-10"><i class="fa-solid fa-star"></i></div>

                                            <div className="text-dark-1 text-10"><i class="fa-solid fa-star"></i></div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add your clients */}
                            {/* <div className="col-xl-8">
                                <div className="row y-gap-30 justify-between items-center">

                                    <div className="col-md-auto col-sm-6">
                                        <div className="d-flex justify-center">
                                            <img src="img/clients/1.svg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-sm-6">
                                        <div className="d-flex justify-center">
                                            <img src="img/clients/2.svg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-sm-6">
                                        <div className="d-flex justify-center">
                                            <img src="img/clients/3.svg" alt="image" />
                                        </div>
                                    </div>

                                    <div className="col-md-auto col-sm-6">
                                        <div className="d-flex justify-center">
                                            <img src="img/clients/4.svg" alt="image" />
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>

                <section className="layout-pt-md layout-pb-md bg-dark-2">
                    <div className="container">
                        <div className="row y-gap-30 justify-between items-center">
                            <div className="col-auto">
                                <div className="row y-gap-20  flex-wrap items-center">
                                    <div className="col-auto">
                                        <div className="text-60 sm:text-40 text-white"><i class="fa-solid fa-envelope-open-text"></i></div>
                                    </div>

                                    <div className="col-auto">
                                        <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                                        <div className="text-white">Sign up and we'll send the best deals to you</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <form action="#">
                                    <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                                        <div>
                                            <input className="bg-white h-60" type="text" placeholder="Your Email" />
                                        </div>

                                        <div>
                                            <button className="button -md h-60 bg-blue-1 text-white">Subscribe</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default About;