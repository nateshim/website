import React from 'react';
import './css/About.css';
import lonelyfox from './static/avatar.png';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import {Link as ScrollLink} from 'react-scroll';
import Avatar from '@material-ui/core/Avatar';
import {withStyles, createStyles} from '@material-ui/styles';
import StyledProps from './props/StyledProps';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Theme} from '@material-ui/core';

const Navigation = (props: StyledProps) => {
  const classes = props.classes;
  const trigger = useScrollTrigger();
  return (   
      <AppBar elevation={0} className={trigger ? classes.navBarHide : classes.navBarShow} position = "sticky">
        <Container>
          <Toolbar disableGutters>
            <Container className={classes.logoContainer}>
              <ScrollLink 
                to="nateshim" 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                duration={800} 
                className={classes.title}
                >
                  Nathanael Shim
                </ScrollLink>
            </Container>
          <Box className={classes.navBar}>
              <ScrollLink 
                to="about" 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={0} 
                duration={800} 
                className={classes.text}
                >
                  About
                </ScrollLink>
                <ScrollLink 
                to="projects" 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={800} 
                className={classes.text}
                >
                  Projects
                </ScrollLink>        
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

const useStyles = (theme: Theme) => createStyles({
  navBar: {
    [theme.breakpoints.down('xs')]: {
      marginRight: '1rem',
    },
    
  },
  navBarShow: {
    padding: '1rem',
    backgroundColor: '#F7F3F2',
    transform: 'translateY(0)',
    transition: 'transform 1s',
    [theme.breakpoints.down('xs')]: {
      padding: '0rem',
    },
  },
  navBarHide: {
    padding: '1rem',
    backgroundColor: '#F7F3F2',
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
  logoContainer: {
    display: 'flex',
    backgroundColor: '#F7F3F2',
    flexGrow: 1,
  },
  text: {
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '25px',
    padding: '20px',
    textDecorationColor: '#F7F3F2',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
    },
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '25px',
    textDecoration: 'none',
    textDecorationColor: '#F7F3F2',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    
  },
  avatar: {
    marginRight: '10px',
    width: '100px',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '45px',
      height: '45px',
      marginRight: '0px'
    },
    
  },
});

export default withStyles(useStyles)(Navigation);
