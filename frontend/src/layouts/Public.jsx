import React from "react";
import styled from 'styled-components';

import PublicHeader from '../components/PublicHeader';
import PublicFooter from '../components/PublicFooter';

const PublicContainer = styled.div`
  background: #f5f6f8;
  width: 100%;
  overflow: hidden;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Body = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  // padding: 10px 20px;
  max-width: 800px;
  justify-content: center;
  width: 100%;
`;
const PublicLayout = ({ children }) => (
  <PublicContainer>
    <PublicHeader/>
    <Body>
      {children}
    </Body>
    <PublicFooter/>
  </PublicContainer>
);

export default PublicLayout;
