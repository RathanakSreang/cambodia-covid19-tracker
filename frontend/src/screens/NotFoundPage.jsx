import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

const NotFoundPage = () => (
  <div className="not-found-container">
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

      <Link to="/"><FormattedMessage id="links.go_home" defaultMessage="Go home" /></Link>

    </div>

  </div>
);

export default NotFoundPage;
