import React, { useState } from 'react';

const SendReview = () => {
    const [review, setReview] = useState({});

    const handleOnBlur = e => {

    };

    const handleSubmitReview = e => {
        e.preventDefault();
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
            <div>
                <div style={{ marginBottom: '40px' }}>
                    <h4 style={{ color: 'gray', textAlign: 'center', fontWeight: '700' }}>SEND REVIEW</h4>
                    <p style={{ textAlign: 'center', width: '15%', margin: '0 auto' }}><hr style={{ color: 'gray', padding: '3px', borderRadius: '5px', }} /></p>
                </div>

                <div style={{ backgroundColor: 'gray', padding: '50px', textAlign: 'center', borderRadius: '10px' }}>
                    <form onSubmit={handleSubmitReview}>
                        <input onBlur={handleOnBlur} name="name" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Your Name" />
                        <input onBlur={handleOnBlur} name="imgLink" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Image Link" />
                        <input onBlur={handleOnBlur} name="rating" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="text" placeholder="Rating out of 5" />
                        <textarea onBlur={handleOnBlur} name="description" style={{ width: '100%', height: '150px', padding: '5px 10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} placeholder="Write here......" />
                        <input style={{ width: '100%', padding: '6px', borderRadius: '5px', border: '0', fontWeight: '500', color: 'gray' }} type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SendReview;