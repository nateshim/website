import * as React from 'react';
import Button from '@material-ui/core/Button';
import './css/Portfolio.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Container from '@material-ui/core/Container';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
class Portfolio extends React.Component{
    render() {
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
                    <Container maxWidth="md"> 
                    <List style={{margin: '12px', display: 'flex', textAlign: 'center'}}>
                    <ListItem style={{fontSize: '1.6rem', textDecoration: 'none'}}
                        button
                        className="navigationbutton"
                    >
                        <Link to="/app1" style={{color: '#000'}}>APP1</Link>
                        </ListItem>
                        </List>
                    </Container>
                </Box>
  
            </header>                    
        </div>
    );
                }
}
export default Portfolio