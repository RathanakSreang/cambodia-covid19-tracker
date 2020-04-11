import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
  overflow: auto;
  max-width: 800px;
  justify-content: center;
  align-item: center;
  width: 100%;
  align-items: center;
  flex: 1;
  display: flex;
`;

@connect((store) => {
  return {
    contacts: store.contactReducers.contacts,
    isFetching: store.contactReducers.isFetching
  };
}, {})
class PriflePage extends React.Component {
  render() {
    return (
      <Container className="container bg-white">
        <h1>
          Corona Go
        </h1>
      </Container>
    );
  }
}

export default PriflePage;
