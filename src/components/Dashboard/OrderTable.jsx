import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const OrderTable = ({orders, total}) => {

    const classes = useStyles();
    return ( 
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="spanning table">
                <TableHead>                
                    <TableRow>
                        <TableCell>Order No.</TableCell>
                        <TableCell align="right">Paid Date</TableCell>
                        <TableCell align="right">Currency</TableCell>
                        <TableCell align="right">Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {orders.map((order) => (
                    <TableRow key={order.id}>
                        <TableCell>{order.id}</TableCell>
                        <TableCell align="right">{order.paidAt}</TableCell>
                        <TableCell align="right">{order.pricingSummary.total.currency}</TableCell>                    
                        <TableCell align="right">{order.pricingSummary.total.value}</TableCell>
                    </TableRow>
                ))}
                <TableRow>
                    <TableCell rowSpan={3} />
                    <TableCell colSpan={2}><Typography> Total</Typography></TableCell>
                    <TableCell align="right">{total}</TableCell>
                </TableRow>
                <TableRow>                    
                    <TableCell align="right"></TableCell>
                    <TableCell align="right"></TableCell>                    
                </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
     );
}

OrderTable.protoTypes = {
    orders: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired
}

export default OrderTable;