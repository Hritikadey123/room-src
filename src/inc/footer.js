import React from "react";
import logo from '../logo.svg';

export const Footer = () => {
    return (
        <footer className="footer-area footer-area-two footer-bg-2">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-wrapper">
                            <div className="footer-wrapper-flex">
                                <div className="footer-wrapper-single">
                                    <div className="footer-widget widget">
                                        <div className="footer-widget-contents">
                                            <div className="footer-widget-logo">
                                                <a href="/">
                                                    <img src={logo} alt="logo" className="footer_logo"></img>
                                                </a>
                                            </div>
                                            <div className="footer-widget-inner mt-4">
                                                <p className="footer-widget-contents-para"> Amet minim mollit non deserunt
                                                    ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis
                                                    enim velit. </p>
                                                <div className="copyright-contents-items mt-5">
                                                    <div className="copyright-contents-single">
                                                        <div className="copyright-contents-single-flex">
                                                            <div className="copyright-contents-single-icon">
                                                                <i class="fa-solid fa-phone-volume"></i>
                                                            </div>
                                                            <div className="copyright-contents-single-details">
                                                                <span className="copyright-contents-single-details-title"> Have
                                                                    a question? </span>
                                                                <a href="tel:9863832774"
                                                                    className="copyright-contents-single-details-link">
                                                                    +91-9863832774 </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="copyright-contents-single">
                                                        <div className="copyright-contents-single-flex">
                                                            <div className="copyright-contents-single-icon">
                                                                <i class="fa-solid fa-envelope"></i>
                                                            </div>
                                                            <div className="copyright-contents-single-details">
                                                                <span className="copyright-contents-single-details-title"> Have
                                                                    a question? </span>
                                                                <a href="mailto:hritikadey139@gmail.com"
                                                                    className="copyright-contents-single-details-link"> <span
                                                                        className="__cf_email__"
                                                                        data-cfemail="81f4eff3e4e0edc1e4f9e0ecf1ede4afe2eeec">[email&#160;protected]</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="footer-wrapper-single">
                                    <div className="footer-widget widget">
                                        <h3 className="footer-widget-title text-white"> Discounts, Newsletters </h3>
                                        <div className="footer-widget-inner mt-4">
                                            <p className="footer-widget-para"> Get discounts and newsletters on our hotels in
                                                your email. We promise to not spam. Unsubscribe anytime </p>
                                            <div className="footer-widget-form mt-5">
                                                <form action="#">
                                                    <div className="footer-widget-form-single">
                                                        <input className="footer-widget-form-control" type="text"
                                                            placeholder="Enter Your Email"></input>
                                                        <button type="submit"> Submit </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-navbar">
                <div className="container">
                    <div className="footer-widget widget">
                        <div className="footer-widget-nav">
                            <ul className="footer-widget-nav-list list-style-none">
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> About </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Jobs </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Blog </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Press </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Careers </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Terms of use </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Privacy Policy </a>
                                </li>
                                <li className="footer-widget-nav-list-item">
                                    <a href="javascript:void(0)" className="footer-widget-nav-list-link"> Contact </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area footer-padding">
                <div className="container">
                    <div className="copyright-contents">
                        <div className="copyright-contents-flex">
                            <div className="footer-widget-social">
                                <ul className="footer-widget-social-list list-style-none justify-content-center">
                                    <li className="footer-widget-social-list-item">
                                        <a className="footer-widget-social-list-link" href="javascript:void(0)">
                                            <i class="fa-brands fa-facebook"></i> </a>
                                    </li>
                                    <li className="footer-widget-social-list-item">
                                        <a className="footer-widget-social-list-link" href="javascript:void(0)">
                                            <i class="fa-brands fa-instagram"></i> </a>
                                    </li>
                                    <li className="footer-widget-social-list-item">
                                        <a className="footer-widget-social-list-link" href="javascript:void(0)">
                                            <i class="fa-brands fa-twitter"></i> </a>
                                    </li>
                                    <li className="footer-widget-social-list-item">
                                        <a className="footer-widget-social-list-link" href="javascript:void(0)">
                                            <i class="fa-brands fa-youtube"></i> </a>
                                    </li>
                                </ul>
                            </div>
                            <span className="copyright-contents-main"> © 2000-2022, All Rights Reserved by <a
                                href="/"> Roomtopia </a> </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    )
}