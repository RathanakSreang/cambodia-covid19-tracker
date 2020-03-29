import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Overview from "./../components/Overview";
import Provinces from "./../components/Provinces";
const Container = styled.div`
`;

@connect(() => {
  return {
  };
}, {})
class HomePage extends React.Component {
  render() {
    return (
      <Container className="container">
        <Overview/>
        <Provinces/>
      </Container>
    );
  }
}

export default HomePage;
