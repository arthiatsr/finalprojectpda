import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom";
import API from "../../utils/API";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import CopyrightIcon from '@material-ui/icons/Copyright';

import Avatar from '@material-ui/core/Avatar';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    padding: 60,
    margin: 30,
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundPosition: 'right',

  },
  signinbutton: {
    background: 'linear-gradient(45deg, green, 95%, #FF8E53 5%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  signupbutton: {
    background: 'linear-gradient(45deg, red, 95%, #FF8E53 5%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function Copyright() {
  return (
    <div align="center">
      {'Copyright © '}      
      {new Date().getFullYear()}
    </div>
  );
}

class Auth extends Component {
  state = {
    Authen: [],
    email: "",
    password: "",
    valid: false
  };

//   componentDidMount() {
//     this.loadBooks();
//   }


signInChange = event => {
const { name, value } = event.target;
this.setState({
    [name]: value
});
};
  
signUpSubmit = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state.email,this.state.password)
      API.saveAuth({
        email: this.state.email,
        password: this.state.password
      })
        .then(res => this.setState({ Authen: res.data, email: "", password: "" }),
        this.props.history.push("/loggedin")
        )
        .catch(err => console.log(err));
    }
};

signInSubmit = event => {
    event.preventDefault();
    if ((this.state.email) && (this.state.password)) {
        console.log(this.state.email, this.state.password)
        API.getAuth(this.state.email,this.state.password)
            .then(res => this.setState({ Authen: res.data, email: "", password: "" }),console.log("Authen",this.state.Authen))
            //     res =>
            // this.state.history.push("/login")
            
            .catch(err => console.log(err));
        }           
    
};

  render() {
    const { classes } = this.props;
    return (      
        <div className={classes.root}>
            <Grid  className={classes.image} container direction="column" spacing={3}>
                <Grid item xs={8} sm={4}>
                  <Paper className={classes.paper}>
                    <h3>Sign In</h3>
                    <form  className={classes.root} noValidate autoComplete="off">
                      <TextField id="emainsignup" required fullWidth label="Enter Email" type="email" 
                      value={this.state.email}
                      onChange={this.signInChange}
                      name="email" 
                        />
                      <TextField id="passwordsignup" required fullWidth label="Enter Password" type="password" 
                      onChange={this.signInChange}
                      name="password" 
                      value={this.state.password} />
                      <Button onClick={this.signUpSubmit} className={classes.signupbutton} fullWidth variant="contained" color="primary" >Sign Up</Button> 
                      <Button onClick={this.signInSubmit}  className={classes.signinbutton} fullWidth variant="contained" color="primary" >Sign In</Button> 
                    </form>
                  </Paper>
                </Grid>
            </Grid>  
            <Grid>
              <Copyright />
            </Grid>                      
        </div>  
    
    );
  }
}

export default withStyles(useStyles)(Auth);