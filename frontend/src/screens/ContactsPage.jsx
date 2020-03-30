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
    contacts: store.contactReducers.contacts,
    isFetching: store.contactReducers.isFetching
  };
}, {})
class ContactsPage extends React.Component {
  renderContactList(contact) {
    return(
      <ul>
        {
          contact.data.map((elm, i) => {
            if(elm.type === "link") {
              return(<li key={i}>
                <a href={elm.text} target="_blank" rel="noopener noreferrer">{elm.text}</a>
              </li>);
            }

            return(<li key={i}>{elm.text}</li>);
          })
        }
      </ul>
    );
  }
  render() {
    const {contacts, isFetching} = this.props;
    if(isEmpty(contacts)) {
      return(<NoRecord isFetching={isFetching} className="bg-white"/>);
    }
    return (
      <Container className="container bg-white">
        {
          contacts.map((contact, index)=>(
            <div className="p-3 border rounded mt-3 text-break" key={index}>
              <h5 className="mb-2">{contact.name}</h5>
              {this.renderContactList(contact)}
            </div>
          ))
        }
      </Container>
    );
  }
}

export default ContactsPage;
