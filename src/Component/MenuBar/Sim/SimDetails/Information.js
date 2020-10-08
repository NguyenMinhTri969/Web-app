import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
//import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 442,
  }
 
  
}));

export default function RecipeReviewCard(props) {
    const classes = useStyles();
    
   
  return (
    <Card className={classes.root}>
      <CardContent>
        
        <Typography variant="body2" component="p">
          Gateway: {props.information.tty_gateway} 
        </Typography>
        <Typography variant="body2" component="p">
          Status: {props.information.status}
        </Typography>
        
      </CardContent>
      
    </Card>
  );
}
