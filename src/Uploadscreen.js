import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';

import Web3 from 'web3';

const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));
const styles = theme => ({
    root: {
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    op_header: {
        marginLeft: "100px",
        color: "blue",
        align:"left"
    },
    head_button: {
        margin: theme.spacing(2)
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    }
});

const user_list = [
    {"account":"" , "first_name": "FirstName1", "last_name":"LastName1", "email_id": "email_id1@gmail.com"},
    {"account":"" , "first_name": "FirstName2", "last_name":"LastName2", "email_id": "email_id2@gmail.com"},
    {"account":"" , "first_name": "FirstName3", "last_name":"LastName3", "email_id": "email_id3@gmail.com"},
    {"account":"" , "first_name": "FirstName4", "last_name":"LastName4", "email_id": "email_id4@gmail.com"},
    {"account":"" , "first_name": "FirstName5", "last_name":"LastName5", "email_id": "email_id5@gmail.com"},
    {"account":"" , "first_name": "FirstName6", "last_name":"LastName6", "email_id": "email_id6@gmail.com"},
    {"account":"" , "first_name": "FirstName7", "last_name":"LastName7", "email_id": "email_id7@gmail.com"},
    {"account":"" , "first_name": "FirstName8", "last_name":"LastName8", "email_id": "email_id8@gmail.com"},
    {"account":"" , "first_name": "FirstName9", "last_name":"LastName9", "email_id": "email_id9@gmail.com"},
    {"account":"" , "first_name": "FirstName10", "last_name":"LastName10", "email_id": "email_id10@gmail.com"},
]

const beneficieries = [];

class UploadScreen extends Component {
    constructor(props){
        super(props);
        this.state={
            username:'',
            password:'',
            account_num: ',',
            current_bal_wei: 0,
            current_bal_eth: 0,
            accounts:"",
            user_first_name: "",
            user_last_name: "",
            user_email_id: "",
            beneficiery_account: "",
            transfer_amount: ""
        }
    }

    componentWillMount() {
        this.loadBlockchainData()
    }

    handleTransfer(event) {
        console.log("clicked on transfer...");
        console.log(this.state.beneficiery_account);
        console.log(this.state.transfer_amount);
        console.log("transfer completed!");
    }

    selectBeneficiery(event) {
        console.log("selected beneficiery is: ", event.target.value);
        this.setState({beneficiery_account: event.target.value});
    }

    updateUserList(accounts) {
        for (var i=0; i < accounts.length; i++){
            user_list[i]["account"] = accounts[i];
            user_list[i]["user_full_name"] = user_list[i]["first_name"] + " " + user_list[i]["last_name"];
            beneficieries.push(
                <MenuItem value={accounts[i]}>
                    {user_list[i]["user_full_name"]}
                </MenuItem>
            );
            console.log(user_list[i]);
            if (accounts[i] == this.state.account_num){
                this.setState({
                    first_name: user_list[i]["first_name"],
                    last_name: user_list[i]["last_name"],
                    email_id: user_list[i]["email_id"]
                });
            }
            console.log("first name====> ", this.state.first_name);
        }
        console.log("beneficieries list =====> ", beneficieries);
    }

    async loadBlockchainData() {
        const accounts = await web3.eth.getAccounts();
        this.state.accounts = accounts;
        console.log("all accounts: ", accounts);
        this.updateUserList(accounts);
    }

    async getCurrentBalance(event){
        var current_balance = await web3.eth.getBalance(this.state.account_num);
        console.log("current balance: ", current_balance);
        this.setState({current_bal_wei: current_balance});
        this.setState({current_bal_eth: web3.utils.fromWei(current_balance, 'ether')});

    }

    render() {
        const { classes } = this.props;
        this.state.account_num = this.props.username;
        console.log("lasat name #####>>>>> ", this.state.last_name);
        return (
            <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography variant="h4" className={classes.op_header}>
                            Bank Core Operations
                        </Typography>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Button variant="outlined" color="primary">
                                Get Current Balance
                            </Button>
                            <br/><br/>
                            <Typography variant="h6" style={{align:'left'}}>
                                Your Current available balance is: { this.state.current_bal_wei } Wei ({this.state.current_bal_eth} Ether)
                            </Typography>
                            <br/><br/>
                            <Button variant="contained" color="primary">
                                Click to see Current Balance
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Button variant="outlined" color="primary">
                                Customer Profile
                            </Button>
                            <br/><br/>
                            <Typography variant="h6" style={{align:'left'}}>
                                Account Number: { this.state.account_num }
                            </Typography>
                            <Typography variant="h6" style={{align:'left'}}>
                                User First Name: { this.state.first_name }
                            </Typography>
                            <Typography variant="h6" style={{align:'left'}}>
                                User Last Name: { this.state.last_name }
                            </Typography>
                            <Typography variant="h6" style={{align:'left'}}>
                                User Email ID: { this.state.email_id }
                            </Typography>
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Button variant="outlined" color="primary">
                                Payment - Transfer
                            </Button>
                            <br/><br/>
                            <Typography variant="h6" style={{align:'left'}}>
                                Select the Benefeciary:
                            </Typography>
                            <br/>
                            <FormControl className={classes.formControl}>
                                <InputLabel>Benefeciary: </InputLabel>
                                <Select onChange={(event) => this.selectBeneficiery(event)}>
                                    { beneficieries }
                                </Select>
                            </FormControl>
                            <br/><br/>
                            <TextField
                                id="outlined-basic"
                                label="Amount in Wei"
                                variant="outlined"
                                onChange = {(event) => this.setState({transfer_amount:event.target.value})}
                            />
                            <br/><br/>
                            <Button variant="contained" color="primary" onClick={(event) => this.handleTransfer(event)}>
                                Transfer
                            </Button>
                        </Paper>
                    </Grid>

                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                    <Grid item xs={1}>
                        <Paper className={classes.paper}>xs=3</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(UploadScreen);;
