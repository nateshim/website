import React from 'react';
import '../css/About.css';
import nateshim from '../static/nateshim.jpg'
import picture from '../static/2.jpg'
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Parallax } from 'react-parallax';
import Card from '@material-ui/core/Card'


const useStyles = makeStyles({
  avatar: {
    margin: 120,
    width: 500,
    height: 500,
  },
});
function About() {
  const classes = useStyles();
  return (
    <div className="About"> 
      <header className="About-header">
          <Parallax strength={500} bgImage={picture} className ="Background">
            <div style={{height: 200,width:2000}}/>
            <Typography style={{fontFamily:'monospace', fontWeight:400, textAlign:"center", fontSize:50}}>
              Nathanael Shim 
            </Typography>
            <Container display="flex" maxWidth="md">
              <Avatar src={nateshim}  className = {classes.avatar} alt = "nateshim"></Avatar>
            </Container>
            </Parallax> 
      </header>
      <Box className="About-header">
        <Container maxWidth="md">
          <Typography style={{fontFamily: 'monospace', fontWeight: 400, fontSize: 50}}>
            ABOUT
          </Typography>
          <Typography style={{fontFamily: 'monospace', fontWeight: 400, fontSize: 30}}>
            Hello, welcome to my website. Here I will be sharing my basic contact information, resume, cover letter, and the many personal projects that I have taken on both music and software related. 
          </Typography>
        </Container>
      </Box>
      <Box className="About-header">
        <Container maxWidth="md">
          <Typography style={{fontFamily: 'monospace', fontWeight: 400, fontSize:50}}>
            Background
          </Typography>
          <Typography style={{fontFamily: 'monospace', fontWeight: 400, fontSize: 30}}>
            I graduated from UC Berkeley with a B.A in Music/Computer Science (Minor). 
          </Typography>
        </Container>
      </Box>
      <ul className="Contact">
        <Box>
          <Typography>Email: nateshim@gmail.com</Typography>
          <Typography>Phone number: (510)-710-2091 </Typography>
          <Typography>LinkedIn: <a href= "https://www.linkedin.com/in/nathanael-shim-324b55115/">https://www.linkedin.com/in/nathanael-shim-324b55115/ </a> </Typography>
          <Typography>Soundcloud: <a href = "https://soundcloud.com/mihsetan">https://soundcloud.com/mihsetan</a></Typography>
          <Typography>Github: <a href = "https://github.com/nateshim">https://github.com/nateshim</a></Typography>
        </Box>
      </ul>
    </div>
  );
}

export default About;
