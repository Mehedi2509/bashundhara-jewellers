import React, { useState } from 'react';

const MakeAdmin = () => {
    const [adminEmail, setAdminEmail] = useState('');

    const handleOnBlur = e => {
        setAdminEmail(e.target.value);
    };

    const handleMakeAdmin = e => {
        e.preventDefault();
        console.log(adminEmail);
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px' }}>
            <div>
                <div style={{ marginBottom: '40px' }}>
                    <h4 style={{ color: 'gray', textAlign: 'center', fontWeight: '700' }}>Make an Admin</h4>
                    <p style={{ textAlign: 'center', width: '30%', margin: '0 auto' }}><hr style={{ color: 'gray', padding: '3px', borderRadius: '5px', }} /></p>
                </div>

                <div style={{ backgroundColor: 'gray', padding: '50px', textAlign: 'center', borderRadius: '10px' }}>
                    <form onSubmit={handleMakeAdmin}>
                        <input onBlur={handleOnBlur} name="email" style={{ width: '100%', padding: '5px 10px', marginBottom: '20px', borderRadius: '5px', border: '0' }} type="email" placeholder="Provide email for new admin" />

                        <input style={{ width: '50%', padding: '6px', borderRadius: '5px', border: '0', fontWeight: '500', color: 'gray' }} type="submit" value="Make Admin" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;