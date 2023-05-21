import React from "react";
import { ReactDOM } from "react";
import { Footer } from "../inc/footer";
import Navbar from "../inc/nav";
// imported images start
import banner1 from "../assets/banner/banner-shapes.png";
import banner2 from "../assets/banner/banner-shapes2.png";
import banner3 from "../assets/banner/banner-man.png";
import shape1 from "../assets/banner/img-shape1.svg";
import shape2 from "../assets/banner/img-shape2.svg";
import shape3 from "../assets/banner/img-shape3.svg";
import shape4 from "../assets/banner/star-shape.svg";
import a5 from "../assets/img/attraction/a5.jpg";
import a6 from "../assets/img/attraction/a6.jpg";
import a7 from "../assets/img/attraction/a7.jpg";
import a8 from "../assets/img/attraction/a8.jpg";
import blog1 from "../assets/blog/blog1.jpg";
import blog2 from "../assets/blog/blog2.jpg";
import blog3 from "../assets/blog/blog3.jpg";
import g1 from "../assets/guest/g1.jpg";
import g2 from "../assets/guest/g2.jpg";
import g3 from "../assets/guest/g3.jpg";
import netherland from "../assets/guest/netherland.png";
import sweden from "../assets/guest/sweden.png";
import usa from "../assets/guest/usa.png";
import calendar from "../assets/img/icons/calendar.svg";
import card from "../assets/img/icons/card.svg";
import cvc from "../assets/img/icons/cvc.svg";
import lock from "../assets/img/icons/lock.svg";
import paypal from "../assets/img/icons/paypal.svg";
import s1 from "../assets/img/search_suggestion/s1.jpg";
import s2 from "../assets/img/search_suggestion/s2.jpg";
import s3 from "../assets/img/search_suggestion/s3.jpg";
import s4 from "../assets/img/search_suggestion/s4.jpg";
import s5 from "../assets/img/search_suggestion/s5.jpg";
import car_ico from "../assets/img/single-page/car-shape.svg";
import car from "../assets/img/single-page/car.png";
import contact from "../assets/img/single-page/contact.jpg";
import details_1 from "../assets/img/single-page/details_1.jpg";
import details_2 from "../assets/img/single-page/details_2.jpg";
import details_main from "../assets/img/single-page/details_main.jpg";
import hotel_grid from "../assets/img/single-page/hotel-grid1.jpg";
import hotel_list from "../assets/img/single-page/hotel-list1.jpg";
import offer_shapes from "../assets/img/single-page/offer_shapes.png";
import offer from "../assets/img/single-page/offer.png";
import search_s1 from "../assets/search_suggestion/s1.jpg";
import search_s2 from "../assets/search_suggestion/s2.jpg";
import search_s3 from "../assets/search_suggestion/s3.jpg";
import search_s4 from "../assets/search_suggestion/s4.jpg";
import search_s5 from "../assets/search_suggestion/s5.jpg";
import logo from "../assets/single-page/logo3.png";
// import flags  from "../assets/img/single-page/flags.png"
import flags from "../assets/img/flags.png";
import cl1 from "../assets/single-page/cl1.jpg";
import cl2 from "../assets/single-page/cl2.jpg";
import cl3 from "../assets/single-page/cl3.jpg";
import cl4 from "../assets/single-page/cl4.jpg";
import cl5 from "../assets/single-page/cl5.jpg";
import cl6 from "../assets/single-page/cl6.jpg";
import cl7 from "../assets/single-page/cl7.jpg";
import cl8 from "../assets/single-page/cl8.jpg";
import section_shapes4 from "../assets/section-shapes4.svg";
import section_shapes2 from "../assets/section-shapes2.svg";


// Imported images end

export const Home = () => {
    return (

        <>
            <Navbar />
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
            <div className="banner-area banner-area-three banner-bg">
                <div className="banner-shapes">
                    <img src={banner1} alt="shapes" />
                    <img src={banner2} alt="shapes" />
                </div>
                <div className="container">
                    <div className="banner-area-flex">
                        <div className="banner-single-content text-white">
                            <h2 className="banner-single-content-title fw-700"> Book our <span
                                className="banner-single-content-title-shape"> Hotels, Stays </span> for your next <span
                                    className="banner-single-content-title-shape star-shape"> tour </span> </h2>
                        </div>
                        <div className="banner-thumb-wrap">
                            <div className="banner-area-thumb">
                                <img src={banner3} alt="" />
                            </div>
                            <div className="banner-thumb-shape">
                                <img src={shape1} alt="shapes" />
                                <img src={shape2} alt="shapes" />
                                <img src={shape3} alt="shapes" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="location-area">
                <div className="container">
                    <div className="banner-location bg-white radius-5">
                        <div className="banner-location-flex">
                            <div className="banner-location-single">
                                <div className="banner-location-single-flex">
                                    <div className="banner-location-single-icon">
                                        <i className="fa-solid fa-location-crosshairs"></i>
                                    </div>
                                    <div className="banner-location-single-contents">
                                        <span className="banner-location-single-contents-subtitle"> Location </span>
                                        <div className="banner-location-single-contents-dropdown">
                                            <select className="js-select select-style-two" name="state">
                                                <option value="1">Allentown, New Mexico</option>
                                                <option value="2">Allentown, New NewYork</option>
                                                <option value="3">Allentown, New Barcelona</option>
                                                <option value="4">Allentown, Paris</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-location-single">
                                <div className="banner-location-single-flex">
                                    <div className="banner-location-single-icon">
                                        <i className="fa-solid fa-building-circle-check"></i>
                                    </div>
                                    <div className="banner-location-single-contents">
                                        <span className="banner-location-single-contents-subtitle"> Check In </span>
                                        <div className="banner-location-single-contents-dropdown custom-select">
                                            <select className="js-select select-style-two" name="state">
                                                <option value="1">20 Jun 2022</option>
                                                <option value="2">21 Jun 2022</option>
                                                <option value="3">22 Jun 2022</option>
                                                <option value="4">23 Jun 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-location-single">
                                <div className="banner-location-single-flex">
                                    <div className="banner-location-single-icon">
                                        <i className="fa-solid fa-building-circle-check"></i>
                                    </div>
                                    <div className="banner-location-single-contents">
                                        <span className="banner-location-single-contents-subtitle"> Check Out </span>
                                        <div className="banner-location-single-contents-dropdown custom-select">
                                            <select className="js-select select-style-two" name="state">
                                                <option value="1">20 Jul 2022</option>
                                                <option value="2">21 Jul 2022</option>
                                                <option value="3">22 Jul 2022</option>
                                                <option value="4">23 Jul 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-location-single">
                                <div className="banner-location-single-flex">
                                    <div className="banner-location-single-icon">
                                        <i className="fa-solid fa-person"></i>
                                    </div>
                                    <div className="banner-location-single-contents">
                                        <span className="banner-location-single-contents-subtitle"> Person </span>
                                        <div className="banner-location-single-contents-dropdown custom-select">
                                            <select className="js-select select-style-two" name="state">
                                                <option value="1">2 People</option>
                                                <option value="2">3 People</option>
                                                <option value="3">4 People</option>
                                                <option value="4">5 People</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-location-single">
                                <div className="banner-location-single-flex">
                                    <div className="banner-location-single-icon">
                                        <i className="fa-solid fa-children"></i>
                                    </div>
                                    <div className="banner-location-single-contents">
                                        <span className="banner-location-single-contents-subtitle"> Children </span>
                                        <div className="banner-location-single-contents-dropdown custom-select">
                                            <select className="js-select select-style-two" name="state">
                                                <option value="1">2 Children</option>
                                                <option value="2">3 Children</option>
                                                <option value="3">4 Children</option>
                                                <option value="4">5 Children</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-location-single-search">
                                <div className="search-suggestions-wrapper">
                                    <div className="search-click-icon">
                                        <i className="fa-brands fa-searchengin"></i>
                                    </div>
                                    <div className="search-show">
                                        <div className="search-show-inner">
                                            <form action="#">
                                                <div className="search-show-form">
                                                    <input autocomplete="off" className="form--control" id="search_form_input"
                                                        type="text" placeholder="Search here...." />
                                                    <button type="submit"> <i className="fa-solid fa-magnifying-glass"></i> </button>
                                                    <span className="suggestions-icon-close"> <i className="fa-brands fa-searchengin"></i> </span>
                                                </div>
                                                <div className="search-product" id="search_suggestions_wrap">
                                                    <div className="search-product-inner">
                                                        <h6 className="search-product-title">Product Suggestions</h6>
                                                        <ul className="search-product-list mt-4">
                                                            <li className="search-product-list-item">
                                                                <a href="javascript:void(0)" className="search-product-list-link">
                                                                    <div className="search-product-list-image"><img
                                                                        src={s1} alt="img" />
                                                                    </div>
                                                                    <div className="search-product-list-info">
                                                                        <div className="search-product-list-info-top">
                                                                            <h6 className="earch-product-list-info-title"> Apple
                                                                                Original Air pod Collection for most popular and
                                                                                best price item in market </h6>
                                                                        </div>
                                                                        <div className="search-product-list-info-price mt-2">
                                                                            <div className="search-product-list-info-price-through">
                                                                                <span className="flash-price"> $330.00 </span>
                                                                                <span className="old-price"> $300.00 </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="search-product-list-item">
                                                                <a href="javascript:void(0)" className="search-product-list-link">
                                                                    <div className="search-product-list-image"><img
                                                                        src={s2} alt="img" />
                                                                    </div>
                                                                    <div className="search-product-list-info">
                                                                        <div className="search-product-list-info-top">
                                                                            <h6 className="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div className="search-product-list-info-price mt-2">
                                                                            <span
                                                                                className="main-price fw-500 color-light">$269.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="search-product-list-item">
                                                                <a href="javascript:void(0)" className="search-product-list-link">
                                                                    <div className="search-product-list-image"><img
                                                                        src={s3} alt="img" />
                                                                    </div>
                                                                    <div className="search-product-list-info">
                                                                        <div className="search-product-list-info-top">
                                                                            <h6 className="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div className="search-product-list-info-price mt-2">
                                                                            <span
                                                                                className="main-price fw-500 color-light">$499.00</span>
                                                                            <span className="stock-out"> Stock Out </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="search-product-list-item">
                                                                <a href="javascript:void(0)" className="search-product-list-link">
                                                                    <div className="search-product-list-image"><img
                                                                        src={s4} alt="img" />
                                                                    </div>
                                                                    <div className="search-product-list-info">
                                                                        <div className="search-product-list-info-top">
                                                                            <h6 className="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div className="search-product-list-info-price mt-2">
                                                                            <span
                                                                                className="main-price fw-500 color-light">$499.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li className="search-product-list-item">
                                                                <a href="javascript:void(0)" className="search-product-list-link">
                                                                    <div className="search-product-list-image"><img
                                                                        src={s5} alt="img" />
                                                                    </div>
                                                                    <div className="search-product-list-info">
                                                                        <div className="search-product-list-info-top">
                                                                            <h6 className="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div className="search-product-list-info-price mt-2">
                                                                            <span
                                                                                className="main-price fw-500 color-light">$499.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="search-suggestion-overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section className="booking-two-area pat-100 pab-50">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="section-title-booking">
                                <div className="section-title-three">
                                    <h2 className="title"> What makes our hotels best than others? </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="single-why-two bg-white single-why-two-border radius-10">
                                <div className="single-why-two-flex">
                                    <div className="single-why-two-icon">
                                        <i className="fa-solid fa-hotel"></i>
                                    </div>
                                    <div className="single-why-two-contents">
                                        <h4 className="single-why-two-contents-title"> <a href="javascript:void(0)"> Hassle Free
                                            Booking </a> </h4>
                                        <p className="single-why-two-contents-para mt-2"> Book hotels from our website without any
                                            hassle. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="single-why-two bg-white single-why-two-border radius-10">
                                <div className="single-why-two-flex">
                                    <div className="single-why-two-icon">
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                    <div className="single-why-two-contents">
                                        <h4 className="single-why-two-contents-title"> <a href="javascript:void(0)"> 28,000 Reviews
                                        </a> </h4>
                                        <p className="single-why-two-contents-para mt-2"> Book hotels from our website without any
                                            hassle. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6">
                            <div className="single-why-two bg-white single-why-two-border radius-10">
                                <div className="single-why-two-flex">
                                    <div className="single-why-two-icon">
                                        <i className="fa-solid fa-headset"></i>
                                    </div>
                                    <div className="single-why-two-contents">
                                        <h4 className="single-why-two-contents-title"> <a href="javascript:void(0)"> 24/7 Support
                                        </a> </h4>
                                        <p className="single-why-two-contents-para mt-2"> Book hotels from our website without any
                                            hassle. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="attraction-area pat-50 pab-50">
                <div className="container">
                    <div className="section-title center-text">
                        <h2 className="title"> Clicks around our hotels </h2>
                        <div className="section-title-line"> </div>
                    </div>
                    <div className="row g-4 mt-4">
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl1} className="gallery-popup-two"> <img
                                        src={cl1} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Eiffel Tower
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl2} className="gallery-popup-two"> <img
                                        src={cl2} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Disneyland
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl3} className="gallery-popup-two"> <img
                                        src={cl3} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Palace de
                                        justice </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl4} className="gallery-popup-two"> <img
                                        src={cl4} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Arc de
                                        Trimorph </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl5} className="gallery-popup-two"> <img
                                        src={cl5} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Disneyland
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl6} className="gallery-popup-two"> <img
                                        src={cl6} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Disneyland
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl7} className="gallery-popup-two"> <img
                                        src={cl7} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Disneyland
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-sm-6">
                            <div className="single-attraction-two radius-20">
                                <div className="single-attraction-two-thumb">
                                    <a href={cl8} className="gallery-popup-two"> <img
                                        src={cl8} alt="img" /> </a>
                                </div>
                                <div className="single-attraction-two-contents">
                                    <h4 className="single-attraction-two-contents-title"> <a href="/hotel_details"> Disneyland
                                    </a> </h4>
                                    <p className="single-attraction-two-contents-para"> We have over 28K reviews to assure you top
                                        notch service. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="question-area pat-50 pab-50">
                <div className="container">
                    <div className="section-title center-text">
                        <h2 className="title"> Frequently Asked Question </h2>
                        <div className="section-title-line"> </div>
                    </div>
                    <div className="row g-4 mt-4">
                        <div className="col-xl-8 col-lg-7">
                            <div className="faq-wrapper">
                                <div className="faq-contents">
                                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                                        <h3 className="faq-title">
                                            How does it works?
                                        </h3>
                                        <div className="faq-panel">
                                            <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                                                ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                                                turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                                        </div>
                                    </div>
                                    <div className="faq-item active open wow fadeInLeft" data-wow-delay=".2s">
                                        <h3 className="faq-title">
                                            Do I get full refund if I cancel?
                                        </h3>
                                        <div className="faq-panel">
                                            <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                                                ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                                                turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                                        </div>
                                    </div>
                                    <div className="faq-item wow fadeInLeft" data-wow-delay=".3s">
                                        <h3 className="faq-title">
                                            Do you offer pool service?
                                        </h3>
                                        <div className="faq-panel">
                                            <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                                                ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                                                turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                                        </div>
                                    </div>
                                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                                        <h3 className="faq-title">
                                            What if I want to cancel?
                                        </h3>
                                        <div className="faq-panel">
                                            <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                                                ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                                                turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                                        </div>
                                    </div>
                                    <div className="faq-item wow fadeInLeft" data-wow-delay=".1s">
                                        <h3 className="faq-title">
                                            What’s the closure time?
                                        </h3>
                                        <div className="faq-panel">
                                            <p className="faq-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                                                ipsum purus erat aliquam fermentum, tincidunt. Massa id faucibus orci nunc sed
                                                turpis nibh neque. Ut tellus curabitur arcu, mollis malesuada arcu. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="faq-question faq-question-border radius-10 sticky-top">
                                <h3 className="faq-question-title"> Still got questions? </h3>
                                <div className="faq-question-form custom-form mat-20">
                                    <form action="#">
                                        <div className="single-input">
                                            <label className="label-title"> Name </label>
                                            <input type="text" className="form--control radius-10" placeholder="Type Name" />
                                        </div>
                                        <div className="single-input">
                                            <label className="label-title"> Email </label>
                                            <input type="text" className="form--control radius-10" placeholder="Type Email" />
                                        </div>
                                        <div className="single-input">
                                            <label className="label-title"> Questions </label>
                                            <textarea name="message" className="form--control form-message radius-10"
                                                placeholder="Type Your Questons..."></textarea>
                                        </div>
                                        <button className="submit-btn w-100 radius-10" type="submit"> Submit </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="blog-area pat-50 pab-50">
                <div className="container">
                    <div className="section-title center-text">
                        <h2 className="title"> Latest News </h2>
                        <div className="section-title-line"> </div>
                    </div>
                    <div className="row gy-4 mt-4">
                        <div className="col-xxl-4 col-lg-4 col-md-6">
                            <div className="single-blog blog-two">
                                <div className="single-blog-thumbs">
                                    <a href="/hotel_details"> <img className="lazyloads" src={blog1} alt="" />
                                    </a>
                                    <div className="single-blog-thumbs-date">
                                        <a href="javascript:void(0)"> <span className="date"> 18 </span> <span className="month"> Jun
                                        </span> </a>
                                    </div>
                                </div>
                                <div className="single-blog-contents mt-3">
                                    <div className="single-blog-contents-tags mt-3">
                                        <span className="single-blog-contents-tags-item">
                                            <a href="javascript:void(0)"> <i class="fa-solid fa-hotel"></i> Hotel </a>
                                        </span>
                                        <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 22 Comments
                                        </a> </span>
                                    </div>
                                    <h4 className="single-blog-contents-title mt-3"> <a href="/hotel_details"> Great Deals to
                                        Send Your Loved Ones Somewhere Nice </a> </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-6">
                            <div className="single-blog blog-two">
                                <div className="single-blog-thumbs">
                                    <a href="/hotel_details"> <img className="lazyloads" src={blog2} alt="" />
                                    </a>
                                    <div className="single-blog-thumbs-date">
                                        <a href="javascript:void(0)"> <span className="date"> 19 </span> <span className="month"> Jun
                                        </span> </a>
                                    </div>
                                </div>
                                <div className="single-blog-contents mt-3">
                                    <div className="single-blog-contents-tags mt-3">
                                        <span className="single-blog-contents-tags-item">
                                            <a href="javascript:void(0)"> <i class="fa-solid fa-hotel"></i> Hotel </a>
                                        </span>
                                        <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 25 Comments
                                        </a> </span>
                                    </div>
                                    <h4 className="single-blog-contents-title mt-3"> <a href="/hotel_details"> Read Real Guest
                                        Reviews. 24/7 Customer Service and others. </a> </h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-lg-4 col-md-6">
                            <div className="single-blog blog-two">
                                <div className="single-blog-thumbs">
                                    <a href="/hotel_details"> <img className="lazyloads" src={blog3} alt="" />
                                    </a>
                                    <div className="single-blog-thumbs-date">
                                        <a href="javascript:void(0)"> <span className="date"> 20 </span> <span className="month"> Jun
                                        </span> </a>
                                    </div>
                                </div>
                                <div className="single-blog-contents mt-3">
                                    <div className="single-blog-contents-tags mt-3">
                                        <span className="single-blog-contents-tags-item">
                                            <a href="javascript:void(0)"> <i class="fa-solid fa-hotel"></i> Hotel </a>
                                        </span>
                                        <span className="single-blog-contents-tags-item"> <a href="javascript:void(0)"> 12 Comments
                                        </a> </span>
                                    </div>
                                    <h4 className="single-blog-contents-title mt-3"> <a href="/hotel_details"> Compare hotel
                                        prices and find an amazing price for the Resort </a> </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />

        </>


    );
}
