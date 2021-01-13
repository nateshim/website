import React from 'react';
import './css/About.css';
import lonelyfox from './static/avatar.png';
import Container from '@material-ui/core/Container';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar'
import {Link} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import {withStyles, createStyles} from '@material-ui/styles';
import StyledProps from './props/StyledProps';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import {Theme} from '@material-ui/core';

const OtherNavigation = (props: StyledProps) => {
  const classes = props.classes;
  const trigger = useScrollTrigger();
  return (   
      <AppBar elevation={0} className={trigger ? classes.navBarHide : classes.navBarShow} position = "sticky">
        <Container>
          <Toolbar disableGutters>
            <Box className={classes.logoContainer}>
              <Avatar alt="Lonely Fox" src={lonelyfox} className={classes.avatar}></Avatar>
              <Link to= "/" className={classes.title}>Nathanael Shim</Link>
            </Box>
          <Box className={classes.navBar}>
            <Link to= "/" className={classes.text}>About</Link>
            <Link to= "/" className={classes.text}>Projects</Link>
            <Link to= "/devlog" className={classes.text}>Blog</Link>
          </Box>
          </Toolbar>
        </Container>
      </AppBar>
  );
}

const useStyles = (theme : Theme) => createStyles({
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
    [theme.breakpoints.down('xs')]: {
      fontSize: '1rem',
    },
  },
  title: {
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '1.5rem',
    marginBlock:'2rem',
    paddingTop:'.25rem',
    paddingLeft:'1rem',
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
    fontSize: '1rem',
    width: '100px',
    height: '100px',
    [theme.breakpoints.down('xs')]: {
      width: '45px',
      height: '45px',
    },
    
  },
});

export default withStyles(useStyles)(OtherNavigation);
