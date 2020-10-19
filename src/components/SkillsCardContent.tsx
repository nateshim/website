import React, {PropsWithChildren} from 'react';
import Typography from '@material-ui/core/Typography';
import StyledProps from '../props/StyledProps';
import SkillsCardContentProps from '../props/SkillsCardContentProps';
import {withStyles, createStyles} from '@material-ui/styles';
import {Theme} from '@material-ui/core';

const SkillsCardContent = (props: PropsWithChildren<StyledProps> & SkillsCardContentProps) => {
    const classes = props.classes;
    return(
        <ul>
           {props.items.map((value : any) => {
               return <li><Typography className={classes.text}>{value}</Typography></li>
           })}
        </ul>
    );
}

const useStyles = (theme: Theme) => createStyles({
    text: {
      fontFamily: 'Montserrat',
      color: '#12130F',
      fontSize: '1.25rem',
      padding: '.5rem',
      marginRight: '2rem',
      cursor: 'default',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
        justifyContent: 'center'
    }
    },
  });
  
  export default withStyles(useStyles)(SkillsCardContent);