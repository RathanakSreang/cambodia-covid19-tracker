import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import isEmpty from "lodash/isEmpty";
import PhoneIcon from '@material-ui/icons/Phone';

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
      <div>
        {
          contact.data.map((elm, i) => {
            if(isEmpty(elm.text)) {
              return null;
            }

            if(elm.type === "link") {
              return(<div key={i}>
                <PhoneIcon/>
                <a href={elm.text} target="_blank" rel="noopener noreferrer">{elm.text}</a>
              </div>);
            }

            return(<div key={i} className="pt-2 pb-2">
              <a href={`tel:${elm.text}`}>
                <PhoneIcon/>
                <span className="pl-1">{elm.text}</span>
              </a>
            </div>);
          })
        }
      </div>
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
