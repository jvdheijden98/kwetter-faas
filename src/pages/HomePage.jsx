import { Container, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { fetchTimeline } from '../APIs/Timeline/Timeline';
import KweetCard from '../components/other/KweetCard';

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
                        //console.log(this.state.kweets)
                        //console.log(item.kweetID)
                        return <KweetCard key={item.kweetID} username={item.username} message={item.message} likes={item.likes} timeCreated={item.timeCreated}/>                            
                    })
                }
                
            </Container>
        )
    }
}

export default HomePage;