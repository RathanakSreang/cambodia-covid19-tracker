import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const Container = styled.div`
`;

@connect(() => {
  return {};
}, {})
class ContactsPage extends React.Component {
  render() {
    return (
      <Container className="container bg-white">
        {
          [1,2,3,4].map((index)=>(
            <div className="p-3 border rounded mt-3 text-break" key={index}>
              <h5 className="mb-2">Phnom Penh</h5>
              <ul>
                <li>016 46 62 92</li>
                <li>016 46 62 92</li>
                <li><a href="https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf">
                    https://www.mohfw.gov.in/coronvavirushelplinenumber.pdf
                  </a></li>
              </ul>
            </div>
          ))
        }
      </Container>
    );
  }
}

export default ContactsPage;
