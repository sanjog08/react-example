// Navbar.js
import { useState } from "react";
import "../index.css";
import "./CSS/Navbar.css"
import {GiHamburgerMenu} from "react-icons/gi";

function Navbar() {

    const [showMediaIcons, setShowMediaIcons] = useState(false);

  return (
    <>
    <nav className="main-nav">
        <div className="logo-nav">
            <h2>
                <span>w</span>istone
            </h2>
        </div>
        <div className={
            showMediaIcons ? "menu-nav mobile-menu-nav" : "menu-nav"}>
            <ul>
                <li>
                    <a href="/products">Products</a>
                </li>
                <li>
                    <a href="/blogs">Blogs</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
                <li>
                    <a href="/profile">Profile</a>
                </li>
            </ul>
        </div>
        <div className="hamburger-menu">
            <a href="/" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu />
            </a>
        </div>
    </nav>
    </>
  );
}

export default Navbar;