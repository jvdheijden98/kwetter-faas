import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { AppBar, Box, Button, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigationDrawer from './NavigationDrawer';
import { withRouter } from 'react-router-dom';

const styles = (theme) => ({
    root: {
        display: 'flex',        
        flexGrow: 1,
    },
    toolbar: {

    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: "inherit"
    },
    title: {
        color: "inherit",
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

    logout = () => {
        window.sessionStorage.removeItem("token");
        this.props.history.push("/");
    }

    render(){
        const { classes } = this.props;
        const { menuOpen } = this.state;

        return (
            <div className={classes.root}>
              <AppBar style={{zIndex: 9000}} position="sticky">
                <Toolbar className={classes.toolbar}>
                    <IconButton edge="start" className={classes.menuButton} aria-label="menu" onClick={this.toggleMenu}>
                        <MenuIcon />
                    </IconButton>
                    <Button align='left' className={classes.title} component={Link} to={'/home'}>
                        Home
                    </Button>
                    {!window.sessionStorage.getItem("token") && (
                        <>
                            <Box>
                                <Button className={classes.menuButton} component={Link} to={'/login'}>
                                    Login
                                </Button>
                                <Button className={classes.menuButton} component={Link} to={'/register'}>
                                    Registreer
                                </Button>
                            </Box>
                        </>
                    )}
                    {window.sessionStorage.getItem("token") && (
                        <>
                            <Box>
                                <Button className={classes.menuButton} onClick={this.logout}>
                                    Uitloggen
                                </Button>
                            </Box>
                        </>
                    )}
                </Toolbar>
              </AppBar>
              <NavigationDrawer open={menuOpen} close={this.toggleMenu} />
            </div>
          );
    }
}

export default withRouter(withStyles(styles)(NavigationBar));