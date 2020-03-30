import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";
import LinesEllipsis from 'react-lines-ellipsis';

import { fetchNewsList }      from './../actions/news.actions'
import NoRecord from "./../components/NoRecord";
import NewsDetailDrawer from "./../components/NewsDetailDrawer";
const Container = styled.div`
  overflow: auto;
  max-width: 800px;
  justify-content: center;
  width: 100%;
`;

@connect((store) => {
  return {
    newsList: store.newsReducers.newsList,
    isFetching: store.newsReducers.isFetching
  };
}, {fetchNewsList})
class NewsPage extends React.Component {
  componentDidMount = () => {
    this.props.fetchNewsList();
  }

  handleClick = (news) => {
    console.log(news);
  }

  render() {
    const {newsList, isFetching} = this.props;
    if(isEmpty(newsList)) {
      return(<NoRecord isFetching={isFetching} className="bg-white"/>);
    }

    return (
      <Container className="container bg-white">
        {
          newsList.map((news, index)=>(
            <div className="cursor-pointer p-3 border rounded mt-3 text-break" key={index} onClick={()=> this.handleClick(news)}>
              <h5 className="mb-1">{news.title}</h5>
              <div className="mb-1">
                <LinesEllipsis
                  text={news.description}
                  maxLine='2'
                  ellipsis='...'
                  trimRight
                  basedOn='letters'
                />
              </div>
            </div>
          ))
        }
        <NewsDetailDrawer/>
      </Container>
    );
  }
}

export default NewsPage;
