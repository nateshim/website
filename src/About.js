import React from 'react';
import './css/About.css';
import background from './static/4.jpg';
import nateshim from './static/nateshim.jpg'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, easing} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/styles';
import { Parallax } from 'react-parallax';
import {AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WebIcon from '@material-ui/icons/Web';
import GamesIcon from '@material-ui/icons/Games';
import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles({
  title: {
    fontWeight:400,
    color:"black", 
    textAlign:"center",
    display: 'inline-flex',
    fontSize:50,
    fontFamily: 'monospace',
  },
  avatar: {
    margin: 130,
    width: 570,
    height: 570,
    display: 'inline-flex',
    alignContent: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  card: {
    maxHeight: 450,
    minHeight: 450,
    maxWidth: 300,
    minWidth: 300,
  },
  grid: {
    margin: '0px',
    padding: '0px',
    display: 'inline-block',
    color: '#6495ED',
    backgroundColor: '#6495ED',

  },
  cardContent: {
    fontFamily: 'monospace',
  },
});
function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div className="About"> 
        <Parallax blur={0} strength={2000} bgImage={background}style={{position: 'absolute'}}>
            <div style={{height: 20,width:1440}}/>
            <Typography className={classes.title}>
              Nathanael Shim 
            </Typography>
            <Container display="flex" maxWidth="md">
              <Avatar src={nateshim}  className = {classes.avatar} alt = "nateshim"></Avatar>
            </Container>
          <div style={{height:200}}/>
          <Grid container spacing={5} className={classes.grid}>
          <Grid item spacing={5}className={classes.grid}>
          <Card m={500} className={classes.card}variant="outlined" square gutterBottom>
            <CardContent>
              <PersonIcon style={{fontSize: '45px', color: '#6495ED'}}/>
              <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                <u>Background</u>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                {bull} Born and raised in the Bay Area.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2"gutterBottom>
                {bull} UC Berkeley Class of 2019.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2"gutterBottom>
                {bull} Retired beatboxer.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2">
                {bull} Frontend focused developer with a love for music and video games.
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item spacing={5}className={classes.grid}>
          <Card m={500} className={classes.card}variant="outlined" square gutterBottom>
            <CardContent>
              <MusicNoteIcon style={{fontSize: '45px', color: '#6495ED'}}/>
              <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                <u>Music</u>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2" gutterBottom>
                {bull} I use primarily Ableton Live to produce music
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} I enjoy playing piano, guitar, and drums.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                <u>Current Favorite Artists:</u>
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} D'Angelo
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} Lauryn Hill
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} Drake
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item spacing={5} className={classes.grid}>
          <Card m={500}className={classes.card} variant="outlined" square gutterBottom>
            <CardContent>
              <WebIcon style={{fontSize: '45px', color: '#6495ED'}}/>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <u>Software Development</u>
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                As a consumer of software myself, I enjoy making user-oriented products that are fun to use.
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                {bull} Python3
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                {bull} (Java/Type)script
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                {bull} React
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                {bull} HTML5  
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                {bull} CSS  
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          <Grid item spacing={5} className={classes.grid}>

          <Card m={500}className={classes.card} variant="outlined" square gutterBottom>
            <CardContent>
              <GamesIcon style={{fontSize: '45px', color: '#6495ED'}}/>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <u>Game Design</u>
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2"gutterBottom>
                {bull} I enjoy making games as much as I enjoy playing them.
              </Typography>
              <Typography className={classes.cardContent} variant="h5" component="h2"gutterBottom>
                {bull} I primarily use Pygames, Unity, and RPG Maker.
              </Typography>
            </CardContent>
          </Card>
          </Grid>
          </Grid>
      <div style={{height: 200, backgroundColor: '#6495ED'}}></div>
      <Grid style={{backgroundColor: '#6495ED'}}>
        <Typography style={{fontFamily: 'monospace'}} variant='h4'>
          Recent Music
        </Typography>
        <div style={{height:100, backgroundColor:'#6495ED'}}></div>
        <Grid container spacing={3} style={{justifyContent:'center'}}>
          <Grid item>
            <iframe
              style={{
                top: 0,
                left: 0,
                height: 400,
                width: 400,
              }}
              src={'https://www.youtube.com/embed/B0NLyBeYxwg'}
              frameBorder="0"
            />
          </Grid>
          <Grid item>
            <iframe
              style={{
                top: 0,
                left: 0,
                height: 400,
                width: 400,
              }}
              src={'https://www.youtube.com/embed/pceH-KGZT8k'}
              frameBorder="0"
            />
          </Grid>
          <Grid item>
            <iframe
              style={{
                top: 0,
                left: 0,
                height: 400,
                width: 400,
              }}
              src={'https://www.youtube.com/embed/vjcyYA4IHZQ'}
              frameBorder="0"
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{backgroundColor: '#6495ED'}}>
        <Typography style={{fontFamily: 'monospace'}} variant='h4'>
          My Projects
        </Typography>
      </Grid>
      <Grid style={{backgroundColor: '#6495ED'}}>
        <Typography style={{fontFamily: 'monospace'}} variant='h4'>
          My Games
        </Typography>
      </Grid>
        <Grid container spacing={3}  className={classes.grid}>
          <Grid item className={classes.grid}>
            <AwesomeButtonSocial size = "medium"type ="secondary"theme="blue" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTKHdsjVSZvSNvqTgKmrfrdBjXkcbpbdhlrMvKmTzlKsVJsVHfjNjKVbMrrlfsmDRHRg"><img src="https://img.icons8.com/color/30/000000/google-logo.png"/>Gmail</AwesomeButtonSocial>
          </Grid>
          <Grid item className={classes.grid}>
            <AwesomeButtonSocial type="github" size="medium" target = "_blank" href = "https://github.com/nateshim">Github</AwesomeButtonSocial>
          </Grid>
          <Grid item className={classes.grid}>
            <AwesomeButtonSocial type="linkedin" href = "https://www.linkedin.com/in/nathanael-shim-324b55115/">LinkedIn</AwesomeButtonSocial>
          </Grid>
          <Grid item className={classes.grid}>
            <AwesomeButtonSocial type="youtube" target="_blank" href="https://www.youtube.com/channel/UC_foFRkUQR43k31HQ_5j-1g">Youtube</AwesomeButtonSocial>
          </Grid>
        </Grid>
      </Parallax> 
      </div>
  );
}

export default withStyles(useStyles)(About);
