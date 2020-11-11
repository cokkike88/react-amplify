import React, {useState, useEffect, Fragment} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Dashboard/Card';
import { getSellers } from '../core/dashboard.core';

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


    let [data, updateData] = useState([]);

    useEffect(() => {
        const getData = async() => {
            try{
                let result = await getSellers()
                console.log(result.data);
                updateData(result.data.result);        
            }
            catch(error){
                console.log(error);
            }
        }

        getData();
        
    }, [])


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

