import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";

import { fetchNewsList }      from './../actions/news.actions'
import NoRecord from "./../components/NoRecord";
import NewsDetailDrawer from "./../components/NewsDetailDrawer";
import News from "./../components/News";
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

  render() {
    const {newsList, isFetching} = this.props;
    if(isEmpty(newsList)) {
      return(<NoRecord isFetching={isFetching} className="bg-white"/>);
    }

    return (
      <Container className="container bg-white">
        {
          newsList.map((news, index)=>(
            <News news={news} key={index}/>
          ))
        }
        <NewsDetailDrawer/>
      </Container>
    );
  }
}

export default NewsPage;
