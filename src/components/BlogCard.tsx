import React, {PropsWithChildren} from 'react';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Divider from '@material-ui/core/Divider';
import StyledProps from '../props/StyledProps';
import BlogCardProps from '../props/BlogCardProps';
import {withStyles, createStyles} from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const BlogCard = (props: PropsWithChildren<StyledProps> & BlogCardProps) => {
    const classes = props.classes;
    return(
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.text}>{props.title}</Typography>
                <Typography className={classes.subtext}>{props.subtitle}</Typography>
                <Divider/>
                {props.children}
            </CardContent>
        </Card>
    );
}

const useStyles = (theme: Theme) => createStyles({
    text: {
      fontFamily: 'Montserrat',
      color: '#12130F',
      fontSize: '2rem',
      textAlign: 'center',
      cursor: 'default',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.25rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.25rem',
      },
    },
    subtext: {
        fontFamily: 'Montserrat',
        opacity: '.5',
        color: '#12130F',
        fontSize: '1rem',
        textAlign: 'center',
        cursor: 'default',
        [theme.breakpoints.down('sm')]: {
          fontSize: '.75rem',
        },
        [theme.breakpoints.down('md')]: {
          fontSize: '.75rem',
        },
      },
    icon: {
      height: '10vw',
      width: '10vw',
    },
    card: {
      [theme.breakpoints.down('xs')]: {
        width: '60vw',
      },
    }
  });
  
  export default withStyles(useStyles)(BlogCard);