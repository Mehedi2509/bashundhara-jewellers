import React from 'react';
import useProducts from '../../../hooks/useProducts';

const HomeProducts = () => {
    const { products } = useProducts();
    console.log(products)
    return (
        <div>

        </div>
    );
};

export default HomeProducts;