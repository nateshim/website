import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Toolbar, Icon } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import {Link} from 'react-router-dom';



const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,

    },
    menuButton: {
    },
    title: {
        color:"white", 
        textAlign:"center",
        fontSize:50,
        fontFamily: 'Courier New',
        margin: 10,
      },
    card: {
        margin: theme.spacing(1),
        padding: 90,
        display: 'inline-block',
    },
    container: {
        textAlign: "center",
    },
}));
export default function Navigation() {
    const classes = useStyles();
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked(prev => !prev);
    };


    return (
            <div className ={classes.root}>
                <AppBar position="static" style={{background: 'transparent', boxShadow:'none'}}>
                    <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                aria-label="menu"
                                aria-haspopup="true"
                                onClick={handleChange}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Typography className={classes.title}>nateshim</Typography>
                    </Toolbar>
                    <div className={classes.container}>
                        <Collapse in={checked}>
                            <Grid>
                                <Card button elevation = {3} className = {classes.card}>
                                    <div className={classes.musicDetails}>
                                        <CardContent className={classes.musicContent}>
                                            <Typography component="h5" variant="h5">
                                            <Link to="/countdowntimer">CountdownTimer</Link>

                                            </Typography>
                                        </CardContent>
                                        <div className={classes.musicgif}>
                                            
                                        </div>
                                    </div>
                                    <CardMedia
                                        className={classes.cover}
                                        image="/static/2.jpg"
                                        title="Music picture"
                                    />
                                </Card>
                                <Card button elevation = {3} className = {classes.card}>
                                    <div className={classes.portfolioDetails}>
                                        <CardContent className={classes.portfolioContent}>
                                            <Typography component="h5" variant="h5">
                                                Portfolio
                                            </Typography>
                                        </CardContent>
                                        <div className={classes.portfoliogif}>

                                        </div>
                                    </div>
                                </Card>
                            </Grid>
                        </Collapse>
                    </div>
                </AppBar>
            </div>
    );
}
  

  
