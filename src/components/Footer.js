import React from 'react'
import "./CSS/Footer.css"

export default function Footer() {
  return (
    <>
    <div className="main-foot">
        <div className="sub-foot">
            <p>About & Company</p>
            <div className="links">
                <a href="/about-us">About Us</a>
                <a href="/our-cer">Our Certifications</a>
                <a href="/mission">Mission & Vision</a>
                <a href="about-com">About Company</a>
            </div>
        </div>
        <div className="sub-foot">
            <p>Customer Support</p>
            <div className="links">
                <a href="/faq">FAQ</a>
                <a href="/shiping">Shipping & Delvery Policy</a>
                <a href="/return">Return & Refund</a>
                <a href="/order">Order Tracking</a>
                <a href="cos-care">Costomer Care</a>
            </div>
        </div>
        <div className="sub-foot">
            <p>Legal Information</p>
            <div className="links">
                <a href="/privacy">Privacy Policy</a>
                <a href="/terms">Terms & Conditions</a>
                <a href="/disclaimer">Disclaimer</a>
                <a href="/cookee">Cookie Policy</a>
            </div>
        </div>
        <div className="sub-foot">
            <p>Product & Servies</p>
            <div className="links">
                <a href="/product">Product Categories</a>
                <a href=".pro">Products</a>
                <a href="/certificates">Certifications</a>
                <a href="/care">Care Guide</a>
            </div>
        </div>
        <div className="sub-foot">
            <p>Helpfull Resources</p>
            <div className="links">
                <a href="/blogs">Blogs</a>
                <a href="/buying-guide">Buying Guide</a>
                <a href="/reviews">User Reviews</a>
                <a href="/news">Newsletter</a>
            </div>
        </div>
        <div className="sub-foot">
            <p>Social Links</p>
            <div className="links">
                <a href="/insta">Instagram</a>
                <a href="/face">Facebook</a>
                <a href="/you">YouTube</a>
                <a href="/x">Twitter</a>
            </div>
        </div>
    </div>
    </>
  )
}