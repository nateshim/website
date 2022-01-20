import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import './css/About.css';
import Typography from '@material-ui/core/Typography';
import { withStyles, createStyles } from '@material-ui/styles';
import StyledProps from './props/StyledProps';
import { Link as ScrollLink } from 'react-scroll';
import EmailIcon from '@material-ui/icons/Email';
import LinkedinIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightRoundedIcon from '@material-ui/icons/CopyrightRounded';
import { Theme } from '@material-ui/core';

const Contact = (props: StyledProps) => {
  const classes = props.classes;
  return (
    <Box className={classes.footer}>
      <Box display={'flex'}>
        <Container maxWidth="lg" className={classes.contact}>
          <Box display={'block'}>
            <Box className={classes.contactBox}>
              <ScrollLink
                style={{ cursor: 'pointer' }}
                to="nateshim"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className={classes.text}
              >
                Home
              </ScrollLink>
            </Box>
            {/* <Box className={classes.contactBox}>
              <ScrollLink
                style={{ cursor: 'pointer' }}
                to="about"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-150}
                duration={800}
                className={classes.text}
              >
                About
              </ScrollLink>
            </Box> */}
            <Box className={classes.contactBox}>
              <ScrollLink
                style={{ cursor: 'pointer' }}
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={800}
                className={classes.text}
              >
                Projects
              </ScrollLink>
            </Box>
          </Box>
        </Container>
        <Container maxWidth="lg" className={classes.contact}>
          <Box display={'block'}>
            <Box className={classes.contactBox}>
              <EmailIcon fontSize={'inherit'} className={classes.icon} />
              <a href="mailTo:nateshim@gmail.com" target="_blank" rel="noopener noreferrer" className={classes.link}>Email</a>
            </Box>
            <Box className={classes.contactBox}>
              <LinkedinIcon fontSize={'inherit'} className={classes.icon} />
              <a href="https://www.linkedin.com/in/nathanael-shim-324b55115/" target="_blank" rel="noopener noreferrer" className={classes.link}>Linkedin</a>
            </Box>
            <Box className={classes.contactBox}>
              <FacebookIcon fontSize={'inherit'} className={classes.icon} />
              <a href="https://www.facebook.com/nate.shim/" target="_blank" rel="noopener noreferrer" className={classes.link}>Facebook</a>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg" className={classes.copyRightContainer}>
        <Typography className={classes.subText}>
          <CopyrightRoundedIcon className={classes.copyRightIcon} fontSize="inherit" />
          2020 Nathanael Shim
        </Typography>
      </Container>
    </Box>
  );
}

const useStyles = (theme: Theme) => createStyles({
  contact: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '.5rem 0',
  },
  footer: {
    backgroundColor: '#8F8073',
  },
  contactTitle: {
    fontFamily: 'Montserrat',
    color: '#12130F',
    fontSize: '3rem',
  },
  text: {
    color: '#F7F3F2',
    fontSize: '1.5rem',
    paddingTop: '1rem',
    paddingLeft: '.5rem',
    textDecoration: 'none',
    textDecorationColor: '#8F8073',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
    },
  },
  link: {
    color: '#F7F3F2',
    fontSize: '1.5rem',
    paddingTop: '.3rem',
    paddingLeft: '.5rem',
    marginTop: '.25rem',
    textDecoration: 'none',
    textDecorationColor: '#8F8073',
    '&:hover': {
      textDecoration: 'underline',
      textDecorationColor: '#FEB954',
      transitionDuration: '.3s',
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      marginTop: '.7rem',
    },
  },
  subText: {
    fontFamily: 'Montserrat',
    color: '#F7F3F2',
    fontSize: '1rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '.5rem',
    },
  },
  contactBox: {
    display: 'flex',
    flexDirection: 'row',
    padding: '1rem',
  },
  icon: {
    color: '#F7F3F2',
    padding: '.5rem',
    fontSize: '2rem',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.5rem',
      padding: '0rem',
      paddingTop: '.75rem',
    },
  },
  copyRightContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    padding: '0.5rem',
  },
  copyRightIcon: {
    paddingRight: '0.2rem',
    paddingTop: '0.2rem',
  }
});

export default withStyles(useStyles)(Contact);
