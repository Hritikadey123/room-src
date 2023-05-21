import React from "react";
import { Footer } from "../inc/footer";
import contact_img from "../assets/img/single-page/contact.jpg";
import Add_header from "../inc/additional_header";
const Contact = () => {
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
                                <h4 class="breadcrumb-contents-title"> Contact Us </h4>
                                <ul class="breadcrumb-contents-list list-style-none">
                                    <li class=""> <a href="/" class="breadcrumb-contents-list-item-link"> Home </a> </li>
                                    <li class="breadcrumb-contents-list-item"> Contact Us </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section class="contact-area pat-100 pab-100">
                <div class="container">
                    <div class="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1824.9094848354048!2d91.2786059!3d23.8250356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3753f46d935d5f33%3A0x80e20b4a9319052a!2sNetaji%20Chowmohani%2C%20Agartala%2C%20Tripura%20799001!5e0!3m2!1sen!2sin!4v1674215479358!5m2!1sen!2sin"></iframe>
                    </div>
                    <div class="row">
                        <div class="col-lg-6 mt-5">
                            <div class="contact-thumb">
                                <img src={contact_img} alt="img" />
                            </div>
                        </div>
                        <div class="col-lg-6 mt-5">
                            <div class="contact-wrapper contact-padding bg-white radius-20">
                                <div class="contact-contents">
                                    <h4 class="contact-contents-title"> Get in touch </h4>
                                    <p class="contact-contents-para mt-2"> Our friendly team would love to hear from you. </p>
                                    <div class="contact-contents-form custom-form">
                                        <form action="#">
                                            <div class="single-flex-input mt-4">
                                                <div class="single-input mt-4">
                                                    <input type="text" class="form--control radius-5" placeholder="First Name" />
                                                </div>
                                                <div class="single-input mt-4">
                                                    <input type="text" class="form--control radius-5" placeholder="Last Name" />
                                                </div>
                                            </div>
                                            <div class="single-input mt-4">
                                                <input type="text" class="form--control radius-5" placeholder="Type Email" />
                                            </div>
                                            <div class="single-input mt-4">
                                                <input type="tel" class="form--control radius-5" id="phone" placeholder="Type Number" />
                                            </div>
                                            <div class="single-input mt-4">
                                                <textarea class="form--control form-message radius-5"></textarea>
                                            </div>
                                            <button type="submit" class="submit-btn radius-5"> Save Changes </button>
                                        </form>
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

export default Contact;