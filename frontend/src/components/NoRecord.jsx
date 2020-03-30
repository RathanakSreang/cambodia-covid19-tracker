import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

import loader from '../images/oval.svg';
const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class NoRecord extends React.Component {
  render() {
    const {isFetching, className} = this.props;
    return (
      <Container className={`${className} container`}>
        {
          !isFetching &&
          <h4><FormattedMessage id="app.no_records" defaultMessage="No Record" /></h4>
        }
        {
          isFetching &&
          <img className="loader__image" src={loader} alt="loading" />
        }
      </Container>
    );
  }
}

export default NoRecord;
