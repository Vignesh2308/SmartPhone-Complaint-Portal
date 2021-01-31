
import { Route, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './hoc/errorBoundary';
import LoadingIndicator from './components/LoadingIndicator/LoadingIndicator'
import * as path from './common/path'
import LoginContainer from './containers/LoginContainer'
import HeaderComponent from './common/Header/index'
// import LandingContainer from './containers/LandingContainer/index';
import RegisterComplaintsContainer from './containers/UsersContainer/index';
import UserComplaintsContainer from './containers/AgentsContainer/index'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <LoadingIndicator />
        <HeaderComponent>
          <Switch>
            <Route exact path={path.LOGIN} component={LoginContainer} />
            {/* <Route path={path.LANDING} component={LandingContainer} /> */}
            <Route path={path.COMPLAINTS} component={RegisterComplaintsContainer} />
            <Route path={path.USER_COMPLAINTS} component={UserComplaintsContainer} />
          </Switch>
        </HeaderComponent>
      </ErrorBoundary>
    </div>
  );
}

export default App;
