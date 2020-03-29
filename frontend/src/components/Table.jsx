import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen', 159, 6.0, 24, 0),
  createData('Ice cream', 237, 9.0, 37, 3),
  createData('Eclair', 262, 16.0, 24, 0),
  createData('Cupcake', 305, 3.7, 67, 0),
  createData('Gingerbread', 356, 16.0, 49, 0),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Province</TableCell>
            <TableCell align="right" className="text-danger">Confirm</TableCell>
            <TableCell align="right">Active</TableCell>
            <TableCell align="right">Recover</TableCell>
            <TableCell align="right">Dead</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right" className="text-danger">{row.calories}</TableCell>
              <TableCell align="right" className="text-primary">{row.fat}</TableCell>
              <TableCell align="right" className="text-success">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
