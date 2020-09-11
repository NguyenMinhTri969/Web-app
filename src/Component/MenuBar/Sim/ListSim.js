import React from 'react';
//import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
//import TablePagination from '@material-ui/core/TablePagination';
import Title from '../../Title/Title';
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
//import Toolbar from '@material-ui/core/Toolbar';
//import Button from '@material-ui/core/Button';
//import AddCircleIcon from '@material-ui/icons/AddCircle';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount,status) {
  return { id, date, name, shipTo, paymentMethod, amount,status };
}

const rows = [
  createData(0, '16 Mar, 2019', '093229231', 'Tupelo', 'VISA ⠀•••• 3719', 312.44,'Not oke'),
  createData(1, '16 Mar, 2019', '023149231', 'London, UK', 'VISA ⠀•••• 2574', 866.99,'oke'),
  createData(2, '16 Mar, 2019', '055235299', 'Boston, MA', 'MC ⠀•••• 1253', 100.81,'oke'),
  createData(3, '16 Mar, 2019', '032655698', 'Gary, IN', 'AMEX ⠀•••• 2000', 654.39,'Not oke'),
  createData(4, '15 Mar, 2019', '254138746', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79,'oke'),
  createData(5, '16 Mar, 2019', '055235299', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,'Not oke'),
  createData(6, '16 Mar, 2019', '598745635', 'London, UK', 'VISA ⠀•••• 2574', 866.99,'oke'),
  createData(7, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79,'oke'),
  createData(8, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,'Not oke'),
  createData(9, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99,'oke'),
  createData(10, '15 Mar, 2019', 'Bruce Springsteen', 'Long Branch, NJ', 'VISA ⠀•••• 5919', 212.79,'oke'),
  createData(11, '16 Mar, 2019', 'Elvis Presley', 'Tupelo, MS', 'VISA ⠀•••• 3719', 312.44,'Not oke'),
  createData(12, '16 Mar, 2019', 'Paul McCartney', 'London, UK', 'VISA ⠀•••• 2574', 866.99,'oke')
];

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  button: {
    margin: theme.spacing(1),
  }
}));


export default function Orders() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title><h2>Sim</h2></Title>
      <TableContainer className={classes.container} component ={Paper}>
      <Table size="medium" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>Number</TableCell>
            <TableCell>Port</TableCell>
            <TableCell>Tty Gateway</TableCell>
            <TableCell>Shop</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} hover role="checkbox">
              <TableCell>
                {row.id} 
                </TableCell>
              <TableCell>
                <Link style={{textDecoration:"underline"}} to = {"/sim/"+ to_slug(`${row.name}`)}>{row.name}</Link>
              </TableCell>
              <TableCell>{row.shipTo}</TableCell>
              <TableCell>{row.paymentMethod}</TableCell>
              <TableCell>
                {row.amount}
                </TableCell>
              <TableCell align="right">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <caption>***Click Number views all information of number***</caption>
    </React.Fragment>
  );
}

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