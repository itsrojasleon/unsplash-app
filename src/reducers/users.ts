import { UserServerResponse, UserAction, UserActionTypes } from '../actions';

const initialState = {
  response: { results: [], result: {}, total: 0, total_pages: 0 },
  isFetching: false,
  error: '',
};

export const usersReducer = (
  state: UserServerResponse = initialState,
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
        response: action.payload,
      };
    case UserActionTypes.fetchUserSuccess:
      return {
        ...state,
        loading: false,
        response: {
          ...state.response,
          result: action.payload,
        },
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
