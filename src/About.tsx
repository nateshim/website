import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import './css/About.css';
import Typography from '@material-ui/core/Typography';
import {withStyles, createStyles} from '@material-ui/styles';
import Navigation from './navigation';
import Contact from './contact';
import StyledProps from './props/StyledProps';
import {WindupChildren, Pace} from 'windups';
import 'aos/dist/aos.css';
import gamefeed from './static/gamefeed.png';
import puzzlechess from './static/puzzlechess.png';
import ProjectCard from './components/ProjectCard';
import { Theme } from '@material-ui/core';

const About = (props: StyledProps) => {
  const classes = props.classes;
  return (  
    <Box id="nateshim" className={classes.backgroundContainer}>
      <Navigation/>
      <Container id="hello" className={classes.section} maxWidth={false}>
        <WindupChildren>
          <span className={classes.bigText}>
            <Pace ms={85}>{"        hello."}</Pace>
          </span>
        </WindupChildren>
      </Container>

      <Box id="projects" className={classes.projects}>
        <Typography className={classes.recentWorkTitle}>Projects</Typography>
        <Grid 
          container
          spacing={3}
          >
            <ProjectCard background={gamefeed} 
            title= {
              <div>
                <p>
                  GameFeed
                </p> 
                <ul>
                  <li>HTML/JS</li>
                  <li>Video game info site</li>
                  <li>Project 1 for GA Immersive</li>
                </ul>
              </div>
            } 
            color ='#333533'
            link="https://game-feed.netlify.app/">
            </ProjectCard>
            <ProjectCard background={puzzlechess} 
            title= {
              <div>
                <p>
                  PuzzleChess
                </p> 
                <ul>
                  <li>React/Express</li>
                  <li>Web hosted game where users can post, rate, and solve chess puzzles</li>
                  <li>Project 2 for GA Immersive</li>
                </ul>
              </div>
            } 
            color ='#52716C'
            link="https://puzzle-chess.netlify.app/">
            </ProjectCard>
        </Grid>
      </Box>
      <Contact/>
    </Box> 
  );
}

const useStyles = (theme: Theme) => createStyles({
  backgroundContainer: {
    backgroundSize: 'cover',
    height: '100%',
    width: '100%',
    margin: '0px',
    padding: '0px',
    overflowX: 'hidden',
    backgroundColor: '#F7F3F2',
    alignItems: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F3F2',
    alignItems: 'center',
    padding: '18rem 0',

  },
  bio: {
    backgroundColor: '#FEB954',
    padding: '6rem',
  },
  bioCard: {
    backgroundColor: '#F7F3F2',
    padding: '10px',
    width: '500px',
    [theme.breakpoints.down('sm')]: {
      width: '300px',
    },
  },
  avatar: {
    height: '200px',
    width: '200px',
    [theme.breakpoints.down('sm')]: {
      height: '100px',
      width: '100px',
    },
  },
  text: {
    color: '#12130F',
    fontSize: '1rem',
    textAlign: 'left',
    padding: '10px',
    cursor: 'default',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
    },
  },
  bigText: {
    fontFamily: 'Colombo',
    color: '#12130F',
    fontSize: '4rem',
    textAlign: 'center',
    paddingBottom: '15rem',
    fontWeight: 'bold',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '3rem',
    },
  },
  recentWork: {
    textAlign: 'center',
    display: 'block',
    padding: '4rem',
  },
  recentWorkTitle: {
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '2.5rem',
    padding: '2rem',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  projects: {
    backgroundColor: '#faf6f5',
    textAlign: 'center',
    display: 'block',
    padding: '4rem',
  }
});

export default withStyles(useStyles)(About);
