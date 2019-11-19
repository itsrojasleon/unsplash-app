import { ImageServerResponse, ImageAction, ImageActionTypes } from '../actions';

const initialState = {
  response: { results: [], total: 0, total_pages: 0 },
  isFetching: false,
  error: '',
  initialValue: '',
};

export const imagesReducer = (
  state: ImageServerResponse = initialState,
  action: ImageAction
) => {
  switch (action.type) {
    case ImageActionTypes.fetchImagesBegin:
      return {
        ...state,
        initialValue: action.payload,
        isFetching: true,
      };
    case ImageActionTypes.fetchImagesSuccess:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
      };
    case ImageActionTypes.fetchImagesFailure:
      return {
        ...state,
        isFetching: false,
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};
