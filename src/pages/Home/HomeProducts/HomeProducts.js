import React from 'react';
import useProducts from '../../../hooks/useProducts';
import Product from '../Product/Product';

import './HomeProducts.css';

const HomeProducts = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <div>
            <div style={{ marginBottom: '40px', marginTop: '80px' }}>
                <h2 style={{ color: 'whiteSmoke', textAlign: 'center', fontWeight: '700' }}>OUR PRODUCTS</h2>
                <p style={{ textAlign: 'center', width: '15%', margin: '0 auto' }}><hr style={{ color: 'whiteSmoke', padding: '3px', borderRadius: '5px', }} /></p>
            </div>

            <div className="home-products">
                {products?.slice(0, 6)?.map(product => <Product key={product._id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default HomeProducts;