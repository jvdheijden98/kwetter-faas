import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { fetchTimeline } from '../APIs/Timeline/Timeline';
import KweetCard from '../components/other/KweetCard';
import moment from 'moment'

// Alle Kweets
class HomePage extends Component{

    constructor(props) {
        super(props)
    
        this.state = {
          kweets : []
        }
    }

    componentDidMount() {
        fetchTimeline().then(response => {
            
            let i;
            for(i = 0; i < response.length; i++){
                let utcSeconds = response[i].timeCreated;
                let date = new Date(0);
                date.setUTCSeconds(utcSeconds);

                let formattedDate = moment(date).format('HH:mm - dddd do [of] MMMM YYYY')
                response[i].timeCreated = formattedDate;
            }

            this.setState({
                kweets : response
            })
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

    render(){

        return (
            <Container>
                <Typography>
                    HomePage Here.
                </Typography>
                {                    
                    this.state.kweets.map((item, index) =>{                          
                        return React.createElement(KweetCard, {key:item.kweetID, username:item.username, message:item.message, like:item.likes, timeCreated:item.timeCreated})
                    })
                }
                
            </Container>
        )
    }
}

export default HomePage;