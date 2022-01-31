import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../hooks/useAuth';


const MyBookings = () => {
    const [products, setProducts] = React.useState([]);
    const { user } = useAuth();

    React.useEffect(() => {
        const url = `https://pure-refuge-11056.herokuapp.com/orders?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow sx={{ backgroundColor: 'gray', color: 'white' }}>
                        <TableCell sx={{ color: 'white' }} align="center">Image</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">Date</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">Title</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">Category</TableCell>
                        <TableCell sx={{ color: 'white' }} align="center">Permanent</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map(product => (
                        <TableRow
                            key={product._id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="center"><img style={{ width: '80px', borderRadius: '10px', border: '2px solid grey' }} src={product.productImg} alt="product img" /></TableCell>
                            <TableCell align="center">{product.date}</TableCell>
                            <TableCell align="center">{product.productName}</TableCell>
                            <TableCell align="center">{product.productCategory}</TableCell>
                            <TableCell align="center"><button style={{ border: '2px solid gray', color: 'Green', borderRadius: '5px', padding: '3px 10px', fontWeight: '600' }}>Pay Bill</button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default MyBookings;