import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
   import("./Navbar.css");

    const [navbar, setNavbar] = useState(false);

    useEffect(() => {
        document.querySelector("header #toggleNavbar").addEventListener("click", () => {
            setNavbar(!navbar);
        })
    })

    return (
        <header className={`navbar ${!navbar ? "collapsed" : ""}`}>
            <div className="left">
                <a href="/react/">
                    <img src="/react/logo.png" />
                    <h1>DEV EQUIP</h1>
                </a>

                <button id="toggleNavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>

            <div className={`center ${!navbar ? "collapsed" : ""}`}>
                <a href="/react/about">About</a>
                <a href="/react/marketplace">Marketplace</a>
                <a href="/react/blog">Blog</a>
                <a href="/react/services">Services</a>
            </div>

            <div className={`right ${!navbar ? "collapsed" : ""}`}>
                <a href="/react/contact" className="button">
                    Contact Us
                </a>
            </div>
        </header>
    );
}

export default Navbar;