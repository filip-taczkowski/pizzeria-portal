import React from 'react';
//import PropTypes from 'prop-types';
/* Import JS */
import { Paper, Table, TableHead, TableCell, TableRow, Container } from '@material-ui/core';
/* Import styles */
import styles from './Dashboard.scss';

const Dashboard = () => {
  return (
    <Container className={styles.component}>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>New</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Ready</TableCell>
              <TableCell>In Delivery</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Done</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>
          </TableHead>
        </Table>
      </Paper>
      <Paper elevation={3}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>New</TableCell>
              <TableCell>Ordered</TableCell>
              <TableCell>Ready</TableCell>
              <TableCell>In Delivery</TableCell>
              <TableCell>Delivered</TableCell>
              <TableCell>Done</TableCell>
              <TableCell>Cancelled</TableCell>
            </TableRow>
          </TableHead>
        </Table>

      </Paper>
    </Container>
  );
};

export default Dashboard;
