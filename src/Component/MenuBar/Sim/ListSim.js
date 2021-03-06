import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import TablePagination from '@material-ui/core/TablePagination';


import Title from "../../Title/Title";
import Loading from "../../Loading/Loading";

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
    maxWidth: 20,
  }
});

export default function CustomizedTables(props) {
  const classes = useStyles();
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [page, setPage] = React.useState(0);
  const data = props.data;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <React.Fragment>
      <Title>
        Sim
      </Title>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Sim Number</StyledTableCell>
              <StyledTableCell align="right">Gateway</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Number of Shop</StyledTableCell>
     
            </TableRow>
          </TableHead>
           
          <TableBody>
          <Loading value={data} />
            {(rowsPerPage > 0
                ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : data
              ).map((item) => (
              <StyledTableRow  key={item.sim_number}>    
                <StyledTableCell className={classes.column1} scope="row1">
                  <Link href={"http://localhost:3000/sim/" + item.sim_number} >
                      {item.sim_number}
                  </Link>
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.tty_gateway}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.status}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {item.number_of_shop}
                </StyledTableCell>
               
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        
          
        
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          
        
      </TableContainer>
    </React.Fragment>
  );
}
