import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ApplicationDashboard from '../../features/applications/dashboard/ApplicationDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ApplicationDetails from '../../features/applications/details/ApplicationDetails';
import TestErrors from '../../features/errors/TestError';
import { ToastContainer } from 'react-toastify';
import NotFound from '../../features/errors/NotFound';
import ServerError from '../../features/errors/ServerError';
import FeedbackForm from '../../features/feedback/FeedbackForm';
import LoginForm from '../../features/users/LoginForm';

function App() {
  return (
    <>
      <ToastContainer position='bottom-right' hideProgressBar />
      <Route exact path='/' component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Switch>
                <Route exact path='/apps' component={ApplicationDashboard} />
                <Route path='/apps/:id' component={ApplicationDetails} />
                <Route path='/feedback' component={FeedbackForm} />
                <Route path='/errors' component={TestErrors} />
                <Route path='/server-error' component={ServerError} />
                <Route path='/login' component={LoginForm} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
