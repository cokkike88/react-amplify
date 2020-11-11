import React, {useState, useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Dashboard/Card';
// import { getSellers } from '../core/dashboard.core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },    
    card: {
        margin: theme.spacing(100),
    }
  }));

const Dashboard = () => {


    useEffect(() => {

        console.log('Esto es una prueba useEffect');

    });


    const classes = useStyles();
    return ( 
        <Fragment>
            <h1>Dashboard</h1>
            <div className={classes.root}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
                   
            </div>
        </Fragment>
     );
}
 
export default Dashboard;

