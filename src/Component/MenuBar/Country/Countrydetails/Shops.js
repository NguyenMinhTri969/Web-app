import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';


import Loading from "../../../Loading/Loading";

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
  root: {
    /* '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    }, */
  },
}))(TableRow);



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
  column1: {
    maxWidth: 50,
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);

  const value = props.value;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Channel ID</StyledTableCell>
              <StyledTableCell align="right">Postal Code</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <Loading value={value}/>
            {(rowsPerPage > 0
                  ? value.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  : value
                ).map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className={classes.column1}component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.channel_id}
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {row.postal_code}
                </StyledTableCell>
                
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={value.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
              />
      </TableContainer>
    )
  
  
}
