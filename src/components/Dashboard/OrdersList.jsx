import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';
import OrderTable from './OrderTable';
// import { getOrdersBySeller, savePay } from '../../core/dashboard.core';

const useStyles = makeStyles((theme) => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));
  
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const OrderList = ({open, handleClose}) => {    
    const classes = useStyles();        


    return ( 
        <div>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                  <Toolbar>
                      <IconButton edge="start" color="inherit" onClick={() => handleClose()} aria-label="close">
                      <CloseIcon />
                      </IconButton>
                      <Typography variant="h6" className={classes.title}>
                        Orders
                      </Typography>
                      <Button autoFocus color="inherit">
                        Pay
                      </Button>
                  </Toolbar>
                </AppBar>
                {/* <OrderTable orders={orders} total={total} /> */}
            </Dialog>
        </div>
     );
}

// OrderList.protoTypes = {
//     open: PropTypes.bool.isRequired,
//     handleClose: PropTypes.func.isRequired,
//     sellerId: PropTypes.number.isRequired,
//     storeName: PropTypes.string.isRequired
// }

export default OrderList;