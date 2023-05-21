import React from "react";
import Add_header from "../inc/additional_header";
const Checkout = () => {
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
            <div class="breadcrumb-area breadcrumb-padding">
                <div class="container custom-container-one">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="breadcrumb-contents">
                                <h4 class="breadcrumb-contents-title"> Checkout Details </h4>
                                <ul class="breadcrumb-contents-list list-style-none">
                                    <li class=""> <a href="/" class="breadcrumb-contents-list-item-link"> Home </a> </li>
                                    <li class="breadcrumb-contents-list-item"> Checkout </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="Checkout-area section-bg-2 pat-100 pab-100">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-xl-8 col-lg-7">
                            <div class="checkout-wrapper">
                                <div class="checkout-single bg-white radius-10">
                                    <h4 class="checkout-title"> Booking Information </h4>
                                    <div class="checkout-contents mt-3">
                                        <div class="checkout-form custom-form">
                                            <form action="#">
                                                <div class="input-flex-item">
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> First Name </label>
                                                        <input class="form--control" type="text" name="name" placeholder="Type First Name" required />
                                                    </div>
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Last Name </label>
                                                        <input class="form--control" type="text" name="name" placeholder="Type Last Name" required />
                                                    </div>
                                                </div>
                                                <div class="input-flex-item">
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Mobile Number </label>
                                                        <input class="form--control" id="phone" type="tel" placeholder="Type Mobile Number" required />
                                                    </div>
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Email Address </label>
                                                        <input class="form--control" type="text" name="email" placeholder="Type Email" required />
                                                    </div>
                                                </div>
                                                <div class="input-flex-item">
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Address </label>
                                                        <input class="form--control" type="text" name="address" placeholder="Type Address" required />
                                                    </div>
                                                </div>
                                                <div class="single-input mt-4">
                                                    <label class="label-title"> Country </label>
                                                    <div class="banner-location-single-contents-dropdown">
                                                        <select class="js-select">
                                                            <option value="1">India</option>
                                                            <option value="2">Pakistan</option>
                                                            <option value="3">America</option>
                                                            <option value="4">Bangladesh</option>
                                                            <option value="4">China</option>
                                                            <option value="4">UK</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div class="input-flex-item">
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> City/Town </label>
                                                        <div class="banner-location-single-contents-dropdown">
                                                            <select class="js-select">
                                                                <option value="1">Agartala</option>
                                                                <option value="2">Tripura</option>
                                                                <option value="3">Guwahati</option>
                                                                <option value="4">Kunjaban</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Zip Code </label>
                                                        <div class="banner-location-single-contents-dropdown">
                                                            <select class="js-select">
                                                                <option value="1">Agartala</option>
                                                                <option value="2">West Tripura</option>
                                                                <option value="3">Kunjaban</option>
                                                                <option value="4">Guwahati</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-single bg-white radius-10">
                                    <h4 class="checkout-title"> Payment </h4>
                                    <div class="checkout-contents mt-4">
                                        <div class="custom-radio custom-radio-inline">
                                            <div class="custom-radio-single active">
                                                <input class="radio-input" type="radio" id="radio1" name="size" checked="checked" />
                                                <label for="radio1"> <img src="assets/img/icons/card.svg" alt="card" /> Credit/Dabit Card</label>
                                            </div>
                                            <div class="custom-radio-single">
                                                <input class="radio-input" type="radio" name="size" id="radio2" />
                                                <label for="radio2"> <img src="assets/img/icons/paypal.svg" alt="Paypal" /> Paypal</label>
                                            </div>
                                        </div>
                                        <div class="checkout-form custom-form">
                                            <form action="#">
                                                <div class="single-input mt-4">
                                                    <label class="label-title"> Card Number </label>
                                                    <input class="form--control input-padding-left" type="text" name="name" placeholder="Type Card Number" />
                                                    <div class="input-icon"> <img src="assets/img/icons/card.svg" alt="Icon" /> </div>
                                                </div>
                                                <div class="input-flex-item">
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> Expire Date </label>
                                                        <input class="form--control input-padding-left date-picker" placeholder="Select Expire Date" />
                                                        <div class="input-icon"> <img src="assets/img/icons/calendar.svg" alt="Icon" /> </div>
                                                    </div>
                                                    <div class="single-input mt-4">
                                                        <label class="label-title"> CVV/CVC </label>
                                                        <input class="form--control input-padding-left" type="number" name="name" placeholder="Type CVV/CVC" />
                                                        <div class="input-icon"> <img src="assets/img/icons/cvc.svg" alt="Icon" /> </div>
                                                    </div>
                                                </div>
                                                <div class="lock-contents mt-4">
                                                    <div class="lock-contents-icon">
                                                        <img src="assets/img/icons/lock.svg" alt="Icon" />
                                                    </div>
                                                    <span class="lock-contents-para"> Information are encrypted with 256 bit SSL </span>
                                                </div>
                                                <div class="guaranty-cancellation radius-10 mt-4">
                                                    <h4 class="guaranty-cancellation-title"> Guarantee & Cancellation </h4>
                                                    <p class="guaranty-cancellation-para"> Cancel 12 hours before checking-in time for a Free Cancellation. </p>
                                                </div>
                                                <div class="checkbox-wrap mt-4">
                                                    <div class="checkbox-inline">
                                                        <input class="check-input" type="checkbox" id="agree" />
                                                        <label class="checkbox-label" for="agree"> I agree to the <a href="javascript:void(0)">Terms & Conditions</a> of <a href="javascript:void(0)">Beyond Hotels</a> </label>
                                                    </div>
                                                </div>
                                                <div class="btn-wrapper mt-4">
                                                    <a href="javascript:void(0)" class="cmn-btn btn-bg-1 btn-small"> Pay & Confirm </a>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="sticky-top">
                                <div class="checkout-widget checkout-widget-padding widget bg-white radius-10">
                                    <div class="checkout-sidebar">
                                        <h4 class="checkout-sidebar-title"> Booking Details </h4>
                                        <div class="checkout-sidebar-contents">
                                            <ul class="checkout-flex-list list-style-none checkout-border-top pt-3 mt-3">
                                                <li class="list"> <span class="regular"> Checking In </span> <span class="strong"> 03 Jun 2022 </span> </li>
                                                <li class="list"> <span class="regular"> Checking Out </span> <span class="strong"> 06 Jun 2022 </span> </li>
                                                <li class="list"> <span class="regular"> Number of Rooms </span> <span class="strong"> 03 </span> </li>
                                                <li class="list"> <span class="regular"> Total Stay </span> <span class="strong"> 3 Nights, 2 Days </span> </li>
                                                <li class="list"> <span class="regular"> Number of Person </span> <span class="strong"> 5 Person </span> </li>
                                                <li class="list"> <span class="regular"> Number of Children </span> <span class="strong"> 2 Children </span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-widget checkout-widget-padding widget bg-white radius-10">
                                    <div class="checkout-sidebar">
                                        <h4 class="checkout-sidebar-title"> Invoice </h4>
                                        <div class="checkout-sidebar-contents">
                                            <ul class="checkout-flex-list list-style-none checkout-border-top pt-3 mt-3">
                                                <li class="list"> <span class="regular"> Charge </span> <span class="strong"> $230.00 </span> </li>
                                                <li class="list"> <span class="regular"> Discount </span> <span class="strong"> -$8 </span> </li>
                                                <li class="list"> <span class="regular"> Vat </span> <span class="strong"> (+13%) $20.08 </span> </li>
                                            </ul>
                                            <ul class="checkout-flex-list list-style-none checkout-border-top pt-3 mt-3">
                                                <li class="list"> <span class="regular"> Total </span> <span class="strong color-one fs-20"> $250.08 </span> </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-widget checkout-widget-padding widget bg-white radius-10">
                                    <div class="checkout-car-shape">
                                        <img src="assets/img/single-page/car-shape.svg" alt="shapes" />
                                    </div>
                                    <div class="checkout-sidebar">
                                        <div class="checkout-sidebar-contents">
                                            <div class="checkout-car center-text">
                                                <div class="checkout-car-thumb">
                                                    <img src="assets/img/single-page/car.png" alt="img" />
                                                </div>
                                                <div class="checkout-car-contents mt-4">
                                                    <h4 class="checkout-car-contents-title"> Need a Car? </h4>
                                                    <p class="checkout-car-contents-para mt-3"> Book luxury cars from Airport to our hotels at no hassle and with discounted price </p>
                                                    <div class="btn-wrapper mt-4">
                                                        <a href="javascript:void(0)" class="cmn-btn btn-bg-1"> Book Now </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Checkout;