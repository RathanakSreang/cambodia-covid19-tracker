import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  align-items: center;
  justify-content: center;
  .top-title {
    color: #cacedb;
    font-weight: 700;
    font-size: 3.75rem;
  }
  .main-title {
    font-weight: 500;
    font-size: 2.1875rem;
    margin-bottom: .625rem;
  }
  .blurb {
    color: #818ea3;
  }
`;

const NotFoundPage = () => (
  <Container className="not-found-container">
    <div className="content">
      <div className="inner-wrapper">
        <div className="top-title"><FormattedMessage id="errors.oop" defaultMessage="OOP!" /></div>
        <div className="main-title">
          <FormattedMessage id="errors.404" defaultMessage="404" />
        </div>
      </div>

      <p className="blurb">
        <FormattedMessage id="errors.page_not_found_des" defaultMessage="The page you were looking for doesn't exist." />
        <br/>
      </p>

      <div className="text-center">
        <Link to="/" className="btn btn-primary btn-sm"><FormattedMessage id="links.go_home" defaultMessage="Go home" /></Link>
      </div>

    </div>

  </Container>
);

export default NotFoundPage;
