import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import { Link} from "react-scroll";
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PersonIcon from '@material-ui/icons/Person';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import WebIcon from '@material-ui/icons/Web';



const useStyles = makeStyles({
  list: {
    width: 250,
    color: 'white',
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    width: 65,
    height: 65,
    margin: 5,
    color: 'white',
    transition: 'color',
    transitionDuration: '.5s',
    "&:hover": {
        color: 'gray'
    }
  },
  
});

export default function Navigation() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'left',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List style={{backgroundColor: 'black'}}>
        {['About', 'Music', 'Portfolio'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index === 0 ? <PersonIcon style={{color: 'white'}}/> : index === 1 ? <MusicNoteIcon style={{color: 'white'}}/>: <WebIcon style={{color: 'white'}}/>}</ListItemIcon>
            <Link 
            activeClass="active"
            to={text}
            spy={true}
            smooth={true}
            duration={50} 
            onClick={toggleDrawer(anchor, false)}
            style={{font: 'monospace'}}
            >
            <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        <ListItem style={{height: 445}}></ListItem>
      </List>
      <Divider style={{color: 'white'}}/>
      <List style={{backgroundColor: 'black'}}>
        {['Contact'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon><MailIcon style={{color: 'white'}}/></ListItemIcon>
            <Link 
            activeClass="active"
            to={text}
            spy={true}
            smooth={true}
            duration={50} 
            onClick={toggleDrawer(anchor, false)}
            style={{font: 'monospace'}}
            >
            <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
        <ListItem style={{height: 96}}></ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon className = {classes.icon} onClick={toggleDrawer(anchor, true)}>{anchor}</MenuIcon>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
