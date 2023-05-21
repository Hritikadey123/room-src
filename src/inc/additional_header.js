import React from "react";
import logo from "../logo.svg";
const Add_header = () => {
    return (
        <header class="header-style-01">

            <nav class="navbar navbar-area navbar-border navbar-padding navbar-expand-lg">
                <div class="container custom-container-one nav-container">
                    <div class="logo-wrapper">
                        <a href="/" class="logo">
                            <img src={logo} alt="logo" className="top_logo" />
                        </a>
                    </div>
                    <div class="responsive-mobile-menu d-lg-none">
                        <a href="javascript:void(0)" class="click-nav-right-icon">
                            <i class="fa-solid fa-ellipsis-vertical"></i>
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#hotel_booking_menu">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="hotel_booking_menu">
                        <ul class="navbar-nav">
                            <li class="current-menu-item">
                                <a href="/">Home</a>
                            </li>
                            <li><a href="/hotels"> PG </a></li>
                            <li class="current-menu-item">
                                <a href="/hotels">Rent</a>
                            </li>
                            <li class="current-menu-item">
                                <a href="/hotels">Hotels</a>
                            </li>
                            <li><a href="/about"> About </a></li>
                            <li><a href="/contact"> Contact Us </a></li>
                        </ul>
                    </div>
                    <div class="navbar-right-content show-nav-content">
                        <div class="single-right-content">
                            <div class="navbar-right-flex">
                                <div class="navbar-right-btn">
                                    <a href="/login"> Log In </a>
                                </div>
                                <div class="btn-wrapper">
                                    <a href="/signup" class="cmn-btn btn-bg-1 radius-10"> Sign Up </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}

export default Add_header;