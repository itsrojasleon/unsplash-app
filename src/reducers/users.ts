import { ServerResponse, UserAction, UserActionTypes } from '../actions';

const initialState = {
  response: { results: [], total: 0, total_pages: 0 },
  isFetching: false,
  error: '',
};

export const usersReducer = (
  state: ServerResponse = initialState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionTypes.fetchUsersBegin:
      return {
        ...state,
        loading: true,
      };
    case UserActionTypes.fetchUsersSuccess:
      return {
        ...state,
        laoding: false,
        results: action.payload,
      };
    case UserActionTypes.fetchUsersFailure:
      return {
        ...state,
        loading: false,
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};
