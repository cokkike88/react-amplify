import React, { useState, Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { Divider, makeStyles } from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import OrderList from './OrdersList';

const useStyles = makeStyles(theme => ({
  root: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    margin: theme.spacing(1)
  },
  header: {
    textAlign: 'center',
    spacing: 10,
  },
  list: {
    padding: '20px',
  },
  button: {
    margin: theme.spacing(1),
  },
  action: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const CardComponent = ({seller}) => {

  let [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  return (
    <Fragment>
      <OrderList open={open} handleClose={handleClose} />
      <Card className={classes.root}>
        <CardHeader title="Order" className={classes.header} />
        <Divider variant="middle" />
        <CardContent>
          <Typography variant="h4" align="center">
            $ 100
          </Typography>
          <div className={classes.list}>
            <Typography align="center"></Typography>
            <Typography align="center">Orders count: 1</Typography>
            {/* <IconButton color="primary" aria-label="upload picture" component="span" onClick={handleClickOpen}>
              <OpenInNewIcon />
            </IconButton> */}
          </div>
        </CardContent>
        <Divider variant="middle" />
        <CardActions className={classes.action}>
          <Button variant="contained" color="primary" className={classes.button} onClick={handleClickOpen}>
            Pay
          </Button>
        </CardActions>
      </Card>      
    </Fragment>
  );
};

// CardComponent.propTypes = {
//   seller: PropTypes.object.isRequired
// }

export default CardComponent