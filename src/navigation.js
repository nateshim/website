import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './css/navigation.css';

class Navigation extends  Component {
    render() {
        return (
            <div className ="Navigation">
            <ul className = "Navigation-ul">
                <List style={{margin: '12px', display: 'flex', textAlign: 'center'}}>
                    <ListItem style={{fontSize: '1.6rem', textDecoration: 'none'}}
                        button
                        className="navigationbutton"
                    >
                        <Link to="/">About</Link>
                        </ListItem>
                    <ListItem style={{fontSize: '1.6rem'}}
                        button
                        className="navigationbutton"
                    >
                        <Link to="/music">Music</Link></ListItem>
                    <ListItem style={{fontSize: '1.6rem'}}
                        button
                        className="navigationbutton"
                    >
                        <Link to="/portfolio">Portfolio</Link></ListItem>
                </List>
            </ul>
            </div>
        )
    };
}
  

  
export default (Navigation);