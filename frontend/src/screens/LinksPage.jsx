import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";

import NoRecord from "./../components/NoRecord";
const Container = styled.div`
  overflow: auto;
  max-width: 800px;
  justify-content: center;
  width: 100%;
`;

@connect((store) => {
  return {
    links: store.linkReducers.links,
    isFetching: store.linkReducers.isFetching
  };
}, {})
class LinksPage extends React.Component {
  render() {
    const {links, isFetching} = this.props;
    if(isEmpty(links)) {
      return(<NoRecord isFetching={isFetching} className="bg-white"/>);
    }

    return (
      <Container className="container bg-white">
        {
          links.map((link, index)=>(
            <div className="p-3 border rounded mt-3 text-break" key={index}>
              <h5 className="mb-0">{link.title}</h5>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                {link.link}
              </a>
            </div>
          ))
        }
      </Container>
    );
  }
}

export default LinksPage;
