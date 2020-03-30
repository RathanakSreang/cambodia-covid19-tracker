import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "shards-react";

import logo from '../images/logo.svg';
import kh_flag from '../images/kh_flag.svg';
import gb_flag from '../images/gb_flag.svg';
import { changeLanguage } from '../actions/common.actions';
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

const LangItem = styled.div`
  display: flex;
  align-items: center;
`;
const LangFlag = styled.img`
  height: 20px;
  width: 40px;
`;
const RightNav = styled.div`
  display: flex;
  justify-content: flex-end;
`;

@connect((store) => {
  return {
    current_lang: store.intl.locale
  };
}, {changeLanguage})
class PublicHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  onChangeLang(lang) {
    const {current_lang} = this.props;
    if(lang === current_lang) {
      return;
    }

    this.props.changeLanguage(lang);
  }
  _renderFlag(lang, isSort) {
    if(lang === 'en') {
      return(
        <LangItem onClick={() => this.onChangeLang('en')}>
          <LangFlag src={gb_flag} alt="English"/>
          <b>{isSort ? 'EN' : 'English'}</b>
        </LangItem>
      );
    }

    return(
      <LangItem onClick={() => this.onChangeLang('km')}>
        <LangFlag src={kh_flag} alt="Khmer"/>
        <b>{isSort ? 'KH' : 'ខ្មែរ'}</b>
      </LangItem>
    );
  }

  toggle = () => {
    this.setState(prevState => {
      return { open: !prevState.open };
    });
  }

  render() {
    const {current_lang} = this.props;
    return (
      <Header>
        <GridContainer container spacing={0}
              direction="row"
              justify="center"
              alignItems="center">
          <Grid item xs={4} sm={8}>
            <Link to="/">
              <LogoImage src={logo} alt="kounissay"/>
            </Link>
          </Grid>
          <Grid item xs={8} sm={4}>
            <RightNav className="">
              <Dropdown open={this.state.open} toggle={this.toggle}>
                <DropdownToggle tag="span">{this._renderFlag(current_lang, true)}</DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>{this._renderFlag('km')}</DropdownItem>
                  <DropdownItem>{this._renderFlag('en')}</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </RightNav>
          </Grid>
        </GridContainer>
      </Header>
    );
  }
}

export default PublicHeader;
