import React, { useEffect, useState } from 'react';
import "../style.css";

function Navbar() {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuActive, setIsMenuActive] = useState(false);

    // Sticky navbar behavior
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Toggle menu/navbar
    const handleMenuToggle = () => {
        setIsMenuActive(prevState => !prevState);
    };

    return (
        <div>
            <div className="scroll-up-btn">
                <i className="fas fa-angle-up"></i>
            </div>
            <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
                <div className="max-width NavMaxWidth">
                    <div className="logo"><a href="#">My<span> Portfolio</span></a></div>
                    <ul className={`menu ${isMenuActive ? "active" : ""}`}>
                        <li><a href="#home" className="menu-btn" onClick={handleMenuToggle}>Home</a></li>
                        <li><a href="#about" className="menu-btn" onClick={handleMenuToggle}>About</a></li>
                        <li><a href="#services" className="menu-btn" onClick={handleMenuToggle}>Projects</a></li>
                        <li><a href="#skills" className="menu-btn" onClick={handleMenuToggle}>Skills</a></li>
                        <li><a href="#teams" className="menu-btn" onClick={handleMenuToggle}>Certificate</a></li>
                        <li><a href="#contact" className="menu-btn" onClick={handleMenuToggle}>Contact</a></li>
                    </ul>
                    <div className={`menu-btn ${isMenuActive ? "active" : ""}`} onClick={handleMenuToggle}>
                        <i className="fas fa-bars"></i>
                    </div>
                </div>
            </nav>
        </div>

    );
}

export default Navbar;
