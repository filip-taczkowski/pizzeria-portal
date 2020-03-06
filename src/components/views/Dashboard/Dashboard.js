import React from 'react';
import PropTypes from 'prop-types';
/* Import JS */
import { Collapse, Paper, Table, TableHead, TableCell, TableBody, TableRow, Container, Toolbar, Divider, List, ListItem, ListItemText } from '@material-ui/core';
import { ExpandLess, ExpandMore } from '@material-ui/icons';
import Header from '../../layout/Header/Header';
/* Import styles */
import styles from './Dashboard.scss';

const bookings = [
  {id: 1, hour: '12:00', table: 1, ppl: 1},
  {id: 2, hour: '12:30', table: 2, ppl: 2},
  {id: 3, hour: '13:00', table: 2, ppl: 3},
];

const events = [
  {id: 1, hour: '15:00', table: 3, ppl: 5},
  {id: 2, hour: '16:30', table: 2, ppl: 1},
  {id: 3, hour: '17:00', table: 1, ppl: 3},
];

const orderStats = [
  {id: 1, value: 234},
  {id: 2, value: 657},
  {id: 3, value: 2},
  {id: 4, value: 4},
];

const Dashboard = () => {
  const [openEvents, setOpenEvents] = React.useState(true);
  const [openBooking, setOpenBookings] = React.useState(true);

  const handleClickEvents = () => {
    setOpenEvents(!openEvents);
  };

  const handleClickBooking = () => {
    setOpenBookings(!openBooking);
  };

  return (
    <Container>
      <Header title='Dashboard' />
      <Toolbar />
      <Paper className={styles.component}>
        <List>
          <ListItem>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>OrderNo</TableCell>
                  <TableCell>Order value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderStats.map(row => (
                  <TableRow key={row.id}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ListItem>
          <Divider />
          <ListItem button onClick={handleClickBooking}>
            <ListItemText primary="Bookings" />
            {openBooking ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={!openBooking} timeout="auto" unmountOnExit>
            <List>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hour</TableCell>
                    <TableCell>Table Number</TableCell>
                    <TableCell>Guests Number</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {bookings.map(booking => {
                    return(
                      <TableRow key={booking.id}>
                        <TableCell>
                          {booking.hour}
                        </TableCell>
                        <TableCell>
                          {booking.table}
                        </TableCell>
                        <TableCell>
                          {booking.ppl}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </List>
          </Collapse>
          <Divider />
          <ListItem button onClick={handleClickEvents}>
            <ListItemText primary="Events" />
            {openEvents ? <ExpandMore /> : <ExpandLess />}
          </ListItem>
          <Collapse in={!openEvents} timeout="auto" unmountOnExit>
            <List>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Hour</TableCell>
                    <TableCell>Table</TableCell>
                    <TableCell>Guests</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {events.map(event => {
                    return(
                      <TableRow key={event.id}>
                        <TableCell>
                          {event.hour}
                        </TableCell>
                        <TableCell>
                          {event.table}
                        </TableCell>
                        <TableCell>
                          {event.ppl}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </List>
          </Collapse>
        </List>
      </Paper>
    </Container>
  );
};

export default Dashboard;
