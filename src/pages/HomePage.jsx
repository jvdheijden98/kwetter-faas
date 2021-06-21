import { Button, Box, Container, TextField, Typography, Paper, Card } from "@material-ui/core";
import React, { Component } from 'react';
import { fetchTimeline } from '../APIs/Timeline/Timeline';
import KweetCard from '../components/other/KweetCard';
import { withStyles } from '@material-ui/core/styles';
import moment from 'moment'
import { create } from '../APIs/Kweet/Kweet';
import _ from 'lodash';

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

// Alle Kweets
class HomePage extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
          kweets : [],
          newKweet: ''
        }
    }

    componentDidMount() {
        fetchTimeline().then(response => {
            
            // let i;
            // console.log(response)
            // const kweetcount = response.length || 0;
            console.log("Component did Mount")
            if(response.length){
                const tweets = _.map(response, (tweet) => {
                    let utcSeconds = tweet.timeCreated;
                    let date = new Date(0);
                    date.setUTCSeconds(utcSeconds);
    
                    let formattedDate = moment(date).format('HH:mm - dddd do [of] MMMM YYYY')
                    tweet.timeCreated = formattedDate;
                    return tweet;
                })
                this.setState({
                    kweets : tweets
                })
            }
            
            // for(i = 0; i < kweetcount; i++){
            //     let utcSeconds = response[i].timeCreated;
            //     let date = new Date(0);
            //     date.setUTCSeconds(utcSeconds);

            //     let formattedDate = moment(date).format('HH:mm - dddd do [of] MMMM YYYY')
            //     response[i].timeCreated = formattedDate;
            // }


        })

    }

/*     componentDidUpdate(){
        fetchTimeline().then(response => {
            this.setState({
                kweets : response
            })
        })
    }
 */
    handleKweetChange = (event) => {
        this.setState({
            newKweet : event.target.value
        });
    };

    handleSubmitKweet = (event) => {
        event.preventDefault();

        create(this.state.newKweet)
            .then((data) => {
                // Iets met status of error message
            });
        this.props.history.push("/");
        this.setState({});
    }

    render(){
        const { classes } = this.props;

        return (
            <Container>
                <Typography>
                    {/* HomePage Here. */}
                </Typography>

                {window.sessionStorage.getItem("token") != null && (
                    <>
                        <Paper style={{elevation: 3, marginTop: "20px"}}>
                            <Card /* className={classes} */>
                                <Box style={{ display: "flex", alignItems: "center", justifyContent: "space-between",}}>
                                    <TextField fullWidth variant="outlined" onChange={this.handleKweetChange} />
                                    <Button onClick={this.handleSubmitKweet} variant="contained">
                                        Submit Kweet
                                    </Button>
                                </Box>
                            </Card>
                        </Paper>
                    </>
                )}

                {window.sessionStorage.getItem("token") == null && (
                    <>
                        <Paper style={{elevation: 3, marginTop: "20px"}}>
                            <Card >
                                <Typography align='center'>
                                    Log in to write kweets
                                </Typography>
                            </Card>
                        </Paper>              
                    </>
                )}

                {                    
                    this.state.kweets.map((item, index) =>{       
                      
                        return React.createElement(KweetCard, {key:item.kweetID, username:item.username, message:item.message, like:item.likes, timeCreated:item.timeCreated})
                    })
                }
                
            </Container>
        )
    }
}

export default withStyles(style)(HomePage);