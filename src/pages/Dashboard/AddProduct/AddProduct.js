import React, { useState } from 'react';

const AddProduct = () => {
    const [productData, setProductData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...productData };
        newProductData[field] = value;
        setProductData(newProductData);
    };

    const handlePostProduct = e => {
        e.preventDefault();

        fetch('http://localhost:4000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Post successfully');
                }
            })
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
            <div>
                <div style={{ marginBottom: '40px' }}>
                    <h4 style={{ color: 'gray', textAlign: 'center', fontWeight: '700' }}>ADD PRODUCT</h4>
                    <p style={{ textAlign: 'center', width: '15%', margin: '0 auto' }}><hr style={{ color: 'gray', padding: '3px', borderRadius: '5px', }} /></p>
                </div>

                <div style={{ backgroundColor: 'gray', padding: '50px', textAlign: 'center', borderRadius: '10px' }}>
                    <form onSubmit={handlePostProduct}>
                        <input onBlur={handleOnBlur} name="name" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Product Name" />
                        <input onBlur={handleOnBlur} name="category" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Product Category" />
                        <input onBlur={handleOnBlur} name="price" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Product Price" />
                        <input onBlur={handleOnBlur} name="material" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Product Material" />
                        <input onBlur={handleOnBlur} name="img" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Product Photo Link" />
                        <textarea onBlur={handleOnBlur} name="description" style={{ width: '100%', height: '150px', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} placeholder="Write product description......" />
                        <input style={{ width: '50%', padding: '6px', borderRadius: '5px', border: '0', fontWeight: '500', color: 'gray' }} type="submit" value="Post" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;