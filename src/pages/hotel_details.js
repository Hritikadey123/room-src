import React from "react";
import Navbar from "../inc/nav";
import { Footer } from "../inc/footer";
import blog_main from "../assets/img/single-page/details_main.jpg";
import hotel_details from "../assets/img/single-page/hotel-grid1.jpg";
import hotel_list1 from "../assets/img/single-page/hotel-list1.jpg";
import Add_header from "../inc/additional_header";
// style="background-image: url(assets/img/single-page/hotel-list1.jpg);"

const Hotel_details = () => {
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
            <div className="breadcrumb-area breadcrumb-padding">
                <div className="container custom-container-one">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-contents">
                                <h4 className="breadcrumb-contents-title"> Hotel Details </h4>
                                <ul className="breadcrumb-contents-list list-style-none">
                                    <li className="breadcrumb-contents"> <a href="/" className="breadcrumb-contents-list-item-link"> Home </a> </li>
                                    <li className="breadcrumb-contents"> <a href="/hotels"> Hotels </a> </li>
                                    <li className="breadcrumb-contents-list-item"> Hotel Details </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section>
                <div className="container">
                    <div className="row g-4">
                        <div className="col-xl-8 col-lg-7">
                            <div className="details-left-wrapper">
                                <div className="details-contents bg-white radius-10">
                                    <div className="details-contents-header">
                                        <div className="details-contents-thumb details-contents-main-thumb bg-image" >
                                            <img src={blog_main} alt="hotel" />
                                        </div>
                                        <div className="details-contents-header-flex">
                                            <div className="details-contents-header-thumb">
                                                <img src="assets/img/single-page/details_1.jpg" alt="img" />
                                            </div>
                                            <div className="details-contents-header-thumb">
                                                <img src="assets/img/single-page/details_2.jpg" alt="img" />
                                                <a href="javascript:void(0)" className="more-photos"> <i className="las la-plus"></i> More Photos </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="hotel-view-contents">
                                        <div className="hotel-view-contents-header">
                                            <span className="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5 <span
                                                className="hotel-view-contents-review-count"> (380) </span> </span>
                                            <h3 className="hotel-view-contents-title"> King Suite Room </h3>
                                            <div className="hotel-view-contents-location mt-2">
                                                <span className="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                <span className="hotel-view-contents-location-para"> 4140 Parker Rd. Allentown, New
                                                    Mexico 31134 </span>
                                            </div>
                                        </div>
                                        <div className="hotel-view-contents-middle">
                                            <div className="hotel-view-contents-flex">
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-square-parking"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Parking </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-wifi"></i>
                                                    </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Wifi </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-mug-saucer"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Breakfast </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-person-booth"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Room Service </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-water-ladder"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Pool </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-brands fa-nfc-directional"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Reception </p>
                                                </div>
                                                <div className="hotel-view-contents-icon d-flex gap-1">
                                                    <span> <i class="fa-solid fa-dumbbell"></i> </span>
                                                    <p className="hotel-view-contents-icon-title flex-fill"> Gym </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="hotel-view-contents-bottom">
                                            <div className="hotel-view-contents-bottom-flex">
                                                <div className="hotel-view-contents-bottom-contents">
                                                    <h4 className="hotel-view-contents-bottom-title"> $230 <sub>/Night</sub> </h4>
                                                    <p className="hotel-view-contents-bottom-para"> (4 Nights, 2 Rooms, 4 Persons)
                                                    </p>
                                                </div>
                                                <div className="btn-wrapper">
                                                    <a href="javascript:void(0)" className="cmn-btn btn-bg-1 btn-small"> Reserve Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details-contents-tab">
                                        <ul className="tabs details-tab details-tab-border">
                                            <li className="active" data-tab="about"> About </li>
                                            <li data-tab="reviews"> Reviews </li>
                                        </ul>
                                        <div id="about" className="tab-content-item active">
                                            <div className="about-tab-contents">
                                                <p className="about-tab-contents-para"> One morning, when Gregor Samsa woke from
                                                    troubled dreams, he found himself transformed in his bed into a horrible
                                                    vermin. He lay on his armour-like back. </p>
                                                <p className="about-tab-contents-para mt-4"> He lifted his head a little he could
                                                    see his brown belly, slightly domed and divided by arches into stiff
                                                    sections. The bedding was hardly able to cover it and seemed ready to slide
                                                    off any moment. His many legs,
                                                    pitifully thin compared with the size of the rest of him. </p>
                                                <p className="about-tab-contents-para mt-4">
                                                    So many legs pitifully thin compared with the size of the rest of him waved
                                                    about helplessly as he looked What's happened to me. </p>
                                            </div>
                                        </div>
                                        <div id="reviews" className="tab-content-item">
                                            <div className="review-tab-contents">
                                                <div className="review-tab-contents-single">
                                                    <div className="rating-wrap">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <p> <span className="total-ratings">(167)</span></p>
                                                    </div>
                                                    <p className="about-review-para mt-3"> Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Sed a egestas leo. Aliquam ut ante lobortis tellus
                                                        cursus pellentesque. Praesent feugiat tellus quis aliquet </p>
                                                    <div className="review-tab-contents-author mt-4">
                                                        <h4 className="review-tab-contents-author-name"> Sandra M. Hurt </h4>
                                                        <p className="review-tab-contents-author-para mt-2"> TrustPilot </p>
                                                    </div>
                                                </div>
                                                <div className="review-tab-contents-single">
                                                    <div className="rating-wrap">
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <i class="fa-solid fa-star"></i>
                                                        <p> <span className="total-ratings">(236)</span></p>
                                                    </div>
                                                    <p className="about-review-para mt-3"> Lorem ipsum dolor sit amet, consectetur
                                                        adipiscing elit. Sed a egestas leo. Aliquam ut ante lobortis tellus
                                                        cursus pellentesque. Praesent feugiat tellus quis aliquet </p>
                                                    <div className="review-tab-contents-author mt-4">
                                                        <h4 className="review-tab-contents-author-name"> Robert Fox </h4>
                                                        <p className="review-tab-contents-author-para mt-2"> Designer </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-view bg-white radius-20 mt-4">
                                    <div className="hotel-view-flex">
                                        <a href="#" className="hotel-view-thumb hotel-view-list-thumb bg-image">
                                            <img src={hotel_list1} alt="hotel" />
                                        </a>
                                        <div className="hotel-view-contents">
                                            <div className="hotel-view-contents-header">
                                                <div
                                                    className="hotel-view-contents-header-flex d-flex flex-wrap gap-3 align-items-center justify-content-between">
                                                    <span className="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5
                                                        <span className="hotel-view-contents-review-count"> (380) </span> </span>
                                                    <div className="btn-wrapper">
                                                        <a href="javascript:void(0)" className="cmn-btn btn-bg-1 btn-small"> Reserve
                                                            Now </a>
                                                    </div>
                                                </div>
                                                <h3 className="hotel-view-contents-title"> <a href="hotel_details.html"> King Suite
                                                    Room </a> </h3>
                                                <div className="hotel-view-contents-location mt-2">
                                                    <span className="hotel-view-contents-location-icon"> <i class="fa-solid fa-map-location-dot"></i> </span>
                                                    <span className="hotel-view-contents-location-para"> 4140 Parker Rd. Allentown,
                                                        New Mexico 31134 </span>
                                                </div>
                                            </div>
                                            <div className="hotel-view-contents-middle">
                                                <div className="hotel-view-contents-flex">
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-square-parking"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Parking </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-wifi"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Wifi </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-mug-saucer"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Breakfast </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-person-booth"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Room Service </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-water-ladder"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Pool </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-brands fa-nfc-directional"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Reception </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <span> <i class="fa-solid fa-dumbbell"></i> </span>
                                                        <p className="hotel-view-contents-icon-title flex-fill"> Gym </p>
                                                    </div>
                                                    <div className="hotel-view-contents-icon d-flex gap-1">
                                                        <a className="hotel-view-contents-icon-more" href="javascript:void(0)"> +8
                                                            More </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hotel-view-contents-bottom">
                                                <div className="hotel-view-contents-bottom-flex">
                                                    <div className="hotel-view-contents-bottom-contents d-flex flex-wrap gap-4">
                                                        <h4 className="hotel-view-contents-bottom-title"> $230 <sub>/Night</sub>
                                                        </h4>
                                                        <p className="hotel-view-contents-bottom-para"> (4 Nights, 2 Rooms, 4
                                                            Persons) </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="sticky-top">
                                <div className="hotel-details-widget hotel-details-widget-padding widget bg-white radius-10">
                                    <div className="details-sidebar">
                                        <div className="check_out">
                                            <div className="details-sidebar-dropdown custom-form">
                                                <form action="#">
                                                    <div className="single-input">
                                                        <label className="details-sidebar-dropdown-title"> Check In </label>
                                                        <input className="form--control date-picker" type="text" placeholder="Check in" />
                                                    </div>
                                                    <div className="single-input mt-3">
                                                        <label className="details-sidebar-dropdown-title"> Check Out </label>
                                                        <input className="form--control date-picker" type="text"
                                                            placeholder="Check out" />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="details-sidebar-quantity pt-4">
                                            <div className="details-sidebar-quantity-flex">
                                                <div className="details-sidebar-quantity-item">
                                                    <h6 className="details-sidebar-quantity-title"> Guest </h6>
                                                    <div className="details-sidebar-quantity-field">
                                                        <span className="minus"><i class="fa-solid fa-user-minus"></i></span><input
                                                            className="quantity-input" type="number" value="5" /><span className="plus">
                                                            <i class="fa-solid fa-user-plus"></i></span>
                                                    </div>
                                                </div>
                                                <div className="details-sidebar-quantity-item">
                                                    <h6 className="details-sidebar-quantity-title"> Children </h6>
                                                    <div className="details-sidebar-quantity-field">
                                                        <span className="minus"><i class="fa-solid fa-user-minus"></i></span><input
                                                            className="quantity-input" type="number" value="3" /><span className="plus"><i class="fa-solid fa-user-plus"></i></span>
                                                    </div>
                                                </div>
                                                <div className="details-sidebar-quantity-item">
                                                    <h6 className="details-sidebar-quantity-title"> Room </h6>
                                                    <div className="details-sidebar-quantity-field">
                                                        <span className="minus"><i class="fa-solid fa-minus"></i></span><input
                                                            className="quantity-input" type="number" value="2" /><span className="plus"><i class="fa-solid fa-plus"></i></span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-wrapper mt-4">
                                            <a href="/checkout" className="cmn-btn btn-bg-1 btn-small"> Go to Checkout </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-details-widget widget bg-white radius-10">
                                    <div className="hotel-view">
                                        <div className="hotel-view-thumb hotel-view-grid-thumb bg-image">
                                            <img src={hotel_details} alt="hotel" />
                                        </div>
                                        <div className="hotel-view-contents">
                                            <div className="hotel-view-contents-header">
                                                <span className="hotel-view-contents-review"> <i class="fa-solid fa-star"></i> 4.5 <span
                                                    className="hotel-view-contents-review-count"> (380) </span> </span>
                                                <h3 className="hotel-view-contents-title"> King Suite Room </h3>
                                                <div className="hotel-view-contents-location mt-2">
                                                    <span className="hotel-view-contents-location-icon"> <i
                                                        className="las la-map-marker-alt"></i> </span>
                                                    <span className="hotel-view-contents-location-para"> 4140 Parker Rd. Allentown,
                                                        New Mexico 31134 </span>
                                                </div>
                                            </div>
                                            <div className="hotel-view-contents-middle">
                                                <div className="hotel-view-contents-flex">
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Car Parking">
                                                        <i class="fa-solid fa-square-parking"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Free Wifi">
                                                        <i class="fa-solid fa-wifi"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Free Breakfast">
                                                        <i class="fa-solid fa-mug-saucer"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Home Service">
                                                        <i className="las la-quidditch"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Swimming Pool">
                                                        <i class="fa-solid fa-water-ladder"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Reception">
                                                        <i class="fa-brands fa-nfc-directional"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon myTooltip" data-bs-toggle="tooltip"
                                                        data-bs-placement="top" title="Gym">
                                                        <i class="fa-solid fa-dumbbell"></i>
                                                    </div>
                                                    <div className="hotel-view-contents-icon">
                                                        <a className="hotel-view-contents-icon-more" href="javascript:void(0)"> +8
                                                            More </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hotel-view-contents-bottom">
                                                <div className="hotel-view-contents-bottom-flex">
                                                    <div className="hotel-view-contents-bottom-contents">
                                                        <h4 className="hotel-view-contents-bottom-title"> $230 <sub>/Night</sub>
                                                        </h4>
                                                        <p className="hotel-view-contents-bottom-para"> (4 Nights, 2 Rooms, 4
                                                            Persons) </p>
                                                    </div>
                                                    <div className="btn-wrapper">
                                                        <a href="javascript:void(0)" className="cmn-btn btn-bg-1 btn-small"> Reserve
                                                            Now </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hotel-details-widget hotel-details-widget-padding widget bg-white radius-10">
                                    <div className="details-sidebar">
                                        <div className="details-sidebar-offer center-text radius-10">
                                            <div className="details-sidebar-offer-shapes">
                                                <img src="assets/img/single-page/offer_shapes.png" alt="shapes" />
                                            </div>
                                            <div className="details-sidebar-offer-thumb">
                                                <img src="assets/img/single-page/offer.png" alt="" />
                                            </div>
                                            <div className="btn-wrapper mt-5">
                                                <a href="javascript:void(0)" className="cmn-btn btn-bg-white"> Book Now </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <br />
            <br />
            <br />
            <br />

            <Footer />
        </>
    )
}

export default Hotel_details;