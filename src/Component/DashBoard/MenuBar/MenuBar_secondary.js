import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import PublicIcon from '@material-ui/icons/Public';
import DeviceHubIcon from '@material-ui/icons/DeviceHub';
import ShopIcon from '@material-ui/icons/Shop';
import {Link} from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
      <div>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Configuration" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to = "/channel"
                          style={{textDecoration: 'none',color:"black"}}
                    >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <DeviceHubIcon />
              </ListItemIcon>
              <ListItemText primary="Channel" />
            </ListItem>
          </Link>
          <Link to = "/shops"
                          style={{textDecoration: 'none',color:"black"}}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <ShopIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItem>
          </Link>
          <Link to = "/countrys"
                          style={{textDecoration: 'none',color:"black"}}
          >
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <PublicIcon />
              </ListItemIcon>
              <ListItemText primary="Country" />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      </div>
  );
}