import React from 'react';
import PropTypes from 'prop-types';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import AddIcon from '@material-ui/icons/Add';
import { Checkbox } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import DialogActions from '@material-ui/core/DialogActions';    
import Button from '@material-ui/core/Button';
import { DialogContent } from '@material-ui/core';
/* import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel'; */

import { Table, TableBody, TableRow, TableCell } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
  dialog: {
      minWidth: 350,
  },
  dialog_content: {
      padding: 0,
  },
  dialog_title:{
    color: theme.palette.primary.main 
  }
}));

/* const ColorTableRow = withStyles((theme) => ({
  root: {

   
    '&$selected': {
      backgroundColor: "rgba(25, 118, 210, 0.08)",
    },
  },
  selected: {},
}))((props) => <TableRow {...props} />); */

const CustomCheckbox = withStyles((theme) => ({
  root: {
    color: theme.palette.primary.light,
    '&$checked': {
      color: theme.palette.primary.main,
    },
  },
  checked: {},
}))((props) => <Checkbox color="default" {...props} />);

export default function SimpleDialog(props) {
  const classes = useStyles();
  
  // const { onClose, selectedValue } = props;  
  const value = props.value;
  const checked = props.checked;
  const onClick = props.onChange


  return (
    <Dialog  onClose={props.onClose} aria-labelledby="simple-dialog-title" open={props.open}>
      <DialogTitle className={classes.dialog_title} id="dialog-title" >Add manager to channel</DialogTitle>
        <DialogContent className={classes.dialog_content}>
            {/* {<FormControl component="fieldset" className={classes.formControl}>
                <FormGroup>
                {value.map((item) => (
                    <FormControlLabel
                        control={<Checkbox checked={checked.indexOf(item.id) !== -1} onChange={props.onChange} value={item.id} name={item.id}/>}
                        label={item.user_name}
                    />
                ))}
                
                </FormGroup>
                
            </FormControl>} */}
            {<Table>
              <TableBody>
                {value.map((item) => (
                  
                  <TableRow
                    hover
                    onClick={onClick} 
                    name={item.id}
                    role="checkbox"
                    tabIndex={-1}
                    id={item.id}
                    key={item.id}
                  > 
                    <TableCell align="left">
                      <CustomCheckbox checked={checked.indexOf(item.id) !== -1} inputProps={{ 'id': item.id }}/>
                    </TableCell>
                    <TableCell component="th" id={item.id} scope="row" padding="none">{item.user_name}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>}

        </DialogContent>
        <DialogActions>
    
          <Button variant="contained" onClick={props.Confirm}  color="primary" disabled={props.disabled} startIcon={<AddIcon />}>
            Add
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

