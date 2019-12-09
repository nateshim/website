import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container'; 

function Portfolio() {
    return (
        <div className="Portfolio">
            <header className="Portfolio-header">
                <Container>
                    <Typography style={
                    {
                        textAlign: "center", 
                        fontFamily: "monospace",
                        fontSize: 60,
                    }}
                    >
                        Portfolio
                    </Typography>
                </Container>
                <Box>
                    
                </Box>
                </header>
        </div>
    );
}
export default Portfolio