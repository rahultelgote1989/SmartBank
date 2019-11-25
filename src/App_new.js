import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import LoginScreen from './Login';

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

export default function BasicExample() {
  const classes = useStyles();
  return (

    <Router>
      <div className={classes.root}>
  			<AppBar position="static">
  				<Toolbar variant="dense">
  					<IconButton edge="start" className={classes.menuItem} color="inherit" aria-label="menu">
  						<MenuIcon />
  					</IconButton>
          </Toolbar>
    		</AppBar>
        <Switch>
          <div>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/dashboard">
              <LoginScreen />
            </Route>
            <Route path="/user#">
              <LoginScreen />
            </Route>
          </div>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.
function LoginScreen() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Login() {
  const classes = useStyles();
  return (
    <div>
      <Button variant="contained" color="primary" className={classes.button}>
        Log In
      </Button>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
