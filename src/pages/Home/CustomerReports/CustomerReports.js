import React, { useState } from 'react';

const CustomerReports = () => {
    const [report, setReport] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReport = { ...report };
        newReport[field] = value;
        setReport(newReport);
    };

    const handleSubmitReport = e => {
        e.preventDefault();

        fetch('https://bashundhara-jewellers-server-mehedi2509.vercel.app/reports', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(report)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('report successfully');

                }
            })
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px', marginTop: '80px' }}>
            <div>
                <div style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: 'whiteSmoke', textAlign: 'center', fontWeight: '700' }}>CUSTOMER REPORTS</h2>
                    <p style={{ textAlign: 'center', width: '50%', margin: '0 auto' }}><hr style={{ color: 'whiteSmoke', padding: '3px', borderRadius: '5px', }} /></p>
                </div>

                <div style={{ backgroundColor: 'white', padding: '50px', textAlign: 'center', borderRadius: '10px' }}>
                    <form onSubmit={handleSubmitReport}>
                        <input onBlur={handleOnBlur} name="name" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px' }} type="text" placeholder="Your Name" />
                        <input onBlur={handleOnBlur} name="email" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px' }} type="email" placeholder="Your Email" />
                        <br />
                        <textarea onBlur={handleOnBlur} name="reportLetter" style={{ width: '100%', height: '150px', padding: '5px 10px', marginBottom: '20px' }} placeholder="Share your report" />
                        <input style={{ width: '100%', padding: '5px' }} type="submit" value="SEND" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerReports;