import React from 'react';
import styled from 'styled-components';

import loader from '../images/oval.svg';
const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

class NoRecord extends React.Component {
  render() {
    const {isFetching} = this.props;
    return (
      <Container className="container bg-white">
        {
          !isFetching &&
          <h4>No Record</h4>
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
