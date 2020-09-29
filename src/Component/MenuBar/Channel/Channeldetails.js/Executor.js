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
import AddIcon from '@material-ui/icons/Add';
import { Container } from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: '#3f51b5',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 700,
  },
  button: {
    padding: theme.spacing(0),
    margin: theme.spacing(0, 0, 1),
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row"
  }
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  const value = props.value;
  return (
    <React.Fragment>
      <Container className={classes.button}>
        <Button
          variant="contained" 
          color="primary"
          startIcon={<AddIcon />}
          onClick={props.addManager}
        >
          Add Manager
        </Button>
      </Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Role</StyledTableCell>
            
            </TableRow>
          </TableHead>
          <TableBody>
            {value.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.user_name}
                </StyledTableCell>
                <StyledTableCell align='right' scope="row">
                  {row.role}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
}
