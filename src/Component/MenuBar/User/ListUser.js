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
//import Typography from "@material-ui/core/Typography";
import {Link} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
//import Toolbar from '../../../ToolBar/toolbar';

const useStyles = makeStyles((theme) =>({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  }
}));

export default function Orders(props) {
  const classes = useStyles();
  const data = props.value;
  const ButtonAdd = function(){
    if(props.role === 'executor'){
      return null
    }
    return props.button
  };
  return (
    <React.Fragment>
   
        
      <TableContainer className={classes.container} component = {Paper}>
      {ButtonAdd()}
      <Table size="medium" stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
          <TableCell>Id</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Number shops</TableCell>
            <TableCell >Activate</TableCell>
            <TableCell align= "right" >Last login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id} hover role="checkbox">
              <TableCell>
                  {row.id}
              </TableCell>
              <TableCell>
                <Link style={{textDecoration:"underline"}} to = {"/user/" + row.id +"/"+ to_slug(`${row.username}`)}>
                  {row.username}
                </Link>
              </TableCell>
              <TableCell>
                  2
              </TableCell>
              <TableCell>{row.disabled}</TableCell>
              <TableCell align ="right">{row.last_login}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
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
  //str = str.replace(/([^0-9a-z-\s])/g, '');

  // Xóa khoảng trắng thay bằng ký tự -
  str = str.replace(/(\s+)/g, '-');

  // xóa phần dự - ở đầu
  str = str.replace(/^-+/g, '');

  // xóa phần dư - ở cuối
  str = str.replace(/-+$/g, '');

  // return
  return str;
}