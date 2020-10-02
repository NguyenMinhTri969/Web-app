import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { Checkbox } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import DialogActions from '@material-ui/core/DialogActions';    
import Button from '@material-ui/core/Button';
import { DialogContent } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
      minWidth: 350,
  }
});

export default function SimpleDialog(props) {
  const classes = useStyles();
  
  // const { onClose, selectedValue } = props;  
  const value = props.value;
  const checked = props.checked;
    console.log(checked)

  return (
    <Dialog  onClose={props.close} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle id="simple-dialog-title">Set manager to channel</DialogTitle>
        <DialogContent>
            <FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                {value.map((item) => (
                    <FormControlLabel
                        control={<Checkbox onChange={props.onChange} value={item.id} name={item.id}/>}
                        label={item.user_name}
                    />
                ))}
                
                </FormGroup>
                
            </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onSubmit} color="primary">
            <AddIcon />
          </Button>
        </DialogActions>               
    </Dialog>

  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.bool.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

