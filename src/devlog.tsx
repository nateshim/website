
import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './css/About.css';
import {withStyles, createStyles} from '@material-ui/styles';
import OtherContact from './OtherContact';
import OtherNavigation from './OtherNavigation';
import StyledProps from './props/StyledProps';
import BlogCard from './components/BlogCard';
import { 
  Theme,
  Grid,
  Typography,
  Divider,
} from '@material-ui/core';
import logo1 from './static/blog/10.04.2020/1.png';
import logo2 from './static/blog/10.04.2020/2.png';
import logo3 from './static/blog/10.04.2020/3.png';
import editorSample from './static/blog/10.25.2020/editor_sample.png'

const Devlog = (props: StyledProps) => {
  const classes = props.classes;
  return (   
    <Box className={classes.backgroundContainer}>
      <OtherNavigation/>
      <Container className={classes.section} maxWidth={false}>
        <Grid container xs={8}>
        <BlogCard title="Pixit Devlog 1" subtitle="10.25.2020">
            <Typography className={classes.text}>
              Got a basic pixel editor up. Here is a snippet:
            </Typography>
            <img className={classes.bigImage} alt="editorSample" src={editorSample}/>
            <Typography className={classes.text}>
            For now, I only have one color available for drawing, but I plan on putting that feature off till I can get all the basic web behavior down. It also supports real time so any user who accesses a link to the editor can edit it in real time. However, the editor does not save the state so if all users exit, the editor will automatically delete itself. Will need to look into that
            </Typography>
            <Typography className={classes.text}>
              Currently, I am still setting up the environment. I have the react app set up and am looking into developing the server for the app.
            </Typography>
            <Divider/>
            <Typography className={classes.linkText}>Links: </Typography>
          </BlogCard>
          <BlogCard title="Pixit" subtitle="10.04.2020">
            <Typography className={classes.text}>
              Recently, I have been interested in real time applications and decided to make my own real time app. 
              The first idea I thought of was building a real time coding editor that would allow for developers to collaborate more efficiently on debugging/writing code.
              I thought it was a really cool, fresh idea that had a lot of potential and could help a lot of developers out there. Eventually though, I found out about CodeSandbox and the many other apps that already provide real-time coding environments so I decided to instead make a real time pixel editor, Pixit. 
            </Typography>
            <Typography className={classes.text}>
              The development for Pixit started around 2 weeks before this post, but I wanted to start documenting this process as I will be learning and implementing a lot of things for the first time, and I would like to look back on this journey to see what I've learned and how far I've come.
            </Typography>
            <Typography className={classes.text}>
              Currently, I am still setting up the environment. I have the react app set up and am looking into developing the server for the app.
            </Typography>
            <Typography className={classes.text}>
              I've also been doodling on Aseprite for logos. Here are some drafts:
            </Typography>
            <img className={classes.image} alt="draft1" src={logo1}/>
            <img className={classes.image} alt="draft2" src={logo2}/>
            <img className={classes.image} alt="draft3" src={logo3}/>
            <Divider/>
            <Typography className={classes.linkText}>Links: </Typography>
            <Typography className={classes.linkText}><a target="_blank" rel="noopener noreferrer" href="https://pusher.com/tutorials/code-playground-react">Pusher Tutorial</a></Typography>
          </BlogCard>
        </Grid>
      </Container>
      <OtherContact/>
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
    padding: '2rem',
  },
  image: {
    padding: '1rem',
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      height: '50%',
      width: '50%',
    }
  },
  bigImage: {
    padding: '1rem',
    display: 'flex',
    height: '50%',
    width: '50%',
    
  },
  text: {
    color: '#12130F',
    fontSize: '1.25rem',
    textAlign: 'left',
    padding: '1rem',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.5rem',
    }
  },
  linkText: {
    color: '#12130F',
    fontSize: '1rem',
    opacity: '.5',
    textAlign: 'left',
    padding: '1rem',
    cursor: 'default',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.5rem',
      padding: '.5rem',
    }
  },
});

export default withStyles(useStyles)(Devlog);