import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Button from '@material-ui/core/Button';
import TextField from 'material-ui/TextField';
import { ThemeProvider } from 'material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Web3 from 'web3';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Select from 'react-select';

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const useStyles = makeStyles(theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const scaryAnimals = [
  { label: "Alligators", value: "Alligators" },
  { label: "Crocodiles", value: "Alligators" },
  { label: "Sharks", value: 3 },
  { label: "Small crocodiles", value: 4 },
  { label: "Smallest crocodiles", value: 5 },
  { label: "Snakes", value: 6 },
];

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            account_num: ',',
            current_bal_wei: 0,
            current_bal_eth: 0,
            accounts:""
        }
	}

    componentWillMount() {
        this.loadBlockchainData()
    }

    async loadBlockchainData() {
        const accounts = await web3.eth.getAccounts();
        this.state.accounts = accounts;
        console.log("all accounts: ", accounts);
    }

    async getCurrentBalance(event){
        var current_balance = await web3.eth.getBalance(this.state.account_num);
        console.log("current balance: ", current_balance);
        this.setState({current_bal_wei: current_balance});
        this.setState({current_bal_eth: web3.utils.fromWei(current_balance, 'ether')});

    }

    render() {
        this.state.account_num = this.props.username;
        return (
            <div style={style}>
            <MuiThemeProvider>
                <div>
                    <Typography align="left" color="primary" variant="h5">User Details</Typography>
                    <Typography align="left" color="primary">Account Number: {this.state.account_num}</Typography>
                    <Divider />
                </div>
                <div>
                    <Typography align="left" color="primary" variant="h5">Core Operations</Typography>
                    <br/>
                    <Button
                        variant="contained"
                        color="primary"
                        style={{marginLeft: -10}}
                        onClick={(event) => this.getCurrentBalance(event)}>
                        Get Current Balance
                    </Button>
                     Your Current available balance is: { this.state.current_bal_wei } Wei ({this.state.current_bal_eth} Ether)
                     <br />
                     <br /> <hr />
                    <Divider />
                </div>
                <div>
                    Transfer to:
                    <Select options={scaryAnimals} className="width50" />
                </div>
            </MuiThemeProvider>
            </div>
        );
    }
}

export default UploadScreen;

const style = {
 marginLeft: "10px",
};
