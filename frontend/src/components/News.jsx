import React from 'react';
import { connect } from 'react-redux';
import LinesEllipsis from 'react-lines-ellipsis';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";
import { Row, Col } from "shards-react";
import { FacebookProvider, EmbeddedPost } from 'react-facebook';
import Moment from 'react-moment';

const FacebookWraper = styled.div`
  position: relative;
  min-height: 120px;
  iframe {
    max-width: 100%;
  }
`;

const PostDate = styled.div`
  font
`;

@connect(() => {
  return {
  };
}, {})
class News extends React.Component {
  handleClick = () => {
  }

  renderPublishDate() {
    const {news} = this.props;
    if(isEmpty(news.publish_date)) {
      return(<div/>);
    }

    return(
      <PostDate className="text-muted">
        <Moment format="hh:mm MMMM DD, YYYY">
          1976-04-19T12:59-0500
        </Moment>
      </PostDate>
    );
  }

  renderFBEmbeded() {
    const {news} = this.props;
    if(isEmpty(news.link)) {
      return(<div/>);
    }

    return(
      <div className="cursor-pointer p-3 border rounded mt-3 text-break" onClick={this.handleClick}>
        <Row noGutters>
          <Col sm="6" md="6" lg="4">
            <FacebookWraper className="text-center mb-2">
              <FacebookProvider appId="466260074169181">
                <EmbeddedPost
                  href={news.link}
                  showText="false"
                  width="auto"
                  handleParse={() =>{console.log('I am loaded')}} />
              </FacebookProvider>
            </FacebookWraper>
          </Col>
          <Col sm="6" md="6" lg="8">
            <div className="pl-2">
              <h5 className="mb-1">
                <LinesEllipsis
                  text={news.title}
                  maxLine='2'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </h5>
              <LinesEllipsis
                text={news.description}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
              {this.renderPublishDate()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  renderVideo() {
    const {news} = this.props;
    return(
      <div className="cursor-pointer p-3 border rounded mt-3 text-break" onClick={this.handleClick}>
        <Row noGutters>
          <Col sm="6" md="6" lg="4">
            <div className="text-center mb-2">
              <img src="https://img.youtube.com/vi/7VuAEnGy3aQ/mqdefault.jpg" className="img-fluid" alt={news.title} />
            </div>
          </Col>
          <Col sm="6" md="6" lg="8">
            <div className="pl-2">
              <h5 className="mb-1">
                <LinesEllipsis
                  text={news.title}
                  maxLine='2'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </h5>
              <LinesEllipsis
                text={news.description}
                maxLine='2'
                ellipsis='...'
                trimRight
                basedOn='letters'
              />
              {this.renderPublishDate()}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
  render() {
    const {news} = this.props;

    if(news.type === "video") {
      return this.renderVideo()
    } else if(news.type === "facebook_post") {
      return this.renderFBEmbeded()
    }

    return (
      <div className="cursor-pointer p-3 border rounded mt-3 text-break" onClick={this.handleClick}>
        <h5 className="mb-1">{news.title}</h5>
        <div className="mb-1">
          <LinesEllipsis
            text={news.description}
            maxLine='2'
            ellipsis='...'
            trimRight
            basedOn='letters'
          />
          {this.renderPublishDate()}
        </div>
      </div>
    );
  }
}

export default News;
