import {
  CREATE_STREAM,
  DELETE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
} from '../actions/types';

import _ from 'lodash';

export default (state = {}, { type, payload }) => {
  switch (type) {
    case FETCH_STREAM:
      return { ...state, [payload.id]: payload };
    case CREATE_STREAM:
      return { ...state, [payload.id]: payload };
    case EDIT_STREAM:
      return { ...state, [payload.id]: payload };
    case FETCH_STREAMS:
      return {...state, ..._.mapKeys(payload, 'id')};
    case DELETE_STREAM:
      return _.omit(state, payload);
    default:
      return state;
  }
};
