import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


class Waiter extends React.Component {
  static propTypes = {
    fetchTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool,PropTypes.string]),
    }),
    updateStatus: PropTypes.func,
    updateStatus2: PropTypes.func,
    tables: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  }

  componentDidMount() {
    const { fetchTables } = this.props;
    fetchTables();
  }

  renderActions(id, status) {
    switch (status) {
      case 'free':
        return (
          <>
            <Button onClick={() => this.props.updateStatus2(id,'thinking')}>thinking</Button>
            <Button onClick={() => this.props.updateStatus2(id, 'ordered')}>new order</Button>
          </>
        );
      case 'thinking':
        return (
          <Button onClick={() => this.props.updateStatus2(id, 'ordered')}>new order</Button>
        );
      case 'ordered':
        return (
          <Button onClick={() => this.props.updateStatus2(id, 'prepared')}>prepared</Button>
        );
      case 'prepared':
        return (
          <Button onClick={() => this.props.updateStatus2(id, 'delivered')}>delivered</Button>
        );
      case 'delivered':
        return (
          <Button onClick={() => this.props.updateStatus2(id, 'paid')}>paid</Button>
        );
      case 'paid':
        return (
          <Button onClick={() => this.props.updateStatus2(id, 'free')}>free</Button>
        );
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;
    const tablesArray = Array.from(tables);

    if(active || !tables.length){
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if(error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Container>
          <Toolbar />
          <Paper className={styles.component}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Table</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Order</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tablesArray.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      <Link to={`${process.env.PUBLIC_URL}/waiter/order/${row.id}`}>{row.id}</Link>
                    </TableCell>
                    <TableCell>
                      {row.status}
                    </TableCell>
                    <TableCell>
                      {row.order && (
                        <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                          {row.order}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell>
                      {this.renderActions(row.id, row.status)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Fab variant="extended" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/waiter/order/new`}>
              <AddIcon />
              New order
            </Fab>
          </Paper>
        </Container>
      );
    }
  }
}

export default Waiter;
