import React, {useState, PropsWithChildren} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import StyledProps from '../props/StyledProps';
import ProjectCardProps from '../props/ProjectCardProps';
import {withStyles, createStyles} from '@material-ui/styles';
import {useSpring, animated} from 'react-spring';
import {Theme} from '@material-ui/core';




const ProjectCard = (props: PropsWithChildren<StyledProps> & ProjectCardProps) => {
    const classes = props.classes;
    const calc = 1.05
    const trans : any = (s : any) : any => `perspective(1rem) scale(${s})`    
    const [properties, set] = useSpring(() => ({ s: 1, config: { mass: 5, tension: 700, friction: 40 } }))
    const[isShowing, setIsShowing] = useState(false);
    
    return(
        <Grid className={classes.grid} item xs={12} lg={6}>
            <a href={props.link} rel="noopener noreferrer" target="_blank">
                <animated.div
                onMouseMove={() => set({ s: calc })}
                onMouseLeave={() => set({ s: 1 })}
                style={{ transform: properties.s.interpolate(trans)}}
                >
                    <Card className={classes.card} style={{backgroundColor: props.color}}>
                        <Typography className={classes.text}>
                            {isShowing && (props.title)}
                        </Typography>
                        <div className={classes.picture} onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
                            <CardMedia component="img" className={classes.media} image={(props.background)}/>
                        </div>
                    </Card>
                </animated.div>
            </a>
        </Grid>
    );
}

const useStyles = (theme: Theme) => createStyles({
    grid: {
        display: 'flex',
    },
    text: {
      position: 'absolute',
      fontFamily: 'Montserrat',
      color: '#F7F3F2',
      textAlign: 'left',
      fontSize: '1.5rem',
      padding: '1rem',
      [theme.breakpoints.down('xs')]: {
        fontSize: '2vw',
      }
    },
    picture: {
        opacity: 1,
        transitionDuration: '.5s',
        '&:hover': {
            opacity: 0,
            transitionDuration: '.5s',
        },
        
    },
    media: {
        height: '500px',
        [theme.breakpoints.down('xs')]: {
            height: '200px',
            objectFit: 'cover',
        },
        
    },
  });
  
  export default withStyles(useStyles)(ProjectCard);