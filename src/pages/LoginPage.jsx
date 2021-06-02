import { Button, Card, Container, Paper, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { login } from '../APIs/User/Login';

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

class LoginPage extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
          username: '',
          password: '',
          status: 'Empty status' 
        }
    }

    handleUsernameChange = event => {        
        this.setState({            
            username : event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({            
            password : event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault();
        
        this.setState({
            status: "Logging in..."
        })

        login(this.state.username, this.state.password)
            .then((data) => {
                // console.log(data);                
                if(data.token) {
                    window.sessionStorage.setItem("token", data.token);
                    this.setState({
                        status : "Success"
                    });
                    this.props.history.push("/");
                } else {
                    this.setState({
                        status : "Something went wrong..."
                    });
                }
                //console.log(this.state.status);
            });
        this.setState({});
    };

    render(){
        const { classes } = this.props;
        const { status } = this.state;
        return (
            <Container maxWidth="sm">
                <Typography style={{ marginTop: '30px', marginBottom: '30px' }} variant="h4">Inloggen</Typography>
                <Paper elevation={3}>
                    <Card className={classes.card}>                                    
                            <TextField className={classes.textfield} fullWidth variant="outlined" label="Gebruikersnaam" onChange={this.handleUsernameChange} />      
                            <TextField className={classes.textfield} fullWidth variant="outlined" label="Wachtwoord" type="password" onChange={this.handlePasswordChange} />
                            <Button style={{ marginTop: '30px' }} variant="contained" color="secondary" fullWidth onClick={this.handleLogin}>Log in</Button>
                        <Typography style={{ marginTop: '30px' }}>{status}</Typography>
                    </Card>
                </Paper>            
            </Container>
        )
    }
}

export default withStyles(style)(LoginPage);