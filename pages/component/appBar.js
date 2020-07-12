import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  
  
  title: {
    flexGrow: 1,

  },
  
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
      <AppBar color='primary'variant="outlined" position="static">
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
           TODO APP
          </Typography>
        </Toolbar>
      </AppBar>
  );
}
