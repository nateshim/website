
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './css/About.css';
import {withStyles, createStyles} from '@material-ui/styles';
import OtherContact from './OtherContact';
import OtherNavigation from './OtherNavigation';
import StyledProps from './props/StyledProps';
import { Theme } from '@material-ui/core';
import {WindupChildren, Pace} from 'windups';


const Devlog = (props: StyledProps) => {
  const classes = props.classes;
  return (   
    <Box className={classes.backgroundContainer}>
      <OtherNavigation/>
      <Container className={classes.section} maxWidth={false}>
        <WindupChildren>
          <span className={classes.bigText}>
            <Pace ms={85}>{"        hello."}</Pace>
            <Pace ms={85}>{"        This is still under construction."}</Pace>
          </span>
        </WindupChildren>
      </Container>
      <OtherContact/>
    </Box> 
  );
}

const useStyles = (theme: Theme) => createStyles({
  section: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F3F2',
    alignItems: 'center',
    padding: '18rem 0',

  },
  text: {
    color: '#12130F',
    fontSize: '1.5rem',
    textAlign: 'left',
    padding: '2rem',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    }
  },
  bigText: {
    color: '#12130F',
    fontSize: '3rem',
    textAlign: 'center',
    paddingBottom: '15rem',
    fontWeight: 'bold',
    cursor: 'default',
  },
  backgroundContainer: {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    backgroundPosition: 'center',
    backgroundColor: '#F7F3F2',
  }
});

export default withStyles(useStyles)(Devlog);