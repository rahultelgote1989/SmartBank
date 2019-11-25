import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends Component {
    constructor(props){
        super(props);
        this.state={
            first_name:"",
            last_name:"",
            email:"",
            password:""
        }
    }

    handleClick(event) {
        var apiBaseUrl = "http://localhost:4000/api/";
        console.log("clicked Register =======>")
        console.log("values: ", this.state.first_name, this.state.last_name, this.state.email, this.state.password);
        var self = this;
    }

    render() {
        return(
            <div>
                <MuiThemeProvider>
                    <div>
                        <h2>Register</h2>
                        <TextField
                            hintText="Enter your First Name"
                            floatingLabelText="First Name"
                            onChange = {(event, newValue) =>
                            this.setState({first_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Last Name"
                            floatingLabelText="Last Name"
                            onChange = {(event, newValue) =>
                            this.setState({last_name: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Email"
                            type="email"
                            floatingLabelText="Email"
                            onChange = {(event, newValue) =>
                            this.setState({email: newValue})}
                        />
                        <br/>
                        <TextField
                            hintText="Enter your Password"
                            type="password"
                            floatingLabelText="Password"
                            onChange = {(event, newValue) =>
                            this.setState({password: newValue})}
                        />
                        <br/>
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}
export default Register;

const style = {
 margin: 15,
};
