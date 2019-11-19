import {
  CollectionServerResponse,
  CollectionAction,
  CollectionActionTypes,
} from '../actions';

const initialState = {
  response: { results: [], total: 0, total_pages: 0 },
  isFetching: false,
  error: '',
};

export const collectionReducer = (
  state: CollectionServerResponse = initialState,
  action: CollectionAction
) => {
  switch (action.type) {
    case CollectionActionTypes.fetchCollectionsBegin:
      return {
        ...state,
        isFetching: true,
      };
    case CollectionActionTypes.fetchCollectionSuccess:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
      };
    case CollectionActionTypes.fetchCollectionFailure:
      return {
        ...state,
        error: 'Something went wrong',
        isFetching: false,
      };
    default:
      return state;
  }
};
