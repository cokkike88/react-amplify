import React, { Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Dashboard from './Dashboard';
import Menu from '../components/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'    
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    width: '100%',
    padding: theme.spacing(3),
    paddingLeft: theme.spacing(15)
  },  
}));


function App() {
  const classes = useStyles();
  return (    
    <Router>      
      <Switch>        
        <Fragment>
          <div className={classes.root}>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <Menu />
              <Route exact path='/' component={Dashboard} />   
            </main>
          </div>
        </Fragment>
      </Switch>      
    </Router>
    
  );
}

export default App;
