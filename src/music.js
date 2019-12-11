import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

function Music() {
    return (
      <div className="Music">
        <header className="Music-header">
          <Container>
            <Typography style={
              {
                textAlign: "center", 
                fontFamily: "monospace",
                fontSize: 60,
              }}
            >
              My Music
            </Typography>
          </Container>
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 25,
              height: 0
            }}
          >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={'https://www.youtube.com/embed/B0NLyBeYxwg'}
            frameBorder="0"
          />
            </div>
            <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 25,
              height: 0
            }}
          >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={'https://www.youtube.com/embed/pceH-KGZT8k'}
            frameBorder="0"
          />
            </div>
            <ul className="Contact">
            <Box>
            <Typography>Email: nateshim@gmail.com</Typography>
            <Typography>Phone number: (510)-710-2091 </Typography>
            <Typography>LinkedIn: <a href= "https://www.linkedin.com/in/nathanael-shim-324b55115/">https://www.linkedin.com/in/nathanael-shim-324b55115/ </a> </Typography>
            <Typography>Soundcloud: <a href = "https://soundcloud.com/mihsetan">https://soundcloud.com/mihsetan</a></Typography>
            <Typography>Github: <a href = "https://github.com/nateshim">https://github.com/nateshim</a></Typography>
            </Box>
            </ul>
        </header>
      </div>
    );
  }

export default Music;
