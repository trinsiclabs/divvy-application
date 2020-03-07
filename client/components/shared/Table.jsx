import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 650,
  },
}));

const getCell = (cell, index = 0) => {
  return (
    <TableCell key={index.toString()}>
      {cell}
    </TableCell>
  );
};

const getRow = (cells, index = 0) => {
  return (
    <TableRow key={index.toString()}>
      {cells.map(getCell)}
    </TableRow>
  );
};

const TableComponent = props => {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Table
      id={props.id}
      className={classes.table}
    >
      <TableHead>
        {getRow(props.head)}
      </TableHead>
      <TableBody>
        {(props.pagination
          ? props.body.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          : props.body
        ).map(getRow)}
      </TableBody>
      {props.pagination &&
        <TableFooter>
          <TableRow>
            <TablePagination
              count={props.body.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      }
    </Table>
  );
};

TableComponent.propTypes = {
  id: PropTypes.string,
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
  pagination: PropTypes.bool,
};

TableComponent.defaultProps = {
  id: null,
  pagination: false,
};

export default TableComponent;
