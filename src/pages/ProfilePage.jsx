import { Button, Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { withRouter } from "react-router";
import { read } from '../APIs/Profile/profile';
import { deleteUser } from '../APIs/User/Delete';

// Subscribed Kweets + Profile zooi 
class ProfilePage extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
            firstName: '',
            lastName: '',
            biography: '',
            username: ''
        }

/* 
        console.log(this.state.username) // empty
        console.log("props: " + this.props.match.params.username) // props: Sebastiaan2
        const uname = this.props.match.params.username;
        console.log("uname: " + uname) // uname: Sebastiaan2
        this.setState({            
            username: uname
        }, () => 
            console.log("callback or whatever" + this.state.username) // Verschijnt niet
        )
        console.log("constructor state ding: " + this.state.username) // ding: empty */
    }

    componentDidMount(){
/*         this.setState({            
            username : this.props.match.params.username
        })
        console.log("after state set username: " + this.state.username) // username: empty */

        // TODO Capitalization bug
        const uname = this.props.match.params.username;
        console.log(uname)
        read(uname)
        .then((data) => {
            this.setState({
                firstName: data.firstName,
                lastName: data.lastName,
                biography: data.biography
            });
        });
    }

    forgetMe = (event) => {
        event.preventDefault();
        deleteUser(this.state.newKweet)
        .then((data) => {
            // Iets met status of error message
        });
        this.props.history.push("/");
        this.setState({});
    }


    render(){
        //console.log(this.state.username) // 1e keer empty? 2e keer Sebastiaan2?
        //console.log("props: " + this.props.match.params.username) // props: Sebastiaan2
        return (
            <Container>
                <Typography>
                    Firstname: {this.state.firstName}
                </Typography>
                <Typography>
                    Lastname: {this.state.lastName}
                </Typography>
                <Typography>
                    Biography: {this.state.biography}
                </Typography>
                <Button variant="contained" color="secondary" fullWidth onClick={this.forgetMe}>
                    Forget Me
                </Button>
            </Container>
        )
    }
}

export default withRouter(ProfilePage);