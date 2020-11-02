import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import './css/About.css';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {withStyles, createStyles} from '@material-ui/styles';
import Navigation from './navigation';
import Contact from './contact';
import StyledProps from './props/StyledProps';
import nateshim from './static/nateshim.png';
import {WindupChildren, Pace} from 'windups';
import AOS from 'aos';
import 'aos/dist/aos.css';
import cs1 from './static/CS1.png';
import newebcb from './static/newebcb.png';
import react from './static/react.png';
import node from './static/node.png';
import python from './static/python.png';
import js from './static/javascript.png';
import SkillsCard from './components/SkillsCard';
import SkillsCardContent from './components/SkillsCardContent';
import ProjectCard from './components/ProjectCard';
import { Theme } from '@material-ui/core';

const About = (props: StyledProps) => {
  const classes = props.classes;
  const AboutMe = "I am a web developer currently based in the Bay Area who loves to create and collaborate with others in producing user friendly software. When I'm not sitting in front of my desktop, I'm usually making music, jotting down pixels, or hanging out with friends."
  const ReactItems = [
    "Experience with Material UI and styling best practices",
    "Component testing with Jest",
    "Axios for handling requests / interacting with rest APIs",
  ];
  const NodeJSItems = [
    "Experience with using Express and other frameworks",
    "Knowledgable in Passport and security best practices",
    "Proficiency in REST APIs"
  ];
  const JavascriptItems = [
    "Knowledge of jQuery, npm, Webpack",
    "AJAX for interactions between the web page and the server",
    "Performance optimization"
  ];
  const PythonItems = [
    "Package-related tools: brew, pip, setuptools",
    "Experience with popular web frameworks such as Django and Flask",
    "MySQL, Database integration"
  ];
  AOS.init();
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

      <Box id="about" className={classes.bio}>
        <Grid
          container
          className={classes.aboutGrid}
          spacing={2}
          >
          <Grid item xs={12} lg={3}>
            <Avatar data-aos="fade-right" data-aos-delay='300' data-aos-duration='1000' src={nateshim} className={classes.avatar}/>
          </Grid>
          <Grid item xs={12} lg={9}>
            <Card className={classes.bioCard} raised={true} data-aos="fade-left" data-aos-delay='300' data-aos-duration='1000'>
                <CardContent>
                  <Typography variant="subtitle1" className={classes.text}>{AboutMe}</Typography>
                </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Box className={classes.recentWork}>
          <Typography className={classes.recentWorkTitle}>Skills</Typography>
          <Grid 
            container
            spacing={3}
            >
            <SkillsCard icon={react} title={"React"}>
              <SkillsCardContent
                items={ReactItems}
              />
            </SkillsCard>
            <SkillsCard icon={node} title={"Node.js"}>
              <SkillsCardContent
                items={NodeJSItems}
              />
            </SkillsCard>
            <SkillsCard icon={js} title={"Javascript"}>
              <SkillsCardContent
                items={JavascriptItems}
              />
            </SkillsCard>
            <SkillsCard icon={python} title={"Python"}>
              <SkillsCardContent
                items={PythonItems}
              />
            </SkillsCard>
          </Grid>
      </Box>

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
                  new.ebcb.org
                </p> 
                <ul>
                  <li>React | Material UI</li>
                  <li>Local church home site</li>
                  <li>Created alongside 5 other developers</li>
                </ul>
              </div>
            } 
            color ='#232D40'
            link="https://new.ebcb.org/">
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
  aboutGrid: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  bio: {
    display: 'flex',
    backgroundColor: '#FEB954',
    padding: '6rem',
    [theme.breakpoints.down('sm')]: {
      display: 'block'
    },
  },
  bioCard: {
    display: 'flex',
    backgroundColor: '#F7F3F2',
  },
  avatar: {
    display: 'flex',
    justifyContent: 'center',
    height: '300px',
    width: '300px',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
      width: '200px',
    },
    [theme.breakpoints.down('md')]: {
      height: '200px',
      width: '200px',
    },
  },
  text: {
    color: '#12130F',
    fontSize: '1.5rem',
    textAlign: 'left',
    padding: '2rem',
    cursor: 'default',
    [theme.breakpoints.down('md')]: {
      fontSize: '.5rem',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '.5rem',
    }
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
