import React from 'react';
import useProducts from '../../../hooks/useProducts';
import HomeProduct from '../HomeProduct/HomeProduct';
import './HomeProducts.css';

const HomeProducts = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <div>
            <h1 className="text-white text-center mt-5">Our Products</h1>

            <div className="home-products">
                {products?.slice(0, 11)?.map(product => <HomeProduct key={product._id} product={product}></HomeProduct>)}
            </div>
        </div>
    );
};

export default HomeProducts;