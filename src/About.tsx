import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import './css/About.css';
import {withStyles, createStyles} from '@material-ui/styles';
import Contact from './contact';
import StyledProps from './props/StyledProps';
import 'aos/dist/aos.css';
import gamefeed from './static/gamefeed.png';
import puzzlechess from './static/puzzlechess.png';
import ProjectCard from './components/ProjectCard';
import { Theme } from '@material-ui/core';

const About = (props: StyledProps) => {
  const classes = props.classes;
  return (  
    <Box id="nateshim" className={classes.backgroundContainer}>
      <Box id="projects" className={classes.projects}>
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
  projects: {
    backgroundColor: '#F7F3F2',
    textAlign: 'center',
    display: 'block',
    padding: '4rem',
  }
});

export default withStyles(useStyles)(About);
