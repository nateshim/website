import React, {PropsWithChildren} from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import StyledProps from '../props/StyledProps';
import SkillsCardProps from '../props/SkillsCardProps';
import {withStyles, createStyles} from '@material-ui/styles';
import {useSpring, animated} from 'react-spring';
import { Theme } from '@material-ui/core';

const SkillsCard = (props: PropsWithChildren<StyledProps> & SkillsCardProps) => {
    const classes = props.classes;
    const calc = 1.05
    const trans : any = (s : any) : any => `perspective(1rem) scale(${s})`    
    const [properties, set] = useSpring(() => ({ s: 1, config: { mass: 5, tension: 700, friction: 40 } }))

    return(
      <Grid item xs={12} sm={12} md={6} lg={3} style={{display: 'flex', justifyContent: 'center'}}>
            <animated.div
            onMouseMove={() => set({ s: calc })}
            onMouseLeave={() => set({ s: 1 })}
            style={{ display: 'flex', transform: properties.s.interpolate(trans) }}
            >
                <Card className={classes.card}>
                    <CardContent>
                        <img className={classes.icon} src={props.icon} alt="reacticon"/>
                        <Divider/>
                        <Typography className={classes.text}>{props.title}</Typography>
                        {props.children}
                    </CardContent>
                </Card>
            </animated.div>
      </Grid>
    );
}

const useStyles = (theme: Theme) => createStyles({
    text: {
      fontFamily: 'Montserrat',
      color: '#12130F',
      fontSize: '1.5rem',
      textAlign: 'center',
      padding: '1rem',
      cursor: 'default',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
    },
    icon: {
      height: '10vw',
      width: '10vw',
    },
    card: {
      [theme.breakpoints.down('xs')]: {
        width: '300px',
      },
    }
  });
  
  export default withStyles(useStyles)(SkillsCard);