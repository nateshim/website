import React from 'react';
import './css/About.css';
import background from './static/IMG_0553.jpg';
import Typography from '@material-ui/core/Typography';
import { makeStyles, easing, rgbToHex} from '@material-ui/core/styles';
import {withStyles} from '@material-ui/styles';
import {AwesomeButtonSocial} from 'react-awesome-button';
import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss'
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { CardContent } from '@material-ui/core';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WebIcon from '@material-ui/icons/Web';
import GamesIcon from '@material-ui/icons/Games';
import PersonIcon from '@material-ui/icons/Person';
import {Link} from 'react-router-dom';
import ikaraoke from './static/ikaraoke.png';
import cs101 from './static/cs101.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const useStyles = makeStyles({
  title: {
    color:"white", 
    textAlign:"left",
    fontSize:70,
    fontFamily: 'Courier New',
    margin: 0,
    padding: 35,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  game: {
    height: 465,
    width: 380,
    background: '#FFF',
    transition: 'width',
    position: 'initial',
    transitionDuration: '.5s',
    transitionProperty: 'initial',
    '&:hover': {
      background: '#BBB',
      height: 575,
    }
  },
  card: {
    height: 250,
    width: 800,
    variant: 'outlined',
    borderRadius: 32,
    backgroundColor: 'gray',
  },
  soundcloudcard: {
    height: 422,
    width: 1000,
    variant: 'outlined',
    borderRadius: 32,
    background: 'gray',
  },
  grid: {
    margin: '0px',
    padding: '100px',
  },
  soundcloudgrid: {
    margin: '0px',
    padding: '0px',
  },
  cardContent: {
    fontFamily: 'monospace',
    color: '#ffffff',
  },
  popover: {
    pointerEvents: 'none',
  },
});
function About() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  return (
    <div class="About" data-parallax="scroll" data-image-src={background}>
            <div data-aos="fade-right" data-aos-delay = '300' data-aos-duration = '800' className={classes.title}>
              nateshim 
            </div>
          <div style={{height:500}}></div>
            <Grid container style={{justifyContent: 'center'}}>
            <Grid item data-aos="fade-left" data-aos-delay = '100' data-aos-duration='800' spacing={5}className={classes.grid}>
              <Card m={500} class="Card" style={{variant:"outlined" , borderRadius:32}} gutterBottom>
                <CardContent>
                  <PersonIcon style={{fontSize: '45px', color: '#ffffff'}}/>
                  <Typography className = {classes.cardContent} variant = "h4" component="h2" gutterBottom>
                    <u>Background</u>
                  </Typography>
                  <Typography className={classes.cardContent}variant="h5" component="h2"gutterBottom>
                    {bull} Based in the Bay Area.
                  </Typography>
                  <Typography className={classes.cardContent}  variant="h5" component="h2"gutterBottom>
                    {bull} UC Berkeley Class of 2019.
                  </Typography>
                  <Typography className={classes.cardContent}  variant="h5" component="h2">
                    {bull} Frontend focused developer and music producer.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            </Grid>
            <div style={{height: 80}}></div>
            <Grid container style={{justifyContent: 'center'}}>
            <Grid item data-aos="fade-right" data-aos-delay = '100' data-aos-duration="800" spacing={5}className={classes.grid}>
              <Card m={500} class='Card' style={{variant:"outlined", borderRadius:32}} gutterBottom>
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
            </Grid>
            <div style={{height: 80}}></div>
            <Grid container style={{justifyContent: 'center'}}>
            <Grid item data-aos="fade-left" data-aos-delay = '100' data-aos-duration="800" spacing={5} className={classes.grid}>
              <Card m={500} class='Card' style={{variant:"outlined", borderRadius:32}} gutterBottom>
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
      <div style={{height: 80}}></div>
        <Typography style={{ fontFamily: 'monospace', color: 'white'}} variant='h4'>
          Music
        </Typography>
        <div style={{height: 20}}/>
        <Grid data-aos="fade-in" data-aos-duration='500' container style={{justifyContent:'center'}}>
          <Grid item className={classes.soundcloudgrid}>
            <Card m={500} class='SoundCloudCard' style={{variant:"outlined", borderRadius:32}} gutterBottom>
                <CardContent>
                  <iframe style={{padding:'8px'}} width="450" height="175" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/673985105&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>          
                  <iframe style={{padding:'8px'}} width="450" height="175" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475294164&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>          
                  <iframe style={{padding:'8px'}} width="450" height="175" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/733610278&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                  <iframe style={{padding:'8px'}} width="450" height="175" scrolling="yes" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/200983491&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
        <div style={{height:100}}/>
      <Typography style={{fontFamily: 'monospace', backgroundColor: '#transparent', color: 'white'}} variant='h4'>
          Portfolio
        </Typography>
      <div style={{height:100, backgroundColor:'#transparent'}}></div>
      <Grid container data-aos="fade-right" style={{justifyContent:'center'}} item spacing={5}>
        <Grid item className={classes.grid}>
          <Card m={500}class='app' style={{variant:"outlined", borderRadius:32}} square gutterBottom>
            <CardContent>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                Countdown Timer
              </Typography>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <a target="_blank" href="https://nateshim.github.io/karaokeapp/"><img style={{width:'100%', height: '150%'}}src={ikaraoke} alt="loading..."/></a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{height:250}}></div>
      <Grid container data-aos="fade-left" style={{backgroundColor: '#transparent', justifyContent:'center'}} item spacing={5}>
        <Grid item className={classes.grid}>
          <Card m={500}class="app" style={{variant:"outlined", borderRadius:32}} square gutterBottom>
            <CardContent>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                CS101
              </Typography>
              <Typography className={classes.cardContent} variant="h4" component="h2" gutterBottom>
                <a target="_blank" href="https://teaching-for-richmond-high.github.io/cs101/"><img style={{width:'100%', height: '150%'}}src={cs101} alt="loading..."/></a>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <div style={{height: 100, backgroundColor: 'transparent'}}></div>
      <div style={{height: 100, backgroundColor: '#transparent'}}/>
        <Grid container spacing={3} style={{justifyContent: 'center', backgroundColor: 'black'}}>
          <Grid item>
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
