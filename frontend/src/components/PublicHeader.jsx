import React from 'react';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
const Header = styled.div`
  background: #FFF;
  background: transparent;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const GridContainer = styled(Grid)`
  height: 100%;
  padding: 10px 20px;
  max-width: 800px;
`;

const  LogoImage = styled.img`
  height: 40px;
`;

class PublicHeader extends React.Component {
  render() {
    return (
      <Header>
        <GridContainer container spacing={0}
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={6} sm={8}>
            <Link to="/">
              <LogoImage src={logo} alt="kounissay"/>
            </Link>
          </Grid>
          <Grid item xs={6} sm={4}>
            <div className="text-right">
              <p className="mb-1">Last Updated: <span className="text-success">1h ago</span></p>
            </div>
          </Grid>
        </GridContainer>
      </Header>
    );
  }
}

export default PublicHeader;
