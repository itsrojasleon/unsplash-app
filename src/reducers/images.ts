import { Action, ActionTypes } from '../actions';

// I need to modify this...

export const imagesReducer = (state: any = [], action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchImages:
      return action.payload;
    default:
      return state;
  }
};
