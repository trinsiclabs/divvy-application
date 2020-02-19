import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import React from 'react';

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
}

const TableComponent = props => {
  const classes = useStyles();

  return (
    <Table
      id={props.id}
      className={classes.table}
    >
      <TableHead>
        {getRow(props.head)}
      </TableHead>
      <TableBody>
        {props.body.map(getRow)}
      </TableBody>
    </Table>
  );
};

TableComponent.propTypes = {
  id: PropTypes.string,
  head: PropTypes.array.isRequired,
  body: PropTypes.array.isRequired,
};

TableComponent.defaultProps = {
  id: null,
};

export default TableComponent;
