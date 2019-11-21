import { UserServerResponse, UserAction, UserActionTypes } from '../actions';

const initialState = {
  response: { results: [] || {} },
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
        isFetching: true,
      };
    case UserActionTypes.fetchUsersSuccess:
      return {
        ...state,
        isFetching: false,
        response: action.payload,
      };
    case UserActionTypes.fetchUserSuccess:
      return {
        ...state,
        isFetching: false,
        response: {
          ...state.response,
          results: action.payload,
        },
      };
    case UserActionTypes.fetchUsersFailure:
      return {
        ...state,
        isFetching: false,
        error: 'Something went wrong',
      };
    default:
      return state;
  }
};
