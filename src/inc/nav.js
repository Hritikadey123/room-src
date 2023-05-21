import React from "react";
import logo from '../logo.svg';
export default function Navbar(props) {
    return (
        <header className="header-style-01">

            <nav className="navbar navbar-area white-nav nav-absolute navbar-two navbar-expand-lg">
                <div className="container custom-container-one nav-container">
                    <div className="logo-wrapper">
                        <a href="/" className="logo">
                            <img src={logo} alt="logo" className="nav_logo"></img>
                        </a>
                    </div>
                    <div className="responsive-mobile-menu d-lg-none">
                        <a href="javascript:void(0)" className="click-nav-right-icon">
                            <i class="fa-solid fa-house"></i>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#hotel_booking_menu">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="hotel_booking_menu">
                        <ul className="navbar-nav">
                            <li className="">
                                <a href="javascript:void(0)">Home</a>
                            </li>
                            <li><a href="/hotels"> Pg </a></li>
                            <li><a href="/hotels"> Rents </a></li>
                            <li className="">
                                <a href="/about">About</a>
                            </li>
                            <li className="">
                                <a href="/hotels">Hotels</a>

                            </li>
                            <li><a href="/contact"> Contact Us </a></li>
                        </ul>
                    </div>
                    <div className="navbar-right-content show-nav-content">
                        <div className="single-right-content">
                            <div className="navbar-right-flex">
                                <div className="navbar-right-btn">
                                    <a href="/login"> Log In </a>
                                </div>
                                <div className="btn-wrapper">
                                    <a href="/signup" className="cmn-btn btn-bg-1 radius-10"> Sign Up </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    );
}