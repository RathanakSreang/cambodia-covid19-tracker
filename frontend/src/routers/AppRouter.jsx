import React from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import {createBrowserHistory} from 'history';
import styled from 'styled-components';
import ReactGA from 'react-ga';

import LoadingPage from '../screens/LoadingPage';
import NotFoundPage from '../screens/NotFoundPage';
import OfflineAlert from "./../components/OfflineAlert";
import pageRoutes from './pageRoutes';

export const history = createBrowserHistory();

const trackingId = "UA-66625680-6";
ReactGA.initialize(trackingId);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});


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
