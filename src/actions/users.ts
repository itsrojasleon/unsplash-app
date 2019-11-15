import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { UserActionTypes } from './types';

export interface ServerResponse {
  response: Response;
  isFetching: boolean;
  error: string;
}

export interface FetchUsersBeginAction {
  type: UserActionTypes.fetchUsersBegin;
}
export interface FetchUsersSuccessAction {
  type: UserActionTypes.fetchUsersSuccess;
  payload: any;
}
export interface FetchUsersFailureAction {
  type: UserActionTypes.fetchUsersFailure;
}

export const fetchUsers = (query: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await unsplash.get<ServerResponse>('/search/users', {
        params: { query },
      });

      console.log(response);

      dispatch<FetchUsersSuccessAction>({
        type: UserActionTypes.fetchUsersSuccess,
        payload: response.data,
      });
    } catch (err) {
      console.log('Something went wrong');
    }
  };
};
