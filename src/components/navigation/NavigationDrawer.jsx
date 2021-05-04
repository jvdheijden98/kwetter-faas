import React, { Component } from 'react';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { ArrowLeftTwoTone } from '@material-ui/icons';

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
            <Link to="/">
              <ListItem>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                  Home
                </ListItemText>
              </ListItem>
            </Link>
        </Drawer>
      );
    }
  }

export default withStyles(styles)(NavigationDrawer);