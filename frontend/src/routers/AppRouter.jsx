import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import styled from 'styled-components';
import isEmpty from 'lodash/isEmpty';
import filter from "lodash/filter";
import includes from "lodash/includes";

import LoadingPage from '../screens/LoadingPage';
import NotFoundPage from '../screens/NotFoundPage';
import pageRoutes from './pageRoutes';

export const history = createBrowserHistory();

const Container = styled.div``;

@connect((store) => {
  return {
    currentUser: store.currentUserReducers.user,
    isOnboarding: store.currentUserReducers.isOnboarding,
    isAuthenticated: !isEmpty(store.currentUserReducers.user),
  };
}, {})
class AppRouter extends React.Component {
  componentDidMount() {
    document.title = "MOI";
  }

  render() {
    const {isOnboarding, currentUser} =  this.props;
    if(isOnboarding) {
      return(<LoadingPage/>)
    }

    const allowRoutes = filter(pageRoutes, (r) => (
      r.plublic || includes(r.allowRoles, currentUser.role)));

    return(
      <Router history={history}>
        <Container>
          <Switch>
            {
              allowRoutes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={(props) => {
                      return (
                        <route.layout {...props}>
                          <route.component {...props} />
                        </route.layout>
                      );
                    }}
                  />
                );
              })
            }
            <Route component={NotFoundPage} />
          </Switch>
        </Container>
      </Router>
    );
  }
}

export default AppRouter;
