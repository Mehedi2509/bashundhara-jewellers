import React from 'react';
import useProducts from '../../hooks/useProducts';
import Product from '../Home/Product/Product';


const Shop = () => {
    const { products } = useProducts();

    return (
        <div>
            <h1 className="text-white text-center my-5">OUR PRODUCTS</h1>

            <div className="home-products">
                {products?.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Shop;