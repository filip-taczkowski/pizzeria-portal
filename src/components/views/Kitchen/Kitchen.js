import React from 'react';
//import PropTypes from 'prop-types';

import {TableCell, TableRow, TableHead, Table, Paper, Toolbar, Container, TableBody, Button} from '@material-ui/core';
import Header from '../../layout/Header/Header';

import styles from './Kitchen.module.scss';

const mockContent = [
  {id: 1, tableOrder: '1', order: ['pizza', 'coffee'], status: 'ordered'},
  {id: 2, tableOrder: '2', order: ['salad', 'pizza'], status: 'done'},
  {id: 3, tableOrder: '3', order: ['pizza', 'coffee'], status: 'ready'},
  {id: 4, tableOrder: '3', order: ['pizza', 'beer'], status: 'ordered'},
  {id: 5, tableOrder: '2', order: ['pizza', 'coke'], status: 'ordered'},
];

const renderActions = status => {
  switch (status) {
    case 'ordered':
      return (
        <>
          <Button>Ready</Button>
        </>
      );
    default:
      return null;
  }
};

const Kitchen = () => {
  return (
    <Container maxWidth='lg'>
      <Header title='Kitchen Panel' />
      <Toolbar />
      <Paper className={styles.component}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Table</TableCell>
              <TableCell>Order details</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mockContent.map(row => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>{row.tableOrder}</TableCell>
                <TableCell>{row.order.join(', ')}</TableCell>
                <TableCell>{renderActions(row.status)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
};

export default Kitchen;
