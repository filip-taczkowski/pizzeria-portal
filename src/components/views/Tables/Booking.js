import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tables.module.scss';
import { Container, Paper, Grid, Typography, Divider, FormControl, InputLabel, Select, MenuItem, FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
import { DatePicker, TimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import Header from '../../layout/Header/Header';
import DateFnsUtils from '@date-io/date-fns';

const demoStarters = ['water', 'snacks', 'cheese'];

const demoContent = [
  {id: 1, table: 2, ppl: 2, date:'2020-01-12T13:20', hour: '13:00', starters: ['water', 'snacks']},
];


const Booking = ({ match }) => {
  const [selectedDate, setSelectedDate] = React.useState(new Date(demoContent[0].date));
  const handleDateChange = date => {
    setSelectedDate(date);
  };

  const [value, setValue] = React.useState({
    tableValue: demoContent[0].table,
    guestValue: demoContent[0].ppl,
  });
  const handleValueChange = name => event => {
    setValue({...value, [name]: event.target.value});
  };

  const [checked, setChecked] = React.useState({
    checkedA: false,
    checkedB: false,
    checkedC: false,
  });

  const handleCheckboxChange = name => event => {
    setChecked({ ...checked, [name]: event.target.checked });
  };

  return (
    <Container>
      <Header title={`BookingNo. ${match.params.id} details`} />
      <Paper className={styles.component}>
        <Grid container spacing={6} >
          <Grid item lg={2} sm={12} container direction="column" justify="space-around">
            <Grid item>
              <Paper>
                <Typography variant="h6">ID</Typography>
                <Divider />
                <Typography variant="h3">{demoContent[0].id}</Typography>
              </Paper>
            </Grid>
            <Grid item alignContent="stretch">
              <Paper>
                <Typography variant="h6">Table</Typography>
                <Divider />
                <FormControl>
                  <InputLabel id="table"></InputLabel>
                  <Select
                    labelId="table"
                    id="table"
                    value={value.tableValue}
                    onChange={handleValueChange('tableValue')}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
            <Grid item>
              <Paper>
                <Typography variant="h6">Guests</Typography>
                <Divider />
                <FormControl>
                  <InputLabel id="guests"></InputLabel>
                  <Select
                    labelId="guests"
                    id="guests"
                    value={value.guestValue}
                    onChange={handleValueChange('guestValue')}
                  >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                  </Select>
                </FormControl>
              </Paper>
            </Grid>
          </Grid>
          <Grid item lg={5} container direction="column" alignContent="center">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                className={styles.datePicker}
                value={selectedDate}
                onChange={handleDateChange}
                autoOk
                orientation="portrait"
                variant="static"
                openTo="date"
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item lg={5} container direction="column" alignContent="center">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TimePicker
                autoOk
                ampm={false}
                variant="static"
                orientation="portrait"
                openTo="minutes"
                value={selectedDate}
                onChange={handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item container justify="center">
            <Paper>
              <Typography variant="h6">Starters</Typography>
              <Divider />
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={demoContent[0].starters.includes(demoStarters[0]) ? true : checked.checkedA}
                      onChange={handleCheckboxChange('checkedA')}
                      value={demoStarters[0]}
                      color="primary"
                    />
                  }
                  label={demoStarters[0]}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={demoContent[0].starters.includes(demoStarters[1]) ? true : checked.checkedB}
                      onChange={handleCheckboxChange('checkedB')}
                      value={demoStarters[1]}
                      color="primary"
                    />
                  }
                  label={demoStarters[1]}
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked={demoContent[0].starters.includes(demoStarters[2]) ? true : checked.checkedC}
                      onChange={handleCheckboxChange('checkedC')}
                      value={demoStarters[2]}
                      color="primary"
                    />
                  }
                  label={demoStarters[2]}
                />
              </FormGroup>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

Booking.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default Booking;
