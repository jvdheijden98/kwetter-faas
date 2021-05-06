import React, { Component } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

class KweetCard extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
}

  calculateDate(){
    let unix_timestamp = this.props.timeCreated
    console.log(this.props.timeCreated) // Corect
    // Create a new JavaScript Date object based on the timestamp
    var date = new Date(unix_timestamp);
    console.log(date) // incorrect

    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var year = date.getFullYear();
    var month = months[date.getMonth()];
    var day = date.getDate();

    // Hours part from the timestamp
    var hours = date.getHours();

    // Minutes part from the timestamp
    var minutes = "0" + date.getMinutes();

    // Will display time in 10:30:23 format
    var formattedTime = year + " " + month + " " + " " + day + " " + hours + ':' + minutes.substr(-2);
    return formattedTime;
  }

  render (){
    const { classes } = this.props;
    
    return (
      <Card style={{marginTop: "20px"}} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          title={this.props.username}
          subheader={this.calculateDate()}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {this.props.message}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton>
            <ThumbUpIcon />
          </IconButton>
        </CardActions>      
      </Card>
    )
  }


}

export default withStyles(useStyles)(KweetCard);