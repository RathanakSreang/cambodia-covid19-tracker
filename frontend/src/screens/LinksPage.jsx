import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";

const Container = styled.div`
`;

@connect((store) => {
  return {
    links: store.linkReducers.links
  };
}, {})
class LinksPage extends React.Component {
  render() {
    const {links} = this.props;
    if(isEmpty(links)) {
      return(<div/>);
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
