import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import { Checkbox } from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

const StyledTableCell = withStyles((theme) => ({
  head: {
    fontWeight: "bold",
    fontSize: 18,
   
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  
}))(TableRow);



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button_menu: {
    padding: theme.spacing(0),
    margin: theme.spacing(0, 0, 2, 0),
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row" 
  },
  button: {
    marginLeft: theme.spacing(2),
    minWidth: 164,
  }
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  const value = props.value;
  return (
    <React.Fragment>
      <Container className={classes.button_menu}>
        <Button
          className={classes.button}
          variant="contained" 
          color="secondary"
          startIcon={<DeleteIcon />}
          disabled={props.disabled}
          onClick={props.onDelete}
        >
          DELETE
        </Button>
        <Button
          className={classes.button}
          variant="contained" 
          color="primary"
          startIcon={<AddIcon />}
          onClick={props.openListManager}
        >
          Add Manager
        </Button>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell padding="checkbox">
                
              </StyledTableCell>
              <StyledTableCell align="left">Id</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Last Login</StyledTableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {value.map((item) => (
              <StyledTableRow 
                hover
                onClick={props.onChange} 
                name={item.id}
                role="checkbox"
                tabIndex={-1}
                id={item.id}    
                selected={props.data.indexOf(item.id) !== -1}
              >
                <StyledTableCell padding="checkbox" component="th" scope="row">
                  <Checkbox checked={props.data.indexOf(item.id) !== -1}/>
                </StyledTableCell>
                <StyledTableCell component="th" id={item.id} scope="row">
                  {item.user_name}
                </StyledTableCell>
                <StyledTableCell component="th" id={item.id} scope="row" align='right'>
                  {item.first_name}
                </StyledTableCell>
                <StyledTableCell component="th" id={item.id} scope="row" align='right'>
                  {item.last_name}
                </StyledTableCell>
                <StyledTableCell component="th" id={item.id} scope="row" align='right'>
                  {item.last_login}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
