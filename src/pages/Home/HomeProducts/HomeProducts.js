import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

import './HomeProducts.css';

const HomeProducts = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <div>
            <h1 className="text-white text-center mt-5">OUR PRODUCTS</h1>

            <div className="home-products">
                {products?.slice(0, 6)?.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default HomeProducts;