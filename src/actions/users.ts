import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { UserActionTypes } from './types';

export interface User {
  id?: number;
  name?: string;
  profile_image?: { [key: string]: string };
  username: string;
  instagram_username?: string;
}
export interface UserResponse {
  results: User[] | any;
}
export interface UserServerResponse {
  response: UserResponse;
  isFetching: boolean;
  error: string;
}
export interface FetchUsersBeginAction {
  type: UserActionTypes.fetchUsersBegin;
}
export interface FetchUsersSuccessAction {
  type: UserActionTypes.fetchUsersSuccess;
  payload: UserResponse;
}
export interface FetchUsersFailureAction {
  type: UserActionTypes.fetchUsersFailure;
}

export const fetchUsers = (query: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchUsersBeginAction>({ type: UserActionTypes.fetchUsersBegin });

    try {
      const response = await unsplash.get<UserResponse>('/search/users', {
        params: { query },
      });

      dispatch<FetchUsersSuccessAction>({
        type: UserActionTypes.fetchUsersSuccess,
        payload: response.data,
      });
    } catch (err) {
      dispatch<FetchUsersFailureAction>({
        type: UserActionTypes.fetchUsersFailure,
      });
    }
  };
};

export interface FetchUserSuccessAction {
  type: UserActionTypes.fetchUserSuccess;
  payload: UserResponse;
}

export const fetchUser = (username: string) => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchUsersBeginAction>({ type: UserActionTypes.fetchUsersBegin });

    try {
      const response = await unsplash.get(`/users/${username}`);

      dispatch<FetchUserSuccessAction>({
        type: UserActionTypes.fetchUserSuccess,
        payload: response.data,
      });
    } catch (e) {
      dispatch<FetchUsersFailureAction>({
        type: UserActionTypes.fetchUsersFailure,
      });
    }
  };
};
