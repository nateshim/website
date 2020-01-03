import React from 'react';
import './css/About.css';
import nateshim from './static/nateshim.jpg'
import picture from './static/planets.gif'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Parallax } from 'react-parallax';
import {AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';


const useStyles = makeStyles({
  avatar: {
    margin: 185,
    width: 500,
    height: 500,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    maxHeight: 500,
    minHeight: 500,
    maxWidth: 300,
    minWidth: 300,
  },
  grid: {
    display: 'inline-block',
  },
  cardContent: {
    
  },
});
function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className="About"> 
      <div className="About-header">
          <Parallax strength={500} bgImage={picture} className ="Background">
            <div style={{height: 20,width:1440}}/>
            <Typography style={{fontFamily:'sans-serif', fontWeight:400, textAlign:"center", fontSize:50}}>
              Nathanael Shim 
            </Typography>
            <Container display="flex" maxWidth="md">
              <Avatar src={nateshim}  className = {classes.avatar} alt = "nateshim"></Avatar>
            </Container>
          </Parallax> 
      </div>
        <Parallax strength={1000} className="Background">
          <div style={{height:200}}/>
          <Grid container spacing={5} className={classes.grid}>
          <Grid item spacing={5}className={classes.grid}>
          <Card m={500} className={classes.card}variant="outlined" square>
            <CardContent>
              <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                <u>Background</u>
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} Front-end focused engineer based in the Bay Area
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} UC Berkeley Class of 2019 
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item spacing={5} className={classes.grid}>
          <Card m={500}className={classes.card} variant="outlined" square>
            <CardContent>
              <Typography variant="h4" component="h2" gutterBottom>
                <u>Skills</u>
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} Python3
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} React
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} Javascript
              </Typography>
              <Typography variant="h6" component="h2">
                {bull} CSS 
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
          <div style={{height: 300}}/>

        </Parallax>
      <ul className="Contact">
        <Box>
          <AwesomeButtonSocial size = "medium"type ="secondary"theme="blue" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTKHdsjVSZvSNvqTgKmrfrdBjXkcbpbdhlrMvKmTzlKsVJsVHfjNjKVbMrrlfsmDRHRg"><img src="https://img.icons8.com/color/30/000000/google-logo.png"/>Gmail</AwesomeButtonSocial>
          <AwesomeButtonSocial type="github" size="medium" target = "_blank" href = "https://github.com/nateshim">Github</AwesomeButtonSocial>
          <AwesomeButtonSocial type="linkedin" href = "https://www.linkedin.com/in/nathanael-shim-324b55115/">LinkedIn</AwesomeButtonSocial>
          <AwesomeButtonSocial type="youtube" target="_blank" href="https://www.youtube.com/channel/UC_foFRkUQR43k31HQ_5j-1g">Youtube</AwesomeButtonSocial>
        </Box>
      </ul>
    </div>
  );
}

export default About;
