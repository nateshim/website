import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './css/About.css';
import Typography from '@material-ui/core/Typography';
import {withStyles, createStyles} from '@material-ui/styles';
import Contact from './contact';
import Navigation from './navigation';
import StyledProps from './props/StyledProps';

const Projects = (props: StyledProps) => {
  const classes = props.classes;
  return (   
    <Box className={classes.backgroundContainer}>
      <Navigation/>
      <Container>
        <Typography className={classes.text}>This is where my projects will go.</Typography>
      </Container>
      <Contact/>
    </Box> 
  );
}

const useStyles = createStyles({
  text: {
    fontFamily: 'Colombo',
    color: '#12130F',
  },
  backgroundContainer: {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundColor: '#F7F3F2',
  }
});

export default withStyles(useStyles)(Projects);