import React from 'react';
import PropTypes from 'prop-types';

import { Container, Paper, Grid, Typography, Divider, Button, Table, TableBody, TableCell, TableRow } from '@material-ui/core';
import Header from '../../layout/Header/Header';

import styles from './Waiter.module.scss';

const menu = [
  {id: 1, dish: 'pizza', options: ['pepper,', 'onion', 'olives']},
  {id: 2, dish: 'coffee', options: ['milk', 'small', 'big', 'no-milk']},
  {id: 3, dish: 'salad', options: ['yellow cheese', 'goat cheese', 'tomato', 'cucumber', 'olives']},
];

const NewOrder = ({ match }) => {
  return (
    <Container>
      <Header title={`New order details`} />
      <Paper className={styles.component}>
        <Grid container spacing={3}>
          <Grid item xs={6} lg={3} container direction="column" justify="space-between" spacing={2}>
            <Grid item>
              <Paper>
                <Typography variant="h5">Table No.</Typography>
                <Divider />
                <Button><Typography variant="h3">1</Typography></Button>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Typography variant="h5">Value</Typography>
                <Divider />
                <Typography variant="h3">123$</Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={9} container direction="column" spacing={2}>
            <Grid item>
              <Paper>
                <Typography variant="h5">Menu</Typography>
                <Divider />
                <Table>
                  <TableBody>
                    {menu.map(row => (
                      <TableRow key={row.id} className={styles.tableRow}>
                        <TableCell><Typography variant="h6">{row.dish}</Typography></TableCell>
                        {row.options.map(option => (
                          <TableCell key={option}>{option}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} lg={12} container direction="column" spacing={2}>
            <Grid item>
              <Paper>
                <Typography variant="h5">Order</Typography>
                <Divider />
                <Table>
                  <TableBody>
                    {menu.map(row => (
                      <TableRow key={row.id} className={styles.tableRow}>
                        <TableCell><Typography variant="h6">{row.dish}</Typography></TableCell>
                        {row.options.map(option => (
                          <TableCell key={option}>{option}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

NewOrder.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default NewOrder;
