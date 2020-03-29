import { commonConstants } from '../constants';

export default function reducer(state={
    contacts: [],
  }, action) {
    switch(action.type) {
      case (commonConstants.CONTACTS_LOADED): {
        const {contacts} = action.payload;
        return {
          ...state,
          contacts: contacts,
        };
      }

      default:
        return state;
    }
}
