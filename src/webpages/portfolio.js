import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'; 

function Portfolio() {
    return (
        <div className="Portfolio">
            <header className="Portfolio-header">
                <Container>
                    <Typography>PORTFOLIO</Typography>
                </Container>
                <Box>
                    <Typography>This is where I will hold all of my projects</Typography>
                </Box>
                </header>
        </div>
    );
}
export default Portfolio