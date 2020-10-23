import React from 'react';
import './css/About.css';
import lonelyfox from './static/avatar.png';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import {Link} from 'react-router-dom';
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
            <Box className={classes.logoContainer}>
              <Avatar alt="Lonely Fox" src={lonelyfox} className={classes.avatar}></Avatar>
              <ScrollLink 
                style={{cursor: 'pointer'}} 
                to="nateshim" 
                activeClass="active" 
                spy={true} 
                smooth={true} 
                duration={800} 
                className={classes.title}
                >
                  Nathanael Shim
                </ScrollLink>
            </Box>
          <Box>
              <ScrollLink 
                style={{cursor: 'pointer'}} 
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
                style={{cursor: 'pointer'}} 
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
              <Link to= "/devlog" className={classes.text}>Blog</Link>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

const useStyles = (theme: Theme) => createStyles({
  navBarShow: {
    padding: '1rem',
    backgroundColor: '#F7F3F2',
    transform: 'translateY(0)',
    transition: 'transform 1s',
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
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  text: {
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '1.5rem',
    padding: '1rem',
    textDecorationColor: '#F7F3F2',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  title: {
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '1.5rem',
    marginBlock:'2rem',
    paddingTop:'2.25rem',
    paddingLeft:'1rem',
    textDecoration: 'none',
    textDecorationColor: '#F7F3F2',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  avatar: {
    fontSize: '1rem',
    width: '100px',
    height: '100px',
    [theme.breakpoints.down('sm')]: {
      width: '45px',
      height: '45px',
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
    
  },
});

export default withStyles(useStyles)(Navigation);
