import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyBookings from '../MyBookings/MyBookings';
import SendReview from '../SendReview/SendReview';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;
const activeStyle = { border: '2px solid whitesmoke', borderRadius: '20px', padding: '10px 10px' };

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { user } = useAuth();

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div style={{ backgroundImage: 'linear-gradient(rgb(119, 122, 111),rgb(189, 147, 147))', height: '100%' }}>
            <Toolbar />
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                <img src={user?.photoURL} style={{ borderRadius: '50%', marginBottom: '20px' }} alt="User profile photo" />
                <h5>{user?.displayName}</h5>
                <p>{user?.email}</p>
            </div>
            <div style={{ margin: '20px', textAlign: 'center' }}>
                <NavLink style={{ textDecoration: 'none' }} to={`${url}`}><Button style={{ color: 'White', margin: '6px', fontWeight: '700', backgroundColor: 'tomato', padding: '8px 40px', borderRadius: '20px' }}>My Bookings</Button></NavLink>
                <br />
                <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none' }} to={`${url}/sendYourReview`}><Button style={{ color: 'rgb(224, 224, 224)', margin: '5px', fontWeight: '700' }}>Send Review</Button></NavLink>
                <br />
                <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button style={{ color: 'rgb(224, 224, 224)', margin: '5px', fontWeight: '700' }}>Make Admin</Button></NavLink>
                <br />
                <NavLink activeStyle={activeStyle} style={{ textDecoration: 'none' }} to={`${url}/addProduct`}><Button style={{ color: 'rgb(224, 224, 224)', margin: '5px', fontWeight: '700' }}>Add Product</Button></NavLink>
            </div>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                    backgroundImage: 'linear-gradient(to right,rgb(119, 122, 111),rgb(189, 147, 147))',

                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >

                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, backgroundColor: 'white', height: '100%' }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={`${path}`}>
                        <MyBookings></MyBookings>
                    </Route>
                    <Route path={`${path}/sendYourReview`}>
                        <SendReview></SendReview>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
};

export default Dashboard;