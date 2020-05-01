import React from 'react';
import './css/About.css';
import background from './static/IMG_0553.jpg';
import Typography from '@material-ui/core/Typography';
import { makeStyles} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/styles';
import {AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WebIcon from '@material-ui/icons/Web';
import PersonIcon from '@material-ui/icons/Person';
import ikaraoke from './static/ikaraoke.png';
import cs101 from './static/cs101.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navigation from './navigation';
import { Toolbar} from '@material-ui/core';

AOS.init();

const useStyles = makeStyles({
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  appbar: {
    paddingBottom: '600px',
  },
  name: {
    color:"white", 
    fontSize:70,
    fontFamily: 'Courier New',
    margin: 0,
    padding: 35,
  },
  aboutGrid: {
    justifyContent: 'center',
    paddingBottom: '200px',
  },
  grid: {
    margin: '0px',
    padding: '70px',
  },
  cardContent: {
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  title: {
    fontFamily: 'monospace', 
    color: 'white',
    padding: '70px',
  },
  soundcloudgrid: {
    margin: '0px',
    padding: '70px',
    justifyContent: 'center',
  },
  row: {
    padding: '10px',
  },
  popover: {
    pointerEvents: 'none',
  },
  portfoliogrid: {
    margin: '0px',
    padding: '70px',
    justifyContent: 'center',
  }
});
function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div class="About" data-parallax="scroll" data-image-src={background}>
      <Toolbar className = {classes.appbar} data-aos="fade-right" data-aos-delay = '300' data-aos-duration = '800'>
      <Navigation></Navigation>
      <div data-aos="fade-right" data-aos-delay = '300' data-aos-duration = '800' className={classes.name}>
        nateshim 
      </div>
      </Toolbar>

      <Grid id = "About" container className={classes.aboutGrid}>

        <Grid item data-aos="fade-left" data-aos-delay = '100' data-aos-duration='800'className={classes.grid}>
          <Card m={500} class = "Card" style={{variant:"outlined" , borderRadius:32}}>
            <CardContent>
              <PersonIcon style={{fontSize: '45px', color: '#ffffff'}}/>
              <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                <u>Background</u>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2" gutterBottom>
                {bull} Based in the Bay Area.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} UC Berkeley Class of 2019.
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} Frontend focused developer and music producer.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item data-aos="fade-right" data-aos-delay = '100' data-aos-duration="800" className={classes.grid}>
          <Card m={500} class='Card' style={{variant:"outlined", borderRadius:32}}>
            <CardContent>
              <MusicNoteIcon style={{fontSize: '45px', color: '#ffffff'}}/>
              <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                <u>Music</u>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2" gutterBottom>
                {bull} I primarily use Ableton Live to produce music
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} Proficient in piano, guitar, bass, and drums
              </Typography>
              <Typography className={classes.cardContent}  variant="h5" component="h2" gutterBottom>
                {bull} Current artists I'm listening to: D'Angelo, Lauryn Hill, Drake
              </Typography>
            </CardContent>
          </Card>
        </Grid>

          <Grid item data-aos="fade-left" data-aos-delay = '100' data-aos-duration="800" className={classes.grid}>
            <Card m={500} class='Card' style={{variant:"outlined", borderRadius:32}}>
              <CardContent>
                <WebIcon style={{fontSize: '45px', color: '#ffffff'}}/>
                <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                  <u>Software Development</u>
                </Typography>
                <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                  As a consumer of software myself, I enjoy making user-oriented products that are fun to use.
                </Typography>
                <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                  {bull} Backend: Most proficient with Python and Java
                </Typography>
                <Typography className={classes.cardContent} variant="h5" component="h2" gutterBottom>
                  {bull} Frontend: Most proficient with JS, React, HTML and CSS
                </Typography>
              </CardContent>
            </Card>
        </Grid>

      </Grid>

      <Typography className={classes.title} variant='h4'>
        Music
      </Typography>
      <Grid  data-aos="fade-in" data-aos-duration='500' container className={classes.soundcloudgrid}>
      <div id="Music"/>

          <Card m={500} class='SoundCloudCard' style={{variant:"outlined", borderRadius:32}}>
            <CardContent className = {classes.row}>
              <iframe title="arianagrande" width="80%" height="100%" scrolling="yes" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673985105&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </CardContent>
            <CardContent>
              <iframe  title="dreamhigh" width="80%" height="100%" scrolling="yes" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475294164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe> 
            </CardContent>
            <CardContent className = {classes.row}>
            <iframe width="80%" height="100%" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/327931708&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>   
            </CardContent>
            <CardContent>
              <iframe  title="beyonce_party" width="80%" height="100%" scrolling="yes" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/200983491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
            </CardContent>
          </Card>
      </Grid>

      <div id = "Portfolio"/>      
      <Typography className={classes.title} variant='h4'>
        Portfolio
      </Typography>
      <Grid container data-aos="fade-right" className={classes.portfoliogrid} spacing={5}>
        <Grid item lg zeroMinWidth className={classes.grid} style={{textAlign: 'left'}}>
          <Card m={500}class='app' style={{variant:"outlined", borderRadius:32}} square>
            <CardContent>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                IKaraoke
              </Typography>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <a target="_blank" rel="noopener noreferrer" href="https://nateshim.github.io/karaokeapp/"><img style={{width:'70%', height: '80%'}}src={ikaraoke} alt="loading..."/></a>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                Virtual karaoke machine by search
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                {bull} Youtube API for obtaining music videos
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                {bull} HTML|CSS with Bootstrap, JQuery|Ajax
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item lg zeroMinWidth className={classes.grid} style={{textAlign: 'left'}}>
          <Card m={500}class="app" style={{variant:"outlined", borderRadius:32}} square>
            <CardContent>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                CS101
              </Typography>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <a target="_blank" rel="noopener noreferrer" href="https://teaching-for-richmond-high.github.io/cs101/"><img style={{width:'70%', height: '80%'}}src={cs101} alt="loading..."/></a>
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                Website used for teaching beginning CS course at Richmond High School.
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                {bull} Design and Development
              </Typography>
              <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                {bull} HTML|CSS
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

        <Grid id = "Contact" container spacing={3} style={{justifyContent: 'center', backgroundColor: 'black'}}>
          <Grid item style={{justifyContent: 'right'}}>
            <AwesomeButtonSocial size = "medium"type ="secondary"theme="blue" target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCHrfTKHdsjVSZvSNvqTgKmrfrdBjXkcbpbdhlrMvKmTzlKsVJsVHfjNjKVbMrrlfsmDRHRg"><img src="https://img.icons8.com/color/30/000000/google-logo.png"/>Gmail</AwesomeButtonSocial>
          </Grid>
          <Grid item>
            <AwesomeButtonSocial type="github" size="medium" target = "_blank" href = "https://github.com/nateshim">Github</AwesomeButtonSocial>
          </Grid>
          <Grid item>
            <AwesomeButtonSocial type="linkedin" target="_blank" href = "https://www.linkedin.com/in/nathanael-shim-324b55115/">LinkedIn</AwesomeButtonSocial>
          </Grid>
          <Grid item>
            <AwesomeButtonSocial type="youtube" target="_blank" href="https://www.youtube.com/channel/UC_foFRkUQR43k31HQ_5j-1g">Youtube</AwesomeButtonSocial>
          </Grid>
        </Grid>
      </div>
  );
}
export default withStyles(useStyles)(About);
