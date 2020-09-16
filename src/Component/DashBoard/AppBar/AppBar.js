import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";
import { IconButton} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import { Typography} from "@material-ui/core";
import { Container} from '@material-ui/core';
import clsx from "clsx";
import { Badge} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AppBar } from "@material-ui/core";
import { Drawer } from "@material-ui/core";
import { Grid } from '@material-ui/core';
import { Divider } from '@material-ui/core';
//import { List } from "@material-ui/core";
import { Avatar } from "@material-ui/core";

import Menu1 from '../MenuBar/MenuBar_primary';
import Menu2 from '../MenuBar/MenuBar_secondary';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
    display: 'flex'
  },
  menuButton: {
    marginRight: 36
  },
  menuButtonHidden: {
    display: "none"
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {  // khi tat thanh menu
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: theme.palette.primary.main,
   
  },
  appBarShift: {    // khi mo thanh menu ben trai
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',

  },
  title: {
    flexGrow: 3,
  },
}))


function Dashboard(props){
  const classes = useStyles();
  
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return(
    <div className={classes.root}>
     <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}> 
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color='secondary'
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <div className={classes.title}>
            <Avatar
                src='https://www.epsilo.io/img/logo/epsilo-logo.png'          
                variant='rounded'
                style={{
                    width: '120px',
                    height: '40px',
                    margin: '10px 10px',
                }}
                //className={classes.title}
            >           
            </Avatar>
        </div>
        <Typography>
          Welcome {sessionStorage.getItem('email')}{sessionStorage.getItem('user')}
        </Typography>
        
        <Avatar
            
            variant='circle'>

        </Avatar>
        
        <IconButton 
            color="inherit"
            
        >
          <Badge badgeContent={4} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>

      </Toolbar>
    </AppBar>
    <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        {/* <List>{mainListItems}</List> */}
            <Menu1 />
        <Divider />
            <Menu2 />
      </Drawer>

      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
        {props.breadcrumb}
          <Grid container spacing={12}>
               {props.table}
          </Grid>
          {props.table_2}
        </Container>
          
      </main>   


    </div>
  )
}

export default Dashboard;