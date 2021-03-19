import { Button, Container, TextField, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { registerUser } from '../APIs/Registration';

const style = (theme) => ({
    textfield: {
    }
  });

  class RegisterPage extends Component {

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

    handleRegister = (event) => {
        event.preventDefault();
        
        this.setState({
            status: "Creating..."
        })

        registerUser(this.state.username, this.state.password)
            .then((data) => {
                console.log(data);                
                if(data !== null) {
                    this.setState({
                        status : data
                    })
                }
                console.log("postcall register handle logger:" + " \n" + this.state.status);
            })
    }

    render(){
        const { classes } = this.props;
        const { status } = this.state;
        return (
            <Container maxWidth="sm">
            <Typography style={{ marginTop: '30px', marginBottom: '30px' }} variant="h4">Registreren</Typography>                
                <TextField className={classes.textfield} fullWidth variant="outlined" label="Gebruikersnaam" onChange={this.handleUsernameChange} />      
                <TextField className={classes.textfield} fullWidth variant="outlined" label="Wachtwoord" type="password" onChange={this.handlePasswordChange} />
                <Button style={{ marginTop: '30px' }} variant="contained" color="secondary" fullWidth onClick={this.handleRegister}>Registreer</Button>
                <Typography style={{ marginTop: '30px' }}>{status}</Typography>
            </Container>            
        )
    }
}

export default withStyles(style)(RegisterPage);