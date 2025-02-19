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
        <header class="navbar">
            <div class="left">
                <a href="/react/">
                    <img src="/react/logo.png" />
                    <h1>DEV EQUIP</h1>
                </a>

                <button id="toggleNavbar">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/></svg>
                </button>
            </div>

            <div class={`center ${!navbar ? "collapsed" : ""}`}>
                <a href="/react/about">About</a>
                <a href="/react/marketplace">Marketplace</a>
                <a href="/react/blog">Blog</a>
                <a href="/react/contact">Contact</a>
            </div>

            <div class={`right ${!navbar ? "collapsed" : ""}`}>
                <a href="/react/discord" class="redirect">Community</a>
                <a href="https://patreon.com/DonKingFrog" class="button">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M489.7 153.8c-.1-65.4-51-119-110.7-138.3C304.8-8.5 207-5 136.1 28.4C50.3 68.9 23.3 157.7 22.3 246.2C21.5 319 28.7 510.6 136.9 512c80.3 1 92.3-102.5 129.5-152.3c26.4-35.5 60.5-45.5 102.4-55.9c72-17.8 121.1-74.7 121-150z"/></svg>
                    Patreon
                </a>
            </div>
        </header>
    );
}

export default Navbar;