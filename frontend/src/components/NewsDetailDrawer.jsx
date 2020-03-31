import React from 'react';
import { connect } from 'react-redux';
import Drawer from '@material-ui/core/Drawer';
import styled from 'styled-components';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import isEmpty from "lodash/isEmpty";
import { FacebookProvider, EmbeddedPost } from 'react-facebook';

import { toggleNewsDrawer } from '../actions/dialog.actions';
import loader from '../images/oval.svg';
import {getYouTubeID} from "./../helpers/youtubeID";
const Header = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
`;
const Body = styled.div`
  padding: 15px;
`;
const Title = styled.h5`
  padding: 15px;
`;

const FacebookWraper = styled.div`
  position: relative;
  .loader__image {
    position: absolute;
    top: 40%;
    left: 40%;
  }
  position: relative;
  min-height: 120px;
  iframe {
    max-width: 100%;
  }
`;

@connect((store) => {
  return {
    newsDetail: store.newsReducers.newsDetail,
    newDrawerOpen: store.dialogReducers.newDrawerOpen
  };
}, {toggleNewsDrawer})
class NewsDetailDrawer extends React.Component {
  toggleDrawer = () => {
    this.props.toggleNewsDrawer({open: false});
  }

  renderFBEmbeded() {
    const {newsDetail} = this.props;
    if(isEmpty(newsDetail.link)) {
      return(<div/>);
    }

    return(
      <div className="">
        <FacebookWraper className="text-center mb-2">
          <img className="loader__image" src={loader} alt="loading" />
          <FacebookProvider appId="466260074169181">
            <EmbeddedPost
              href={newsDetail.link}
              showText="false"
              width="auto" />
          </FacebookProvider>
        </FacebookWraper>
      </div>
    );
  }

  renderVideo() {
    const {newsDetail} = this.props;
    if(isEmpty(newsDetail.link)) {
      return(<div/>);
    }

    const videoId = getYouTubeID(newsDetail.link);
    if(isEmpty(videoId)) {
      return(<div/>);
    }

    return(
      <div className="text-center mb-2">
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            title="youtube embeded"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/${videoId}`}
            frameBorder="0"
          />
        </div>
      </div>
    );
  }

  render() {
    const {newDrawerOpen, newsDetail} = this.props;
    if(isEmpty(newsDetail)) {
      return(<div/>);
    }

    return (
      <div>
        <Drawer anchor="right"
                open={newDrawerOpen}
                onClose={this.toggleDrawer}
                classes={{
                  paper: "news-detail-drawer",
                }}
                className="drawer-wrapper">
          <div>
            <Header>
              <Title>
                {newsDetail.title}
              </Title>
              <div>
                <IconButton aria-label="show 4 new mails" color="inherit" onClick={this.toggleDrawer}>
                  <CloseIcon/>
                </IconButton>
              </div>
            </Header>
            <Body>
              {
                newsDetail.type === "facebook_post" &&
                this.renderFBEmbeded()
              }
              {
                newsDetail.type === "video" &&
                this.renderVideo()
              }

              <p>{newsDetail.description}</p>
            </Body>
          </div>
        </Drawer>
      </div>
    );
  }

}

export default NewsDetailDrawer;
