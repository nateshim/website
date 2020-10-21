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
    "Experience with Django vs. Flask",
    "MySQL, Database integration"
  ];
  AOS.init();
  return (  
    <Box id="nateshim" className={classes.backgroundContainer}>
      <Navigation/>

      <Container className={classes.section} maxWidth={false}>
        <WindupChildren>
          <span className={classes.bigText}>
            <Pace ms={85}>{"        hello."}</Pace>
          </span>
        </WindupChildren>
      </Container>

      <Container id="about" className={classes.bio} maxWidth={false}>
        <Box display={{xs: 'block', sm: 'flex', md: 'flex', lg: 'flex'}}>
          <Avatar data-aos="fade-right" data-aos-delay='300' data-aos-duration='1000' src={nateshim} className={classes.avatar}/>
          <Card className={classes.bioCard} raised={true} data-aos="fade-left" data-aos-delay='300' data-aos-duration='1000' style={{backgroundColor: '#F7F3F2'}}>
            <Container style={{padding: '4rem'}}>
              <Typography variant="subtitle1" className={classes.text}>{AboutMe}</Typography>
            </Container>
          </Card>
        </Box>
      </Container>

      <Box className={classes.recentWork}>
          <Typography className={classes.recentWorkTitle}>Skills</Typography>
          <Grid 
            container
            className={classes.skillsGrid}
            spacing={2}
            direction="row"
            justify="center"
            alignItems="stretch"
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
          direction="row"
          justify="center"
          alignItems="stretch"
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
    backgroundPosition: 'center',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F7F3F2',
    alignItems: 'center',
    padding: '18rem 0',

  },
  bio: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#FEB954',
    alignItems: 'center',
    padding: '10rem 0',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  bioCard: {
    marginRight: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: '165vw',
      width: '100vw',
    },
  },
  avatar: {
    display: 'flex',
    height: '300px',
    width: '300px',
    marginRight: '3rem',
    marginLeft: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: '200px',
      width: '200px',
      marginLeft: '6rem',
      marginBottom: '2rem',
    },
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
    fontFamily: 'Colombo',
    color: '#12130F',
    fontSize: '4rem',
    textAlign: 'center',
    paddingBottom: '15rem',
    fontWeight: 'bold',
    cursor: 'default',
  },
  skillsGrid: {
    [theme.breakpoints.down('sm')]: {
      display: 'grid'
    }
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
  },
  projects: {
    backgroundColor: '#faf6f5',
    textAlign: 'center',
    display: 'block',
    padding: '4rem',
  }
});

export default withStyles(useStyles)(About);
