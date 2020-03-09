import React from 'react';
/* Import JS */
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Dashboard from './components/views/Dashboard/Dashboard';
import Login from './components/views/Login/Login';
import Tables from './components/views/Tables/Tables';
import Waiter from './components/views/Waiter/Waiter';
import Order from './components/views/Waiter/Order';
import NewOrder from './components/views/Waiter/NewOrder';
import Kitchen from './components/views/Kitchen/Kitchen';
import Booking from './components/views/Tables/Booking';
import NewBooking from './components/views/Tables/NewBooking';
import NewEvent from './components/views/Tables/NewEvent';
import Event from './components/views/Tables/Event';
import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


import styles from './styles/App.module.scss';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2B4C6F',
    },
    //secondary: {
    //  main: '#11cb5f',
    //},
  },
});

function App() {
  return (
    <BrowserRouter basename={'/panel'}>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          <MainLayout>
            <Switch>
              <Route exact path={`${process.env.PUBLIC_URL}/`} component={Dashboard} />
              <Route exact path={`${process.env.PUBLIC_URL}/login`} component={Login} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables`} component={Tables} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter`} component={Waiter} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/new`} component={NewOrder} />
              <Route exact path={`${process.env.PUBLIC_URL}/waiter/order/:id`} component={Order} />
              <Route exact path={`${process.env.PUBLIC_URL}/kitchen`} component={Kitchen} />
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/new`} component={NewBooking}/>
              <Route exact path={`${process.env.PUBLIC_URL}/tables/booking/:id`} component={Booking}/>
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/new`} component={NewEvent}/>
              <Route exact path={`${process.env.PUBLIC_URL}/tables/events/:id`} component={Event}/>
            </Switch>
          </MainLayout>
        </ThemeProvider>
      </StylesProvider>
    </BrowserRouter>
  );
}

export default App;
