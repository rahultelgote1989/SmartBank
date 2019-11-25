import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({

	root: {
		flexGrow: 1,
	},
  	button: {
    	margin: theme.spacing(1),
  	},
  	input: {
    	display: 'none',
  	},
  	menuButton: {
  		marginRight: theme.spacing(2),
  	},
  	textField: {
  		marginLeft: theme.spacing(1),
  		marginRight: theme.spacing(1),
  		width: 200,
  	},
  	loginScreen: {
  		marginLeft: theme.spacing(70),
  		marginRight: theme.spacing(60),
  		marginTop: theme.spacing(10),
  	},
	})
);


export default function BankScreen() {
  return (
    <div>
          <div>
              <Button variant="contained" color="primary">
                  Log In
              </Button>
          </div>
    </div>
  )

}