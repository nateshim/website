import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import './css/About.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {withStyles, createStyles} from '@material-ui/styles';
import Navigation from './navigation';
import Contact from './contact';
import StyledProps from './props/StyledProps';
import nateshim from './static/nateshim.png';
import {WindupChildren, Pace} from 'windups';
import AOS from 'aos';
import 'aos/dist/aos.css';
import raindrinker from './static/raindrinker.png';
import gamefeed from './static/gamefeed.png';
import cs1 from './static/CS1.png';
import newebcb from './static/newebcb.png';
import react from './static/react.png';
import node from './static/node.png';
import python from './static/python.png';
import js from './static/javascript.png';
import puzzlechess from './static/puzzlechess.png';
import checklog from './static/checklog.png';
import SkillsCard from './components/SkillsCard';
import SkillsCardContent from './components/SkillsCardContent';
import ProjectCard from './components/ProjectCard';
import { Theme } from '@material-ui/core';

const About = (props: StyledProps) => {
  const classes = props.classes;
  AOS.init();
  return (  
    <Box id="nateshim" className={classes.backgroundContainer}>
      <Navigation/>
      
      

      

      <Box id="projects" className={classes.projects}>
        <Typography className={classes.recentWorkTitle}>Projects</Typography>
        <Grid 
          container
          spacing={3}
          >
            <ProjectCard background={cs1} 
            title= {
              <div>
                <p>
                  CS1
                </p> 
                <ul>
                  <li>React | Material UI</li>
                  <li>Richmond High after-school program</li>
                  <li>Solo developed</li>
                </ul>
              </div>
            }
            color='#4062BB'
            link="https://nateshim.github.io/CS1/">
            </ProjectCard>
            <ProjectCard background={newebcb} 
            title= {
              <div>
                <p>
                  EBCB
                </p> 
                <ul>
                  <li>React | Material UI</li>
                  <li>Local church home site</li>
                  <li>Created alongside 5 other developers</li>
                </ul>
              </div>
            } 
            color ='#232D40'
            link="https://www.ebcb.org/">
            </ProjectCard>
            <ProjectCard background={raindrinker} 
            title= {
              <div>
                <p>
                  Raindrinker
                </p> 
                <ul>
                  <li>Vue</li>
                  <li>Online portfolio for game developer</li>
                  <li>Assisted Raindrinker in creating responsive webpages and mobile design</li>
                </ul>
              </div>
            } 
            color ='#0F0F15'
            link="https://raindrinker.com/">
            </ProjectCard>
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
            <ProjectCard background={checklog} 
            title= {
              <div>
                <p>
                  CheckLog
                </p> 
                <ul>
                  <li>React/Flask</li>
                  <li>Web application for tracking conversations</li>
                  <li>Project 4 for GA Immersive</li>
                </ul>
              </div>
            } 
            color ='#41337A'
            link="https://check-log.netlify.app/">
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
    backgroundColor: '#8F8073',
  },
  recentWorkTitle: {
    fontFamily: 'Montserrat',
    color: '#F7F3F2',
    fontSize: '2.5rem',
    padding: '2rem',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '2rem',
    },
  },
  projects: {
    backgroundColor: '#F7F3F2',
    textAlign: 'center',
    display: 'block',
    padding: '4rem',
  }
});

export default withStyles(useStyles)(About);
