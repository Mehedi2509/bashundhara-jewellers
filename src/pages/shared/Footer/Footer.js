import React from 'react';
import './Footer.css';
import logo from '../../../images/logo.jpg';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="row">
            <div className="col-lg-4">
                <div>
                    <img src={logo} alt="" />
                    <h2>Bashundhara Jewellers</h2>
                </div>
                <p>Contemporary or modern sculpture, bronze, steel or wood sculpture, all types of sculptures can be foundContemporary or modern sculpture, bronze, steel or wood sculpture,</p>
            </div>
            <div className="col-lg-2">
                <h3>Products</h3>
                <Link>Price Drop</Link>
                <Link>New Products</Link>
                <Link>Best Sales</Link>
                <Link>Most Popular</Link>
            </div>
            <div className="col-lg-2">
                <h3>Our Company</h3>
                <Link to=""></Link>
            </div>
            <div className="col-lg-4">
                <h3>Contact Us</h3>
                <h4>Location</h4>
                <p>Satmatha,Bogura Sadar,Bogura,5800</p>
                <h4>Phone</h4>
                <p>01645374554 / 01772516902</p>
                <h4>Email</h4>
                <p>bashundharaJewellers@gmail.com</p>
            </div>
            <small>Copyright © 2021 bashundhara_jewellers.com</small>
        </div>
    );
};

export default Footer;