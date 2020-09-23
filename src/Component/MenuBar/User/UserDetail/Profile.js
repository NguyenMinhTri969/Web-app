import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxHeight: 442,
    
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const value = props.value;
  console.log(value)

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {value.user_name}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={value.first_name + value.last_name ? value.firstname + ' ' + value.lastname : 'Name'}
        subheader={"Role: " + value.role} 
      />

      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
             Activate: {value.activate}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
             Last Login: {value.last_login}
        </Typography>
      </CardContent>
      
      
    </Card>
  );
}
