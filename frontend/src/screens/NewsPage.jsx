import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
`;

@connect(() => {
  return {};
}, {})
class NewsPage extends React.Component {
  render() {
    return (
      <Container className="container bg-white">
        {
          [1,2,3,4].map((index)=>(
            <div className="p-3 border rounded mt-3 text-break" key={index}>
              <h5 className="mb-0">HELPLINE NUMBERS [by State]</h5>
              <a href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf">
                https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf
              </a>
            </div>
          ))
        }
      </Container>
    );
  }
}

export default NewsPage;
