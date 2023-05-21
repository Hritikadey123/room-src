import React from "react";
import { Footer } from "../inc/footer";
import Add_header from "../inc/additional_header";
import hotel_grid1 from "../assets/img/single-page/hotel-list1.jpg";
// style="background-image: url(assets/img/single-page/hotel-grid1.jpg);"

// style="background-image: url(assets/img/single-page/hotel-grid1.jpg);"

// style="background-image: url(assets/img/single-page/hotel-grid1.jpg);"

// style="background-image: url(assets/img/single-page/hotel-grid1.jpg);"

// style="background-image: url(assets/img/single-page/hotel-list1.jpg);"
const Hotels = () => {
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
            <div class="breadcrumb-area section-bg-2 breadcrumb-padding">
                <div class="container custom-container-one">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-contents">
                                <h4 class="breadcrumb-contents-title"> Hotel List </h4>
                                <ul class="breadcrumb-contents-list list-style-none">
                                    <li class=""> <a href="/"
                                        class="breadcrumb-contents-list-item"> Home </a>
                                    </li>
                                    <li class="breadcrumb-contents-list-item"> Hotels </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="responsive-overlay"></div>
            <section class="hotel-list-area section-bg-2 pat-100 pab-100">
                <div class="container">
                    <div class="banner-location bg-white radius-10">
                        <div class="banner-location-flex">
                            <div class="banner-location-single">
                                <div class="banner-location-single-flex">
                                    <div class="banner-location-single-icon">
                                        <i class="fa-solid fa-location-crosshairs"></i>
                                    </div>
                                    <div class="banner-location-single-contents">
                                        <span class="banner-location-single-contents-subtitle"> Location </span>
                                        <div class="banner-location-single-contents-dropdown">
                                            <select class="js-select select-style-two" name="state">
                                                <option value="1">Allentown, New Mexico</option>
                                                <option value="2">Allentown, New NewYork</option>
                                                <option value="3">Allentown, New Barcelona</option>
                                                <option value="4">Allentown, Paris</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-location-single">
                                <div class="banner-location-single-flex">
                                    <div class="banner-location-single-icon">
                                        <i class="fa-solid fa-building-circle-check"></i>
                                    </div>
                                    <div class="banner-location-single-contents">
                                        <span class="banner-location-single-contents-subtitle"> Check In </span>
                                        <div class="banner-location-single-contents-dropdown custom-select">
                                            <select class="js-select select-style-two" name="state">
                                                <option value="1">20 Jun 2022</option>
                                                <option value="2">21 Jun 2022</option>
                                                <option value="3">22 Jun 2022</option>
                                                <option value="4">23 Jun 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-location-single">
                                <div class="banner-location-single-flex">
                                    <div class="banner-location-single-icon">
                                        <i class="fa-solid fa-building-circle-check"></i>
                                    </div>
                                    <div class="banner-location-single-contents">
                                        <span class="banner-location-single-contents-subtitle"> Check Out </span>
                                        <div class="banner-location-single-contents-dropdown custom-select">
                                            <select class="js-select select-style-two" name="state">
                                                <option value="1">20 Jul 2022</option>
                                                <option value="2">21 Jul 2022</option>
                                                <option value="3">22 Jul 2022</option>
                                                <option value="4">23 Jul 2022</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-location-single">
                                <div class="banner-location-single-flex">
                                    <div class="banner-location-single-icon">
                                        <i class="fa-solid fa-person"></i>
                                    </div>
                                    <div class="banner-location-single-contents">
                                        <span class="banner-location-single-contents-subtitle"> Person </span>
                                        <div class="banner-location-single-contents-dropdown custom-select">
                                            <select class="js-select select-style-two" name="state">
                                                <option value="1">2 People</option>
                                                <option value="2">3 People</option>
                                                <option value="3">4 People</option>
                                                <option value="4">5 People</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-location-single">
                                <div class="banner-location-single-flex">
                                    <div class="banner-location-single-icon">
                                        <i class="fa-solid fa-children"></i>
                                    </div>
                                    <div class="banner-location-single-contents">
                                        <span class="banner-location-single-contents-subtitle"> Children </span>
                                        <div class="banner-location-single-contents-dropdown custom-select">
                                            <select class="js-select select-style-two" name="state">
                                                <option value="1">2 Children</option>
                                                <option value="2">3 Children</option>
                                                <option value="3">4 Children</option>
                                                <option value="4">5 Children</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="banner-location-single-search">
                                <div class="search-suggestions-wrapper">
                                    <div class="search-click-icon">
                                        <i class="fa-brands fa-searchengin"></i>
                                    </div>
                                    <div class="search-show">
                                        <div class="search-show-inner">
                                            <form action="#">
                                                <div class="search-show-form">
                                                    <input autocomplete="off" class="form--control" id="search_form_input"
                                                        type="text" placeholder="Search here...." />
                                                    <button type="submit"> <i class="fa-solid fa-magnifying-glass"></i> </button>
                                                    <span class="suggestions-icon-close"> <i class="fa-brands fa-searchengin"></i> </span>
                                                </div>
                                                <div class="search-product" id="search_suggestions_wrap">
                                                    <div class="search-product-inner">
                                                        <h6 class="search-product-title">Product Suggestions</h6>
                                                        <ul class="search-product-list mt-4">
                                                            <li class="search-product-list-item">
                                                                <a href="javascript:void(0)" class="search-product-list-link">
                                                                    <div class="search-product-list-image"><img
                                                                        src="assets/img/search_suggestion/s1.jpg" alt="img" />
                                                                    </div>
                                                                    <div class="search-product-list-info">
                                                                        <div class="search-product-list-info-top">
                                                                            <h6 class="earch-product-list-info-title"> Apple
                                                                                Original Air pod Collection for most popular and
                                                                                best price item in market </h6>
                                                                        </div>
                                                                        <div class="search-product-list-info-price mt-2">
                                                                            <div class="search-product-list-info-price-through">
                                                                                <span class="flash-price"> $330.00 </span>
                                                                                <span class="old-price"> $300.00 </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="search-product-list-item">
                                                                <a href="javascript:void(0)" class="search-product-list-link">
                                                                    <div class="search-product-list-image"><img
                                                                        src="assets/img/search_suggestion/s2.jpg" alt="img" />
                                                                    </div>
                                                                    <div class="search-product-list-info">
                                                                        <div class="search-product-list-info-top">
                                                                            <h6 class="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div class="search-product-list-info-price mt-2">
                                                                            <span
                                                                                class="main-price fw-500 color-light">$269.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="search-product-list-item">
                                                                <a href="javascript:void(0)" class="search-product-list-link">
                                                                    <div class="search-product-list-image"><img
                                                                        src="assets/img/search_suggestion/s3.jpg" alt="img" />
                                                                    </div>
                                                                    <div class="search-product-list-info">
                                                                        <div class="search-product-list-info-top">
                                                                            <h6 class="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div class="search-product-list-info-price mt-2">
                                                                            <span
                                                                                class="main-price fw-500 color-light">$499.00</span>
                                                                            <span class="stock-out"> Stock Out </span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="search-product-list-item">
                                                                <a href="javascript:void(0)" class="search-product-list-link">
                                                                    <div class="search-product-list-image"><img
                                                                        src="assets/img/search_suggestion/s4.jpg" alt="img" />
                                                                    </div>
                                                                    <div class="search-product-list-info">
                                                                        <div class="search-product-list-info-top">
                                                                            <h6 class="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div class="search-product-list-info-price mt-2">
                                                                            <span
                                                                                class="main-price fw-500 color-light">$499.00</span>
                                                                        </div>
                                                                    </div>
                                                                </a>
                                                            </li>
                                                            <li class="search-product-list-item">
                                                                <a href="javascript:void(0)" class="search-product-list-link">
                                                                    <div class="search-product-list-image"><img
                                                                        src="assets/img/search_suggestion/s5.jpg" alt="img" />
                                                                    </div>
                                                                    <div class="search-product-list-info">
                                                                        <div class="search-product-list-info-top">
                                                                            <h6 class="earch-product-list-info-title"> Apple
                                                                                Original Airpod Collection </h6>
                                                                        </div>
                                                                        <div class="search-product-list-info-price mt-2">
                                                                            <span
                                                                                class="main-price fw-500 color-light">$499.00</span>
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
                                <div class="search-suggestion-overlay"></div>
                            </div>
                        </div>
                    </div>
                    <div class="shop-contents-wrapper mt-5">
                        <div class="shop-icon">
                            <div class="shop-icon-sidebar">
                                <i class="fa-solid fa-bars"></i>
                            </div>
                        </div>
                        <div class="shop-sidebar-content">
                            <div class="shop-close-content">
                                <div class="shop-close-content-icon"> <i class="fa-solid fa-x"></i> </div>
                                <div class="single-shop-left bg-white radius-10">
                                    <div class="single-shop-left-title open">
                                        <h5 class=""> Prices </h5>
                                        <div class="single-shop-left-inner mt-4">
                                            <form class="price-range-slider" method="post" data-start-min="0"
                                                data-start-max="10000" data-min="0" data-max="10000" data-step="5">
                                                <div class="ui-range-slider"></div>
                                                <div class="ui-range-slider-footer">
                                                    <div class="ui-range-values">
                                                        <span class="ui-price-title"> Price: </span>
                                                        <div class="ui-range-value-min">$<span class="min_price">100</span>
                                                            <input type="hidden" value="100" />
                                                        </div>-
                                                        <div class="ui-range-value-max">$<span class="max_price">9950</span>
                                                            <input type="hidden" value="9950" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-shop-left bg-white radius-10 mt-4">
                                    <div class="single-shop-left-title open">
                                        <h5 class=""> Amenities </h5>
                                        <div class="single-shop-left-inner margin-top-15">
                                            <ul class="single-shop-left-list active-list list-style-none">
                                                <li class="item-search">
                                                    <input type="text" class="form--control" placeholder="Search Amenities" />
                                                    <div class="item-search-icon"> <i class="fa-solid fa-magnifying-glass"></i> </div>
                                                </li>
                                                <li class="item"> <a href="javascript:void(0)"> Parking </a> </li>
                                                <li class="item active"> <a href="javascript:void(0)"> Room Service </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Free Wifi </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Healthy Breakfast </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Flexible Checkout </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Swimming Pool </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Mini Fridge </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Garden View </a> </li>
                                                <li class="item"> <a href="javascript:void(0)"> Play Ground </a> </li>
                                                <li class="more-amenities"> <a href="javascript:void(0)"> 23 More Amenities </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="single-shop-left bg-white radius-10 mt-4">
                                    <div class="single-shop-left-title open">
                                        <h5 class=""> Filter By Rating </h5>
                                        <div class="single-shop-left-inner">
                                            <ul class="single-shop-left-filter-list active-list mt-3">
                                                <li class="item active">
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                </li>
                                                <li class="item">
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                    <a href="javascript:void(0)"> <i class="fa-solid fa-star"></i> </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="shop-grid-contents">
                            <div class="grid-list-contents">
                                <div class="grid-list-contents-flex">
                                    <p class="grid-list-contents-para"> Showing 1-4 of 16 results </p>
                                    <div class="grid-list-view">
                                        <ul class="grid-list-view-flex d-flex tabs list-style-none">
                                            <li class="grid-list-view-icons active" data-tab="tab-grid">
                                                <a href="javascript:void(0)" class="icon"> <i class="fa-solid fa-grip"></i>
                                                </a>
                                            </li>
                                            <li class="grid-list-view-icons" data-tab="tab-list">
                                                <a href="javascript:void(0)" class="icon"> <i class="fa-solid fa-bars"></i> </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-grid" class="tab-content-item active mt-4">
                                <div class="row gy-4">
                                    <div class="col-md-6">
                                        <div class="hotel-view bg-white radius-20">
                                            <a href="/hotel_details" class="hotel-view-thumb hotel-view-grid-thumb bg-image">
                                                <img src={hotel_grid1} alt="hotel" />
                                            </a>
                                            <div class="hotel-view-contents">
                                                <div class="hotel-view-contents-header">
                                                    <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5
                                                        <span class="hotel-view-contents-review-count"> (380) </span> </span>
                                                    <h3 class="hotel-view-contents-title"> <a href="/hotel_details"> King
                                                        Suite Room </a> </h3>
                                                    <div class="hotel-view-contents-location mt-2">
                                                        <span class="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                        <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                            Allentown, New Mexico 31134 </span>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-middle">
                                                    <div class="hotel-view-contents-flex">
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Car Parking">
                                                            <i class="fa-solid fa-square-parking"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Free Wifi">
                                                            <i class="fa-solid fa-wifi"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Free Breakfast">
                                                            <i class="fa-solid fa-mug-saucer"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Home Service">
                                                            <i class="fa-solid fa-person-booth"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Swimming Pool">
                                                            <i class="fa-solid fa-water-ladder"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Reception">
                                                            <i class="fa-brands fa-nfc-directional"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Gym">
                                                            <i class="fa-solid fa-dumbbell"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon">
                                                            <a class="hotel-view-contents-icon-more" href="javascript:void(0)">
                                                                +8 More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-bottom">
                                                    <div class="hotel-view-contents-bottom-flex">
                                                        <div class="hotel-view-contents-bottom-contents">
                                                            <h4 class="hotel-view-contents-bottom-title"> $230 <sub>/Night</sub>
                                                            </h4>
                                                            <p class="hotel-view-contents-bottom-para"> (4 Nights, 2 Rooms, 4
                                                                Persons) </p>
                                                        </div>
                                                        <div class="btn-wrapper">
                                                            <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                Reserve Now </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="hotel-view bg-white radius-20">
                                            <a href="/hotel_details" class="hotel-view-thumb hotel-view-grid-thumb bg-image">
                                                <img src={hotel_grid1} alt="hotel" />
                                            </a>
                                            <div class="hotel-view-contents">
                                                <div class="hotel-view-contents-header">
                                                    <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.8
                                                        <span class="hotel-view-contents-review-count"> (380) </span> </span>
                                                    <h3 class="hotel-view-contents-title"> <a href="/hotel_details"> Queen
                                                        Size Room </a> </h3>
                                                    <div class="hotel-view-contents-location mt-2">
                                                        <span class="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                        <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                            Allentown, New Mexico 31134 </span>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-middle">
                                                    <div class="hotel-view-contents-flex">
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Car Parking">
                                                            <i class="fa-solid fa-square-parking"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Free Wifi">
                                                            <i class="fa-solid fa-wifi"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Free Breakfast">
                                                            <i class="fa-solid fa-mug-saucer"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Home Service">
                                                            <i class="fa-solid fa-person-booth"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Swimming Pool">
                                                            <i class="fa-solid fa-water-ladder"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Reception">
                                                            <i class="fa-brands fa-nfc-directional"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Gym">
                                                            <i class="fa-solid fa-dumbbell"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon">
                                                            <a class="hotel-view-contents-icon-more" href="javascript:void(0)">
                                                                +8 More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-bottom">
                                                    <div class="hotel-view-contents-bottom-flex">
                                                        <div class="hotel-view-contents-bottom-contents">
                                                            <h4 class="hotel-view-contents-bottom-title"> $170 <sub>/Night</sub>
                                                            </h4>
                                                            <p class="hotel-view-contents-bottom-para"> (3 Nights, 2 Rooms, 4
                                                                Persons) </p>
                                                        </div>
                                                        <div class="btn-wrapper">
                                                            <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                Reserve Now </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="hotel-view bg-white radius-20">
                                            <a href="/hotel_details" class="hotel-view-thumb hotel-view-grid-thumb bg-image">
                                                <img src={hotel_grid1} alt="hotel" />
                                            </a>
                                            <div class="hotel-view-contents">
                                                <div class="hotel-view-contents-header">
                                                    <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.7
                                                        <span class="hotel-view-contents-review-count"> (380) </span> </span>
                                                    <h3 class="hotel-view-contents-title"> <a href="/hotel_details"> Big
                                                        Size Room </a> </h3>
                                                    <div class="hotel-view-contents-location mt-2">
                                                        <span class="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                        <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                            Allentown, New Mexico 31134 </span>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-middle">
                                                    <div class="hotel-view-contents-flex">
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Car Parking">
                                                            <i class="fa-solid fa-square-parking"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Free Wifi">
                                                            <i class="fa-solid fa-wifi"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Free Breakfast">
                                                            <i class="fa-solid fa-mug-saucer"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Home Service">
                                                            <i class="fa-solid fa-person-booth"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Swimming Pool">
                                                            <i class="fa-solid fa-water-ladder"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Reception">
                                                            <i class="fa-brands fa-nfc-directional"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="top" title="Gym">
                                                            <i class="fa-solid fa-dumbbell"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon">
                                                            <a class="hotel-view-contents-icon-more" href="javascript:void(0)">
                                                                +8 More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-bottom">
                                                    <div class="hotel-view-contents-bottom-flex">
                                                        <div class="hotel-view-contents-bottom-contents">
                                                            <h4 class="hotel-view-contents-bottom-title"> $200 <sub>/Night</sub>
                                                            </h4>
                                                            <p class="hotel-view-contents-bottom-para"> (3 Nights, 3 Rooms, 3
                                                                Persons) </p>
                                                        </div>
                                                        <div class="btn-wrapper">
                                                            <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                Reserve Now </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="hotel-view bg-white radius-20">
                                            <a href="/hotel_details" class="hotel-view-thumb hotel-view-grid-thumb bg-image">
                                                <img src={hotel_grid1} alt="hotel" />
                                            </a>
                                            <div class="hotel-view-contents">
                                                <div class="hotel-view-contents-header">
                                                    <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5
                                                        <span class="hotel-view-contents-review-count"> (380) </span> </span>
                                                    <h3 class="hotel-view-contents-title"> <a href="/hotel_details"> Best
                                                        Alishan Room </a> </h3>
                                                    <div class="hotel-view-contents-location mt-2">
                                                        <span class="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                        <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                            Allentown, New Mexico 31134 </span>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-middle">
                                                    <div class="hotel-view-contents-flex">
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Car Parking">
                                                            <i class="fa-solid fa-square-parking"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Free Wifi">
                                                            <i class="fa-solid fa-wifi"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Free Breakfast">
                                                            <i class="fa-solid fa-mug-saucer"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Home Service">
                                                            <i class="fa-solid fa-person-booth"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Swimming Pool">
                                                            <i class="fa-solid fa-water-ladder"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Reception">
                                                            <i class="fa-brands fa-nfc-directional"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                            data-bs-placement="bottom" title="Gym">
                                                            <i class="fa-solid fa-dumbbell"></i>
                                                        </div>
                                                        <div class="hotel-view-contents-icon">
                                                            <a class="hotel-view-contents-icon-more" href="javascript:void(0)">
                                                                +8 More </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hotel-view-contents-bottom">
                                                    <div class="hotel-view-contents-bottom-flex">
                                                        <div class="hotel-view-contents-bottom-contents">
                                                            <h4 class="hotel-view-contents-bottom-title"> $280 <sub>/Night</sub>
                                                            </h4>
                                                            <p class="hotel-view-contents-bottom-para"> (4 Nights, 4 Rooms, 4
                                                                Persons) </p>
                                                        </div>
                                                        <div class="btn-wrapper">
                                                            <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                Reserve Now </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col">
                                        <div class="pagination-wrapper">
                                            <ul class="pagination-list list-style-none">
                                                <li class="pagination-list-item-prev">
                                                    <a href="javascript:void(0)" class="pagination-list-item-button"> Prev </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 1 </a>
                                                </li>
                                                <li class="pagination-list-item active">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 2 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 3 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 4 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 5 </a>
                                                </li>
                                                <li class="pagination-list-item-next">
                                                    <a href="javascript:void(0)" class="pagination-list-item-button"> Next </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="tab-list" class="tab-content-item mt-4">
                                <div class="row gy-4">
                                    <div class="col-12">
                                        <div class="hotel-view bg-white radius-20">
                                            <div class="hotel-view-flex">
                                                <a href="/hotel_details"
                                                    class="hotel-view-thumb hotel-view-list-thumb bg-image">
                                                    <img src={hotel_grid1} alt="hotel" />
                                                </a>
                                                <div class="hotel-view-contents">
                                                    <div class="hotel-view-contents-header">
                                                        <div
                                                            class="hotel-view-contents-header-flex d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                                            <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5 <span
                                                                class="hotel-view-contents-review-count"> (380) </span>
                                                            </span>
                                                            <div class="btn-wrapper">
                                                                <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                    Reserve Now </a>
                                                            </div>
                                                        </div>
                                                        <h3 class="hotel-view-contents-title"> <a href="/hotel_details">
                                                            King Suite Room </a> </h3>
                                                        <div class="hotel-view-contents-location mt-2">
                                                            <span class="hotel-view-contents-location-icon"> <i
                                                                class="las la-map-marker-alt"></i> </span>
                                                            <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                                Allentown, New Mexico 31134 </span>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-middle">
                                                        <div class="hotel-view-contents-flex">
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-square-parking"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Parking
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-wifi"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Wifi </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-mug-saucer"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Breakfast
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-person-booth"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Room
                                                                    Service </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-water-ladder"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Pool </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-brands fa-nfc-directional"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Reception
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-dumbbell"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Gym </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <a class="hotel-view-contents-icon-more"
                                                                    href="javascript:void(0)"> +8 More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-bottom">
                                                        <div class="hotel-view-contents-bottom-flex">
                                                            <div
                                                                class="hotel-view-contents-bottom-contents d-flex flex-wrap gap-4 gap-sm-1">
                                                                <h4 class="hotel-view-contents-bottom-title"> $230
                                                                    <sub>/Night</sub> </h4>
                                                                <p class="hotel-view-contents-bottom-para"> (4 Nights, 2 Rooms,
                                                                    4 Persons) </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="hotel-view bg-white radius-20">
                                            <div class="hotel-view-flex">
                                                <a href="/hotel_details"
                                                    class="hotel-view-thumb hotel-view-list-thumb bg-image">
                                                    <img src={hotel_grid1} alt="hotel" />
                                                </a>
                                                <div class="hotel-view-contents">
                                                    <div class="hotel-view-contents-header">
                                                        <div
                                                            class="hotel-view-contents-header-flex d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                                            <span class="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.9 <span
                                                                class="hotel-view-contents-review-count"> (476) </span>
                                                            </span>
                                                            <div class="btn-wrapper">
                                                                <a href="javascript:void(0)" class="cmn-btn btn-bg-1 btn-small">
                                                                    Reserve Now </a>
                                                            </div>
                                                        </div>
                                                        <h3 class="hotel-view-contents-title"> <a href="/hotel_details">
                                                            Queen Size Room </a> </h3>
                                                        <div class="hotel-view-contents-location mt-2">
                                                            <span class="hotel-view-contents-location-icon"> <i
                                                                class="las la-map-marker-alt"></i> </span>
                                                            <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                                Allentown, New Mexico 31134 </span>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-middle">
                                                        <div class="hotel-view-contents-flex">
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-square-parking"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Parking
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-wifi"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Wifi </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-mug-saucer"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Breakfast
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-person-booth"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Room
                                                                    Service </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-water-ladder"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Pool </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-brands fa-nfc-directional"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Reception
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-dumbbell"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Gym </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <a class="hotel-view-contents-icon-more"
                                                                    href="javascript:void(0)"> +8 More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-bottom">
                                                        <div class="hotel-view-contents-bottom-flex">
                                                            <div
                                                                class="hotel-view-contents-bottom-contents d-flex flex-wrap gap-4 gap-sm-1">
                                                                <h4 class="hotel-view-contents-bottom-title"> $170
                                                                    <sub>/Night</sub> </h4>
                                                                <p class="hotel-view-contents-bottom-para"> (3 Nights, 2 Rooms,
                                                                    4 Persons) </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="hotel-view bg-white radius-20">
                                            <div class="hotel-view-flex">
                                                <a href="/hotel_details"
                                                    class="hotel-view-thumb hotel-view-list-thumb bg-image">
                                                    <img src={hotel_grid1} alt="hotel" />
                                                </a>
                                                <div class="hotel-view-contents">
                                                    <div class="hotel-view-contents-header">
                                                        <div
                                                            class="hotel-view-contents-header-flex d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                                            <span class="hotel-view-contents-review"><i class="fa-solid fa-star"></i> 4.6 <span
                                                                class="hotel-view-contents-review-count"> (394) </span>
                                                            </span>
                                                            <div class="btn-wrapper">
                                                                <a href="/hotel_details" class="cmn-btn btn-bg-1 btn-small">
                                                                    Reserve Now </a>
                                                            </div>
                                                        </div>
                                                        <h3 class="hotel-view-contents-title"> <a href="/hotel_details"> Big
                                                            Size Room </a> </h3>
                                                        <div class="hotel-view-contents-location mt-2">
                                                            <span class="hotel-view-contents-location-icon"> <i
                                                                class="las la-map-marker-alt"></i> </span>
                                                            <span class="hotel-view-contents-location-para"> 4140 Parker Rd.
                                                                Allentown, New Mexico 31134 </span>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-middle">
                                                        <div class="hotel-view-contents-flex">
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-square-parking"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Parking
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-wifi"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Wifi </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-mug-saucer"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Breakfast
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-person-booth"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Room
                                                                    Service </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-water-ladder"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Pool </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-brands fa-nfc-directional"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Reception
                                                                </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <span> <i class="fa-solid fa-dumbbell"></i> </span>
                                                                <p class="hotel-view-contents-icon-title flex-fill"> Gym </p>
                                                            </div>
                                                            <div class="hotel-view-contents-icon d-flex gap-1">
                                                                <a class="hotel-view-contents-icon-more"
                                                                    href="javascript:void(0)"> +8 More </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="hotel-view-contents-bottom">
                                                        <div class="hotel-view-contents-bottom-flex">
                                                            <div
                                                                class="hotel-view-contents-bottom-contents d-flex flex-wrap gap-4 gap-sm-1">
                                                                <h4 class="hotel-view-contents-bottom-title"> $200
                                                                    <sub>/Night</sub> </h4>
                                                                <p class="hotel-view-contents-bottom-para"> (3 Nights, 3 Rooms,
                                                                    3 Persons) </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-5">
                                    <div class="col">
                                        <div class="pagination-wrapper">
                                            <ul class="pagination-list list-style-none">
                                                <li class="pagination-list-item-prev">
                                                    <a href="javascript:void(0)" class="pagination-list-item-button"> Prev </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 1 </a>
                                                </li>
                                                <li class="pagination-list-item active">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 2 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 3 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 4 </a>
                                                </li>
                                                <li class="pagination-list-item">
                                                    <a href="javascript:void(0)" class="pagination-list-item-link"> 5 </a>
                                                </li>
                                                <li class="pagination-list-item-next">
                                                    <a href="javascript:void(0)" class="pagination-list-item-button"> Next </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Hotels;