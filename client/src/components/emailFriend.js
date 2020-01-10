import React, { useState} from "react";
import emailjs from 'emailjs-com';
import { fade, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import {useInput} from './useInput';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


////

const useStyles = makeStyles(theme => ({
  root: {
     flexGrow: 1,
     height: '100vh',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: 30,
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Friend(props) {

  const { value:user_name, bind:binduser_name, reset:resetuser_name } = useInput('');
  const { value:user_email, bind:binduser_email, reset:resetuser_email } = useInput('');
  const { value:user_message, bind:binduser_message, reset:resetuser_message } = useInput('');

  const classes = useStyles();

  function sendEmail(e) {
    
    e.preventDefault();

    emailjs.sendForm('default_service', 'reach_friend', e.target, 'user_6E17hEsOwkfjk6uHyijD7')
    .then((res) => {console.log(res.text);
      resetuser_name();
      resetuser_email();
      resetuser_message(); 
    }, (error) => {console.log(error.text);
    });
  }
  function logoutSubmit (){

    props.history.push("/");
                      
  }
  
  return (    
    <div>
      <Button 
        onClick={logoutSubmit} 
        className={classes.button} 
        variant="contained" 
        color="secondary" >
        Log out
      </Button> 
      <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Reach a Friend
            </Typography>
            <form className={classes.form} onSubmit={sendEmail}>
              <TextField
                  type="text" {...binduser_name}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="user_name"
                  autoComplete="name"
                  autoFocus
                />
                <TextField
                  type="email" {...binduser_email}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="user_email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  type="text" {...binduser_message}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="message"
                  label="Message"
                  name="message"
                  autoComplete="message"
                  autoFocus
                />            
                <Button
                  type="submit"
                  value="Send"
                  
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Send Email
                </Button>
              </form>
            </div>
            </Grid>            
      </Grid>

                {/* <form className="contact-form" onSubmit={sendEmail}>
                    <label>name</label>  
                    <input type="text" {...binduser_name} name="user_name" /> 
                    <br />
                    <label>Email</label>            
                    <input type="email" {...binduser_email} name="user_email" />
                    <br />
                    <label>Message</label>            
                    <textarea {...binduser_message} name="message" /> 
                    <input type="submit"  value="Send"  />           
                </form> */}
    </div>
  );
 }

 