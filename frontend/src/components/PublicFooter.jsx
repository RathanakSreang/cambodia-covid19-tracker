import React from 'react';
import { withRouter } from "react-router";
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import RestoreIcon from '@material-ui/icons/Restore';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import LinkIcon from '@material-ui/icons/Link';
import { matchPath } from 'react-router-dom';

import { history } from '../routers/AppRouter';
const styles = () => ({
  root: {
    width: '100%',
  },
});

class Footer extends React.Component {
  state = {
    page: '',
  };

  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this._updatePageState();
    }
  }
  componentDidMount() {
    this._updatePageState();
  }

  _updatePageState() {
    const {pathname} = this.props.location;
    let page = '';
    const isHome = !!matchPath(pathname, {
      path: "/",
      exact: true,
    });
    const isNews = !!matchPath(pathname, {
      path: "/news",
    });

    const isContacts = !!matchPath(pathname, {
      path: "/contacts",
    });

    const isLinks = !!matchPath(pathname, {
      path: "/links",
    });

    if(isHome) {
      page = 'home';
    } else if(isNews) {
      page = 'news';
    } else if(isContacts) {
      page = 'contacts';
    } else if(isLinks) {
      page = 'links';
    }

    this.setState({ page });
  }

  handleChange = (event, newPage)=> {
    if (newPage === 'home') {
      history.push('/');
    } else {
      history.push('/' + newPage);
    }
  }
  render() {
    const {classes} = this.props;
    const {page} = this.state;
    return (
      <BottomNavigation value={page} onChange={this.handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} className=""/>
        <BottomNavigationAction label="News"
          value="news" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Links" value="links" icon={<LinkIcon />} className=""/>
        <BottomNavigationAction label="Contacts" value="contacts" icon={<ContactPhoneIcon />} className=""/>
      </BottomNavigation>
    );
  }
}

export default withStyles(styles)(withRouter(Footer));
