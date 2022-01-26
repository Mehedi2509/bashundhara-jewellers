import React from 'react';
import { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography, CircularProgress, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import { NavLink, useLocation, useHistory } from 'react-router-dom';

const SignIn = () => {
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const [loginData, setLoginData] = useState({});

    const history = useHistory();
    const location = useLocation();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    }

    const handleSignInSubmit = e => {
        e.preventDefault();
        const { email, password } = loginData;
        loginUser(email, password, location, history);
    }
    return (
        <div style={{ textAlign: 'center', }}>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={8} lg={6} sx={{ marginY: '50px', backgroundImage: 'linear-gradient(to left,rgb(205, 243, 234),rgb(241, 217, 217))', paddingY: '50px', borderRadius: '70px 40px' }}>
                    <Typography sx={{ color: 'gray', fontWeight: '700', }} variant="h5" gutterBottom>Sign In</Typography>
                    {!isLoading && <form style={{ marginTop: '10px' }} onSubmit={handleSignInSubmit}>
                        <TextField sx={{ width: '75%', m: 1, }} onChange={handleOnChange} id="standard-basic" label="Email" variant="standard" name="email" type="email" />
                        <TextField sx={{ width: '75%', m: 1 }} onChange={handleOnChange} id="standard-basic" label="Password" variant="standard" name="password" type="password" />
                        <Button sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(108, 124, 112),rgb(131, 153, 149))', color: 'white', mt: 3 }} type="submit" >Sign In</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signUp">
                            <Button variant="text">New User? Please SignUp</Button>
                        </NavLink>
                        <p>------------ or -------------</p>
                        <Button onClick={() => signInWithGoogle(location, history)} sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(108, 124, 112),rgb(131, 153, 149))', color: 'white', }}>Google Sign In</Button>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User login successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Container>
        </div>
    );
};

export default SignIn;