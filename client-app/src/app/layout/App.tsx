import React from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ApplicationDashboard from '../../features/applications/dashboard/ApplicationDashboard';
import { observer } from 'mobx-react-lite';
import { Route, Switch } from 'react-router';
import HomePage from '../../features/home/HomePage';
import ApplicationDetails from '../../features/applications/details/ApplicationDetails';

function App() {
  return (
    <>
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
              </Switch>
            </Container>
          </>
        )}
      />
    </>
  );
}

export default observer(App);
