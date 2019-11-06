import { ServerResponse, Action, ActionTypes } from '../actions';

const initialState = { results: [], total: 0, total_pages: 0 };

export const imagesReducer = (
  state: ServerResponse = initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.fetchImages:
      return action.payload;
    default:
      return state;
  }
};
