import React, { Component } from 'react';
import Link from "next/link";

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="/">
                                        <a>
                                            <img src={require("../../images/logo/logo.gif")} alt="GameyGram" style={{ width: "50px" }} />
                                            <img src={require("../../images/logo/logopurple.png")} alt="GameyGram" style={{ width: "150px", marginTop: "10px" }} />
                                        </a>
                                    </Link>
                                </div>

                                <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a className="facebook" target="_blank">
                                                <i className="fab fa-facebook"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="twitter" target="_blank">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="youtube" target="_blank">
                                                <i className="fab fa-youtube"></i>
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="instagram" target="_blank">
                                                <i className="fab fa-instagram"></i>
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Shop</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/specials">
                                            <a>Specials</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/all-gameygrams">
                                            <a>All GameyGrams</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/gameyshop">
                                            <a>GameyShop</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/2d-gameygrams">
                                            <a>2D GameyGrams</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/3d-gameygrams">
                                            <a>3D GameyGrams</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Quick Links</h3>

                                <ul className="quick-links">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/faq">
                                            <a>Faq's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/customer-service">
                                            <a>Customer Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>

                                <ul className="footer-contact-info">
                                    <li>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Location: 2637 E Atlantic Blvd # 1101 <br /> Pompano Beach, FL 33062
                                    </li>
                                    <li>
                                        <i className="far fa-envelope"></i>
                                        Email Us: <a href="mailto:Support@GameyGram.Com">Support@GameyGram.Com</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <p>Copyright &copy; 2021 GameyGram, Inc. All Rights Reserved.</p>
                            </div>

                            <div className="col-lg-6 col-md-6">
                                <ul className="payment-card">
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/visa.png")} alt="visa" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/mastercard.png")} alt="mastercard" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/americanexpress.png")} alt="americanexpress" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/dinnersclub.png")} alt="dinnersclub" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/discover.png")} alt="discover" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/paypal.png")} alt="paypal" />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a target="_blank">
                                                <img src={require("../../images/payment/jcb.png")} alt="jcb" />
                                            </a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
