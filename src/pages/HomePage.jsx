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

    componentDidUpdate(){
        fetchTimeline().then(response => {
            this.setState({
                kweets : response
            })
        })
    }


    render(){

        return (
            <Container>
                <Typography>
                    HomePage Here.
                </Typography>
                {
                    this.state.kweets.map((item, index) =>{
                        return <KweetCard message={item.message}/>                            
                    })
                }
            </Container>
        )
    }
}

export default HomePage;