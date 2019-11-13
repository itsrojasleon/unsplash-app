import { ServerResponse, Action, ActionTypes } from '../actions';

const initialState = {
  response: { results: [], total: 0, total_pages: 0 },
  isFetching: false,
  error: '',
};

export const imagesReducer = (
  state: ServerResponse = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchImagesBegin:
      return {
        ...state,
        isFetching: true,
      };
    case ActionTypes.fetchImagesSuccess:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
      };
    case ActionTypes.fetchImagesFailure:
      return {
        ...state,
        isFetching: false,
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};
