import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
//import DashboardIcon from '@material-ui/icons/Dashboard';
//import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SimCardIcon from '@material-ui/icons/SimCard';
import GroupIcon from '@material-ui/icons/Group';
import {Link} from 'react-router-dom';
export default function menubar(props){


    return(
            <div>
                    <Link to = "/sim"
                          style={{textDecoration: 'none',color:"black"}}
                    >
                        <ListItem button >
                            <ListItemIcon>
                                <SimCardIcon />
                            </ListItemIcon>
                                <ListItemText primary="Sim" />
                            </ListItem>
                    </Link>

                    <Link to = "/user"
                          style={{textDecoration: 'none',color:"black"}}
                    >
                        <ListItem button>
                            <ListItemIcon>
                                <GroupIcon />
                            </ListItemIcon>
                                <ListItemText primary="User" />
                            </ListItem>
                    </Link>
            </div>
            
    )
}