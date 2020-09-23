import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
//import CardActions from '@material-ui/core/CardActions';
//import Collapse from '@material-ui/core/Collapse';
import { Link } from "@material-ui/core";

import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 442,
  }
 
  
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    const value = props.value;
    console.log(props)
  return (
    <Card className={classes.root}>
        <CardHeader>

        </CardHeader>
      <CardContent>
        <Typography variant="body2" component="p">
          Channel: {value.channel_id}
        </Typography>
        <Typography variant="body2" component="p">
          Country: {value.postal_code}
        </Typography>
        <Typography variant="body2" component="p">
          Sim: {value.sim_number}
        </Typography>
        <Typography variant="body2" component="p">
          Number Of Executors: {props.count}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" component="p">
         URL:    
            <Link href={value.correspond_apicall}>
                {value.correspond_apicall}
            </Link> 
         
        </Typography>
      </CardContent>
      
    </Card>
  );
}
