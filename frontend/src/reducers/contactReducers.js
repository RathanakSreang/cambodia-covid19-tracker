import { commonConstants } from '../constants';

export default function reducer(state={
    contacts: [],
    isFetching: false,
  }, action) {
    switch(action.type) {
      case (commonConstants.LOADING_CONTACTS): {
        return {
          ...state,
          isFetching: true
        };
      }
      case (commonConstants.CONTACTS_FAIL): {
        return {
          ...state,
          isFetching: false
        };
      }

      case (commonConstants.CONTACTS_LOADED): {
        const {contacts} = action.payload;
        return {
          ...state,
          contacts: contacts,
          isFetching: false,
        };
      }

      default:
        return state;
    }
}
