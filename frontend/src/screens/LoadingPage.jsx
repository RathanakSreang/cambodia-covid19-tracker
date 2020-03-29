import React from 'react';
import styled from 'styled-components';

import loader from '../images/oval.svg';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  flex: 1;
  display: flex;
  justify-content: center;
`;
const LoadingPage = () => (
  <Container>
    <img className="loader__image" src={loader} alt="loading" />
  </Container>
);

export default LoadingPage;
