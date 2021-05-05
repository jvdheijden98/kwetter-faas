import { Button, Card, Container, Paper, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { registerUser } from '../APIs/User/Registration';

const style = (theme) => ({
    textfield: {
        marginTop: "30px",
        backgroundColor: "white",
    },
    card: {
      padding: "40px",
      backgroundColor: "#e6e6e6",
    }
  });

  class RegisterPage extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
          username: '',
          email: '',
          password: '',
          status: 'Empty status' 
        }
      }

    handleUsernameChange = event => {        
        this.setState({            
            username : event.target.value
        })
    }

    handleEmailChange = event => {
        this.setState({
            email : event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({            
            password : event.target.value
        })
    }

    handleRegister = (event) => {
        event.preventDefault();
        
        this.setState({
            status: "Creating..."
        })

        registerUser(this.state.username, this.state.email, this.state.password)
            .then((data) => {
                console.log(data);                
                if(data.status === "Succes") {
                    this.setState({
                        status : data.message
                    })
                } else {
                    this.setState({
                        status : data.message
                    })
                }
                //console.log(this.state.status);
            })
    }

    render(){
        const { classes } = this.props;
        const { status } = this.state;
        return (
            <Container maxWidth="sm">
                <Typography style={{ marginTop: '30px', marginBottom: '30px' }} variant="h4">Registreren</Typography>
                <Paper elevation={3}>
                    <Card className={classes.card}>
                        <TextField className={classes.textfield} fullWidth variant="outlined" label="Gebruikersnaam" onChange={this.handleUsernameChange} />  
                        <TextField className={classes.textfield} fullWidth variant="outlined" label="E-mail" onChange={this.handleEmailChange} />   
                        <TextField className={classes.textfield} fullWidth variant="outlined" label="Wachtwoord" type="password" onChange={this.handlePasswordChange} />
                        <Button style={{ marginTop: '30px' }} variant="contained" color="secondary" fullWidth onClick={this.handleRegister}>Registreer</Button>
                        <Typography style={{ marginTop: '30px' }}>{status}</Typography>
                    </Card>
                </Paper>  
            </Container>            
        )
    }
}

export default withStyles(style)(RegisterPage);