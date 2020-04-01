import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Offline } from "react-detect-offline";

const Container = styled.div`
  position: fixed;
  padding: 10px 15px;
  background: #181e1e;
  color: #FFF;
  opacity: 0.8;
  left: 40%;
  top: 8px;
`;

class OfflineAlert extends React.Component {
  render() {
    return (
      <Offline polling={{url: "/favicon.ico"}}>
        <Container>
          <FormattedMessage id="app.offline" defaultMessage="No internet" />
        </Container>
      </Offline>
    );
  }
}

export default OfflineAlert;
