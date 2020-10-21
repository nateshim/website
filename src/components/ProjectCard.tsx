import React, {useState, PropsWithChildren} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import StyledProps from '../props/StyledProps';
import ProjectCardProps from '../props/ProjectCardProps';
import {withStyles, createStyles} from '@material-ui/styles';
import {useSpring, animated} from 'react-spring';




const ProjectCard = (props: PropsWithChildren<StyledProps> & ProjectCardProps) => {
    const classes = props.classes;
    const calc = 1.05
    const trans : any = (s : any) : any => `perspective(1rem) scale(${s})`    
    const [properties, set] = useSpring(() => ({ s: 1, config: { mass: 5, tension: 700, friction: 40 } }))
    const[isShowing, setIsShowing] = useState(false);
    
    return(
        <Grid item xs={6}>
            <a href={props.link} rel="noopener noreferrer" target="_blank">
                <animated.div
                onMouseMove={() => set({ s: calc })}
                onMouseLeave={() => set({ s: 1 })}
                style={{ transform: properties.s.interpolate(trans) }}
                >
                    <Card className={classes.card} style={{backgroundColor: props.color}}>
                        <Typography className={classes.text}>
                            {isShowing && (props.title)}
                        </Typography>
                        <div className={classes.picture} onMouseEnter={() => setIsShowing(true)} onMouseLeave={() => setIsShowing(false)}>
                            <CardMedia component="img" image={(props.background)}/>
                        </div>
                    </Card>
                </animated.div>
            </a>
        </Grid>
    );
}

const useStyles = createStyles({
    text: {
      position: 'absolute',
      fontFamily: 'Montserrat',
      color: '#F7F3F2',
      textAlign: 'left',
      fontSize: '1.5rem',
      padding: '1rem',
      width: '100%',
    },
    picture: {
        height: '100%',
        width: '100%',
        opacity: 1,
        transitionDuration: '.5s',
        '&:hover': {
            opacity: 0,
            transitionDuration: '.5s',
        },
    },
    card: {
        position: 'relative',
        height: '100%',
        width: '100%',
    },
  });
  
  export default withStyles(useStyles)(ProjectCard);