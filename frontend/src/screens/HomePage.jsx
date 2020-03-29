import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Overview from "./../components/Overview";
import Table from "./../components/Table";
const Container = styled.div`
`;

@connect(() => {
  return {};
}, {})
class HomePage extends React.Component {
  render() {
    return (
      <Container className="container">
        <Overview/>
        <Table/>
      </Container>
    );
  }
}

export default HomePage;
