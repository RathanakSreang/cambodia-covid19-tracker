import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import styled from 'styled-components';

import LoadingPage from '../screens/LoadingPage';
import NotFoundPage from '../screens/NotFoundPage';
import OfflineAlert from "./../components/OfflineAlert";
import pageRoutes from './pageRoutes';

export const history = createBrowserHistory();

const Container = styled.div``;

@connect((store) => {
  return {
    isOnboarding: store.commonReducers.isOnboarding,
  };
}, {})
class AppRouter extends React.Component {
  componentDidMount() {
    document.title = "កូវីដ១៩ខ្មែរ";
  }

  render() {
    const {isOnboarding} =  this.props;
    if(isOnboarding) {
      return(<LoadingPage/>)
    }

    return(
      <Router history={history}>
        <Container>
          <OfflineAlert/>
          <Switch>
            {
              pageRoutes.map((route, index) => {
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
