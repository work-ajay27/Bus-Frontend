import "./Footer.css";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand */}
                <div className="footer-section">
                    <h2 className="footer-logo">True Fare</h2>
                    <p className="footer-text">
                        AI-powered bus ticket booking platform for smart and hassle-free travel.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Search Buses</a></li>
                        <li><a href="#">My Bookings</a></li>
                        <li><a href="#">Offers</a></li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-section">
                    <h3>Support</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                {/* Social */}
                <div className="footer-section">
                    <h3>Connect With Us</h3>
                    <div className="social-icons">
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer">
                            <FaTwitter />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noreferrer">
                            <FaInstagram />
                        </a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                © {new Date().getFullYear()} True Fare. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
