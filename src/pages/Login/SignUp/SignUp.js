import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Button, Container, Typography, CircularProgress, Alert } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const SignUp = () => {
    const [loginData, setLoginData] = useState({});
    const { createNewUser, isLoading, user, authError } = useAuth();

    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleSignUpSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.re_password) {
            alert('Password did not match')
            return;
        }
        else {
            const { email, password, name, photoURL } = loginData;
            createNewUser(email, password, name, photoURL, history);
        }
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                <Grid item xs={12} md={8} lg={6} sx={{ marginY: '50px', backgroundImage: 'linear-gradient(to left,rgb(205, 243, 234),rgb(241, 217, 217))', paddingY: '50px', borderRadius: '70px 40px' }}>
                    <Typography sx={{ color: 'gray', fontWeight: '700', }} variant="h5" gutterBottom>Sign Up</Typography>

                    {!isLoading && <form style={{ marginTop: '10px' }} onSubmit={handleSignUpSubmit}>
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Name" variant="standard" name="name" type="text" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Email" variant="standard" name="email" type="email" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Password" variant="standard" name="password" type="password" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Re-Type Password" variant="standard" name="re_password" type="password" />
                        <TextField sx={{ width: '75%', m: 1 }} onBlur={handleOnBlur} id="standard-basic" label="Photo link" variant="standard" name="photoURL" type="text" />
                        <Button sx={{ width: '75%', m: 1, backgroundImage: 'linear-gradient(to left,rgb(102, 207, 128),rgb(122, 189, 180))', color: 'white', mt: 3 }} type="submit" >Sign Up</Button>

                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/signIn">
                            <Button variant="text">Already Registered? Please SignIn</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Registration successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
            </Container>
        </div>
    );
};

export default SignUp;