import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Container, Toolbar, Fab, Paper, Table, TableHead, TableCell, TableBody, TableRow } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Header from '../../layout/Header/Header';
import styles from './Tables.module.scss';

const intervals = ['12:00', '12:30', '13:00'];

const tables = [
  {id: 1, bookings: {
    '12:00': {hour: '12:00', booked: false, bookingId: null},
    '12:30': {hour: '12:30', booked: false, bookingId: null},
    '13:00': {hour: '13:00', booked: false, bookingId: null},
  }, events: {
    '12:00': {hour: '12:00', booked: true, eventId: 1},
    '12:30': {hour: '12:00', booked: true, eventId: 2},
    '13:00': {hour: '12:00', booked: true, eventId: 3},
  }},
  {id: 2, bookings: {
    '12:00': {hour: '12:00', booked: true, bookingId: 1},
    '12:30': {hour: '12:30', booked: false, bookingId: null},
    '13:00': {hour: '13:00', booked: false, bookingId: null},
  }, events: {
    '12:00': {hour: '12:00', booked: false, eventId: null},
    '12:30': {hour: '12:00', booked: false, eventId: null},
    '13:00': {hour: '12:00', booked: true, eventId: 4},
  }},
  {id: 3, bookings: {
    '12:00': {hour: '12:00', booked: false, bookingId: null},
    '12:30': {hour: '12:30', booked: false, bookingId: null},
    '13:00': {hour: '13:00', booked: false, bookingId: null},
  }, events: {
    '12:00': {hour: '12:00', booked: false, eventId: null},
    '12:30': {hour: '12:00', booked: false, eventId: null},
    '13:00': {hour: '12:00', booked: true, eventId: 5},
  }},
  {id: 4, bookings: {
    '12:00': {hour: '12:00', booked: false, bookingId: null},
    '12:30': {hour: '12:30', booked: true, bookingId: 2},
    '13:00': {hour: '13:00', booked: true, bookingId: 3},
  }, events: {
    '12:00': {hour: '12:00', booked: false, eventId: null},
    '12:30': {hour: '12:00', booked: false, eventId: null},
    '13:00': {hour: '12:00', booked: false, eventId: null},
  }},
];

const Tables = ({ id }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  return (
    <Container maxWidth='lg'>
      <Header title='Tables' />
      <Toolbar />
      <Paper className={styles.component}>
        <div className={styles.datePicker}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
            />
            <TimePicker
              clearable
              ampm={false}
              value={selectedDate}
              onChange={handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hour/Table</TableCell>
              {tables.map(table => (
                <TableCell key={table.id}>{table.id}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {intervals.map(i => {
              return (
                <TableRow key={i}>
                  <TableCell>{i}</TableCell>
                  {tables.map(table => {
                    const isBooked = table.bookings[i].booked;
                    const isEvent = table.events[i].booked;
                    return (
                      <TableCell key={table.id}>{isBooked ?
                        <Link to={`${process.env.PUBLIC_URL}/tables/booking/${table.bookings[i].bookingId}`}>booked</Link>
                        : isEvent ? <Link to={`${process.env.PUBLIC_URL}/tables/events/${table.events[i].eventId}`}>event</Link>
                          : null}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <div className={styles.buttonRow}>
          <Fab variant="extended" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`}>
            <AddIcon />
            New booking
          </Fab>
          <Fab variant="extended" color="primary" component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`}>
            <AddIcon />
            New event
          </Fab>
        </div>
      </Paper>
    </Container>
  );
};

Tables.propTypes = {
  id: PropTypes.string,
};

export default Tables;
