import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { UserActionTypes } from './types';

export interface User {
  id?: number;
  first_name?: string;
  profile_image?: { [key: string]: string };
}
export interface UserResponse {
  results: User[];
  total: number;
  total_pages: number;
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
