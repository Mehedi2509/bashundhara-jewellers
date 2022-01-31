import React from 'react';
import { useHistory } from 'react-router-dom';
import './Product.css';

const Product = ({ product }) => {
    const { _id, name, img, description, price, category, material } = product;
    const history = useHistory();

    const handleBookNow = e => {
        e.preventDefault();
        history.push(`/booking/${_id}`);
    }

    return (
        <div className="text-white product">
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p style={{ textAlign: 'justify' }}>{description}</p>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                    <p>Category: {category}</p>
                    <p>Material: {material}</p>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                    <h2>$ {price}</h2>
                    <button onClick={handleBookNow} className="cart-btn">Book Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;