import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Moment from 'react-moment';

import Overview from "./../components/Overview";
import Provinces from "./../components/Provinces";
import NoRecord from "./../components/NoRecord";
const Container = styled.div`
`;

@connect((store) => {
  return {
    lastFetchAt: store.dashboardReducers.lastFetchAt,
    isFetching: store.dashboardReducers.isFetching
  };
}, {})
class HomePage extends React.Component {
  render() {
    const {lastFetchAt, isFetching} = this.props;
    if(isFetching) {
      return(<NoRecord isFetching={true}/>);
    }
    return (
      <Container className="container">
        {
          lastFetchAt &&
          <div className="text-right">
            <p className="mb-1 mr-2">
              <FormattedMessage id="app.updated_at" defaultMessage="Updated:" />
              <span className="text-success">
                <Moment fromNow>{lastFetchAt}</Moment>
              </span>
            </p>
          </div>
        }
        <Overview/>
        <Provinces/>
      </Container>
    );
  }
}

export default HomePage;
