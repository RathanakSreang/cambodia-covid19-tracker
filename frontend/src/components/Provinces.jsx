import React from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import isEmpty from "lodash/isEmpty";
import orderBy from "lodash/orderBy";

const headCells = [
  { id: 'name', numeric: false, className: "", label: 'Province' },
  { id: 'confirmed', numeric: true, className: "text-danger", label: 'Confirmed' },
  { id: 'active', numeric: true, className: "text-primary", label: 'Active' },
  { id: 'recovered', numeric: true, className: "text-success", label: 'Recovered' },
  { id: 'dead', numeric: true, className: "", label: 'Dead' },
];

function EnhancedTableHead(props) {
  const { order, orderField, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding='default'
            sortDirection={orderField === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderField === headCell.id}
              direction={orderField === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
              className={headCell.className}
            >
              {headCell.label}
              {orderField === headCell.id ? (
                <span className="">
                  {order === 'desc' ? '' : ''}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}


@connect((store) => {
  return {
    provinces: store.dashboardReducers.provinces
  };
}, {})
class Provinces extends React.Component {
  state = {
    order: 'desc',
    orderField: 'confirmed',
  }
  handleRequestSort = (event, property) => {
    const {orderField, order} = this.state;
    const isAsc = orderField === property && order === 'asc';
    this.setState({order: isAsc ? 'desc' : 'asc'});
    this.setState({orderField: property});
  }

  render() {
    let {provinces} = this.props;
    const {orderField, order} = this.state;
    if(isEmpty(provinces)) {
      return(<div/>);
    }

    provinces = orderBy(provinces, orderField, order);

    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <EnhancedTableHead
            order={order}
            orderField={orderField}
            onRequestSort={this.handleRequestSort}
            rowCount={provinces.length}
          />
          <TableBody>
            {provinces.map(row => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right" className="text-danger">{row.confirmed}</TableCell>
                <TableCell align="right" className="text-primary">{row.active}</TableCell>
                <TableCell align="right" className="text-success">{row.recovered}</TableCell>
                <TableCell align="right">{row.dead}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Provinces;
