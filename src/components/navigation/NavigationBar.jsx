import React, { Component } from 'react';
//import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './NavigationDrawer';
//import { ArrowLeftTwoTone } from '@material-ui/icons';

const styles = (theme) => ({
    root: {
        display: 'flex',        
        flexGrow: 1,
    },
    toolbar: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        align: 'left',
        flexGrow: 1,
        justifyContent: 'flex-start',
    },
    loginButton: {
        marginRight: theme.spacing(2),
    }
});

class NavigationBar extends Component{
    constructor(props){
        super(props);
            
        this.state = {
            menuOpen: false,
        }
    }

    toggleMenu = () => {
        this.setState((wasMenuOpen) => ({ menuOpen: !wasMenuOpen.menuOpen}))
    }

    render(){
        const { classes } = this.props;
        const { menuOpen } = this.state;

        return (
            <div className={classes.root}>
              <AppBar style={{zIndex: 9000}} position="sticky">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={this.toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Typography align='left' className={classes.title} >
                        Home
                    </Typography>
                    <Button color="inherit" className={classes.loginButton}>
                        Login
                    </Button>
                </Toolbar>
              </AppBar>
              <NavigationDrawer open={menuOpen} close={this.toggleMenu} />
            </div>
          );
    }
}

export default withStyles(styles)(NavigationBar);