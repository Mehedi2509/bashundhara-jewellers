import React from 'react';
import './HomeProduct.css';

const HomeProduct = ({ product }) => {
    const { name, img, description, price, category, material } = product;

    return (
        <div className="text-white product">
            <div>
                <img className="product-img" src={img} alt="" />
            </div>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                    <p>Category: {category}</p>
                    <p>Material: {material}</p>
                </div>
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                    <h2>$ {price}</h2>
                    <button className="cart-btn">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default HomeProduct;