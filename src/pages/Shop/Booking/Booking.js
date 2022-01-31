import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Box } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const Booking = () => {
    const { user } = useAuth();
    const [product, setProduct] = useState({});
    const [orderData, setOrderData] = useState({});
    const id = useParams().id;
    const url = `https://pure-refuge-11056.herokuapp.com/products/${id}`;
    const history = useHistory();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [url]);

    const { name, img, description, category, material, price } = product;

    // pre-order
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...orderData };
        newProductData[field] = value;
        setOrderData(newProductData);
    };

    const fullDate = new Date();
    const date = fullDate.toLocaleDateString();

    const handlePlaceOrder = e => {
        e.preventDefault();
        console.log(orderData);
        const order = {
            date: date,
            name: user?.displayName,
            email: user?.email,
            ...orderData,
            productName: name,
            productCategory: category,
            productPrice: price,
            productImg: img,
            productMaterial: material,
        }

        fetch('https://pure-refuge-11056.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Post successfully');
                    history.push('/dashboard');
                }
            })
    };

    return (
        <div style={{ width: '90%', margin: '50px auto' }}>
            <Grid container spacing={12}>
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: 'whitesmoke', height: '700px', borderRadius: '10px', padding: '20px', }}>

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
                            </div>
                        </div>

                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box sx={{ backgroundColor: 'whitesmoke', height: '700px', borderRadius: '10px', padding: '20px', }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
                            <div>
                                <div style={{ marginBottom: '40px' }}>
                                    <h4 style={{ color: 'gray', textAlign: 'center', fontWeight: '700' }}>Pre-Order</h4>
                                    <p style={{ textAlign: 'center', width: '15%', margin: '0 auto' }}><hr style={{ color: 'gray', padding: '3px', borderRadius: '5px', }} /></p>
                                </div>

                                <form onSubmit={handlePlaceOrder} style={{ textAlign: 'center' }}>
                                    <input style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" defaultValue={user?.displayName} disabled />
                                    <input style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" defaultValue={user?.email} disabled />
                                    <input onBlur={handleOnBlur} name="number" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" placeholder="Phone Number" />
                                    <input onBlur={handleOnBlur} name="address" style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" placeholder="Delivery Address" />
                                    <input style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" defaultValue={name} disabled />
                                    <input style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px' }} type="text" defaultValue={`$ ${price}`} disabled />
                                    <input style={{ width: '50%', padding: '6px', borderRadius: '5px', fontWeight: '500', color: 'black', marginTop: '20px', hover: { color: 'red' } }} type="submit" value="Place Order" />
                                </form>
                            </div>
                        </div>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default Booking;