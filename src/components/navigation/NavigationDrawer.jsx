import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';

const styles = {
    menuButton: {
      marginRight: "10px",
    },
    nested: {
      paddingLeft: "20px",
    },
    menuItem: {
      textDecoration: "none",
      color: "black",
    },
    drawer: {
      marginTop: "64px",
      width: "250px",
    },
  };
  
  class NavigationDrawer extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        goodsReceiptOpen: true,
      };
    }
  
    render() {
      const { classes, open, close, t } = this.props;
  
      return (
        <Drawer classes={{ paper: classes.drawer }} variant="temporary" open={open} onClose={() => { close(); }} anchor="left">
              <ListItem button component={Link} to={"/home"}>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText className={classes.menuItem} >
                  Home
                </ListItemText>
              </ListItem>
        </Drawer>
      );
    }
  }

export default withStyles(styles)(NavigationDrawer);