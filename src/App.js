import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './inc/nav';
import { Home } from './pages/home';
import { Footer } from './inc/footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/about';
import Contact from './pages/contact';
import Signup from './pages/signup';
import Login from './pages/login';
import Hotels from './pages/hotels';
import Hotel_details from './pages/hotel_details';
import Checkout from './pages/checkout';

function App() {
    return (
        <>
            {/* <Navbar title="Roomtopia" />
            <Home />
            <Footer /> */}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/hotels' element={<Hotels />} />
                    <Route path='/hotel_details' element={<Hotel_details />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                </Routes>
            </BrowserRouter>


        </>
    );
}

export default App;
