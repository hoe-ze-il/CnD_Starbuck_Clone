import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../Button/Button.scss"
import next from "./icons/next.svg"
import back from "./icons/back.png"

import './NavigationBar.scss';

function NavigationBar({ handleNoScroll }) {
    // State to control if the navigation/mobile menu is open
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Function to scroll to the top of the page
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Add smooth scrolling animation
        });
    }

    // Scroll to the top of the page when the nav-bar is clicked
    useEffect(() => {
        const navbar = document.querySelector('.navigation-bar');
        navbar.addEventListener("click", scrollToTop);
    }, [isNavOpen])

    // toggling hamburger menu OPEN/Close
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);

    };

    // Close navigation bar when the screen exceeds 768px
    const checkWindowSize = () => {
        if (window.innerWidth >= 768) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', checkWindowSize);
        return () => {
            window.removeEventListener('resize', checkWindowSize);
        };
    }, []);

    // to call "handleNoScroll" which is a callback function passed from parents components
    // if the navigation is opened, users cannot scroll the content of the page
    useEffect(() => {
        handleNoScroll(isNavOpen);
    }, [isNavOpen, handleNoScroll]);

    // to close navigation bar when users click on the area other than menu-btn/menu/products/navbar
    const hideNavOnClickOutside = (event) => {
        const navbar = document.querySelector('.navigation-bar');
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')
        const products = document.querySelector('.all-products')

        if (
            !navbar.contains(event.target) &&
            !nav.contains(event.target) &&
            !btn.contains(event.target) &&
            !products.contains(event.target)
        ) {
            setIsNavOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', hideNavOnClickOutside);
        return () => {
            document.removeEventListener('click', hideNavOnClickOutside);
        };
    }, []);

    // to handle click on the "Menu" button
    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    // to return back to the menu when clicked
    const returnToMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        if (isNavOpen === false) {
            setIsMenuOpen(isNavOpen)
        }

    }, [isNavOpen])

    return (
        <>
            <nav className="navigation-bar">
                <div className="navbar-container">
                    <div className="navbar-brand">
                        <Link to="/">
                            <img src="./images/logo.svg"></img>
                        </Link>
                    </div>
                    <ul className="navbar-nav-left">
                        <li>
                            <Link to="/menu">Menu</Link>
                        </li>
                        <li>
                            <Link to="/rewards">Rewards</Link>
                        </li>
                        <li>
                            <a href="/giftcards">Gift Cards</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav-right">
                        <li>
                            <a href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z">
                                <svg
                                    fill="#000000"
                                    version="1.1"
                                    id="Capa_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlnsXlink="http://www.w3.org/1999/xlink"
                                    width="800px"
                                    height="800px"
                                    viewBox="0 0 395.71 395.71"
                                    xmlSpace="preserve"
                                >
                                    <g>
                                        <path
                                            d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                        />
                                    </g>
                                </svg>
                                <span>Find a store</span>
                            </a>
                        </li>
                        <li>
                            <button className="button button-dark-outline">Sign In</button>
                        </li>
                        <li>
                            <button className="button button-dark">Join Now</button>
                        </li>
                    </ul>
                    {/*
              Hamburger Menu
          */}
                    <button onClick={toggleNav} type="button" className={isNavOpen ? 'hamburger open' : 'hamburger'} id="menu-btn">
                        <span className="hamburger--top" />
                        <span className="hamburger--middle" />
                        <span className="hamburger--bottom" />
                    </button>
                </div>
            </nav>
            {/* Mobile menu */}
            <div className={isNavOpen ? 'mobile-menu' : 'mobile-menu nav-hidden'} id="menu">
                <ul className="navbar-head">
                    <li>
                        <button onClick={handleMenuClick} >
                            <p>Menu</p>
                            <img src={next}></img>
                        </button>

                    </li>
                    <li>
                        <Link to="/rewards">Rewards</Link>
                    </li>
                    <li>
                        <Link to="/giftcards">Gift Cards</Link>
                    </li>
                </ul>
                <div className="mobile-menu-bottom">
                    <botton className="button button-dark-outline">Sign In</botton>
                    <botton className="button button-dark">Join Now</botton>
                    <div>
                        <a href="https://www.starbucks.com/store-locator?map=39.635307,-101.337891,5z">
                            <svg
                                fill="#000000"
                                version="1.1"
                                id="Capa_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                width="800px"
                                height="800px"
                                viewBox="0 0 395.71 395.71"
                                xmlSpace="preserve"
                            >
                                <g>
                                    <path
                                        d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738
            c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388
            C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191
            c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"
                                    />
                                </g>
                            </svg>
                            Find a Store
                        </a>
                    </div>
                </div>
            </div>
            <div className={isMenuOpen ? "all-products" : "all-products nav-hidden"}>
                <ul className="items-container">
                    <li>
                        <button onClick={returnToMenu}>
                            <img src={back} />
                            <p>Back to Menu</p>
                        </button>

                    </li>
                    <li>
                        <Link to="/menu">All products</Link>
                    </li>
                    <li>
                        <Link>Featured</Link>
                    </li>
                    <li>
                        <Link to="">Previous Orders</Link>
                    </li>
                    <li>
                        <Link to="">Favorite Products</Link>
                    </li>
                </ul>

            </div>
        </>
    )
}



export default NavigationBar