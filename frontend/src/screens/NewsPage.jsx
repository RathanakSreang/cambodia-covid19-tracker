import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";

import { fetchNewsList }      from './../actions/news.actions'
import NoRecord from "./../components/NoRecord";
const Container = styled.div`
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
      return(<NoRecord isFetching={isFetching}/>);
    }

    return (
      <Container className="container bg-white">
        {
          newsList.map((news, index)=>(
            <div className="cursor-pointer p-3 border rounded mt-3 text-break" key={index} onClick={()=> this.handleClick(news)}>
              <h5 className="mb-1">{news.title}</h5>
              <p className="mb-1">{news.description}</p>
            </div>
          ))
        }
      </Container>
    );
  }
}

export default NewsPage;
