import React, { useState } from 'react';

const CustomerReports = () => {
    const [report, setReport] = useState({});

    const handleOnBlur = e => {

    };

    const handleSubmitReport = e => {
        e.preventDefault();
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
            <div>
                <div style={{ marginBottom: '50px' }}>
                    <h2 style={{ color: 'whitesmoke', textAlign: 'center', fontWeight: '700' }}>CUSTOMER REPORTS</h2>
                    <p style={{ textAlign: 'center', width: '30%', margin: '0 auto' }}><hr style={{ color: 'whitesmoke', padding: '3px', borderRadius: '5px', }} /></p>
                </div>

                <div style={{ backgroundColor: 'white', padding: '50px', textAlign: 'center', }}>
                    <form onSubmit={handleSubmitReport}>
                        <input onBlur={handleOnBlur} name="customerName" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px' }} type="text" placeholder="Your Name" />
                        <input onBlur={handleOnBlur} name="customerEmail" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px' }} type="email" placeholder="Your Email" />
                        <br />
                        <textarea onBlur={handleOnBlur} name="customerReport" style={{ width: '100%', height: '150px', padding: '5px 10px', marginBottom: '20px' }} placeholder="Share your report" />
                        <input style={{ width: '100%', padding: '5px' }} type="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerReports;