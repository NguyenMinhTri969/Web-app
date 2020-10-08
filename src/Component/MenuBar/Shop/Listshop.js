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


import Loading  from "../../Loading/Loading";

import Title from "../../Title/Title";

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
  const value = props.value;


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const to_slug = (str) => {
    // Chuyển hết sang chữ thường
    str = str.toLowerCase();     
  
    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
    str = str.replace(/(đ)/g, 'd');
  
    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, '');
  
    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, '-');
  
    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, '');
  
    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, '');
  
    // return
    return str;
  }

  return (
    <React.Fragment>
      <Title>
        Shop
      </Title>
      
      <TableContainer component={Paper}>
        <Table className={classes.table} stickyHeader aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Country</StyledTableCell>
          
              <StyledTableCell align="right">Channel</StyledTableCell>
            </TableRow>
          </TableHead>
          <Loading value={value} />
          <TableBody>
            
            {(rowsPerPage > 0
                ? value.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                : value
              ).map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell className={classes.column1} component="th" scope="row">
                    <Link href={"http://localhost:3000/shops/" + row.id + "/" +  to_slug(`${row.name}`)}>
                    {row.name}
                  </Link>
                  
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row.postal_code}
                </StyledTableCell>
                
                <StyledTableCell align="right">
                  {row.channel_id}
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
    </ React.Fragment>
  );
}
