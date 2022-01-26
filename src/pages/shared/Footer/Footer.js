import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="row">
                <div className="col-12 col-lg-5">
                    <div className="footer-logo">
                        <img src={logo} alt="" />
                        <h2>Bashundhara Jewellers</h2>
                    </div>
                    <p className="footer-article">Contemporary or modern sculpture, bronze, steel or wood sculpture, all types of sculptures can be found Contemporary or modern sculpture, bronze, steel or wood sculpture,</p>
                </div>
                <div className="col-12 col-lg-2 mt-3 footer-items">
                    <h4>Products</h4>
                    <li><Link>Price Drop</Link></li>
                    <li><Link>New Products</Link></li>
                    <li><Link>Best Sales</Link></li>
                    <li><Link>Most Popular</Link></li>
                </div>
                <div className="col-12 col-lg-2 mt-3 footer-items">
                    <h4>Our Company</h4>
                    <li><Link to="">Delivery</Link></li>
                    <li><Link to="">About Us</Link></li>
                    <li><Link to="">Secure Payment</Link></li>
                    <li><Link to="">Sitemap</Link></li>
                    <li><Link to="">Stores</Link></li>
                </div>
                <div className="col-12 col-lg-3 mt-3 footer-contact">
                    <h4>Contact Us</h4>
                    <div>
                        <h5>Location:</h5>
                        <p>Satmatha,Bogura Sadar,Bogura,5800</p>
                        <h5>Phone:</h5>
                        <p>01645374554 / 01772516902</p>
                        <h5>Email: </h5>
                        <p>bashundharaJewellers@gmail.com</p>
                    </div>
                </div>
            </div>
            <p style={{ textAlign: 'center', paddingTop: '30px' }}><small>Copyright © 2021 bashundhara_jewellers.com</small></p>
        </div>
    );
};

export default Footer;