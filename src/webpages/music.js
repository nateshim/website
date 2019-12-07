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
        </header>
      </div>
    );
  }

export default Music;
