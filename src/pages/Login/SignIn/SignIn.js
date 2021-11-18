import React from 'react';
import useAuth from '../../../hooks/useAuth';

const SignIn = () => {
    const { signInWithGoogle } = useAuth();
    return (
        <div>
            <button onClick={signInWithGoogle}>Sign in</button>
        </div>
    );
};

export default SignIn;