import { CollectionActionTypes } from './types';
import { Dispatch } from 'redux';
import { unsplash } from '../api/unsplash';

interface CollectionPreviewPhotos {
  id: string;
  urls: { [key: string]: string };
}
interface CollectionTags {
  type: string;
  title: string;
}
export interface Collection {
  id: number;
  title: string;
  tags: CollectionTags[];
  preview_photos: CollectionPreviewPhotos[];
}
export interface CollectionResponse {
  results: Collection[];
  total: number;
  total_pages: number;
}
export interface CollectionServerResponse {
  response: CollectionResponse;
  isFetching: boolean;
  error: string;
}

export interface FetchCollectionsBeginAction {
  type: CollectionActionTypes.fetchCollectionsBegin;
}
export interface FetchCollectionsSuccessAction {
  type: CollectionActionTypes.fetchCollectionSuccess;
  payload: CollectionResponse;
}
export interface FetchCollectionsFailureAction {
  type: CollectionActionTypes.fetchCollectionFailure;
}

export const fetchCollections = () => {
  return async (dispatch: Dispatch) => {
    dispatch<FetchCollectionsBeginAction>({
      type: CollectionActionTypes.fetchCollectionsBegin,
    });

    try {
      const response = await unsplash.get<CollectionResponse>(
        '/search/collections',
        {
          params: { query: 'Dark' },
        }
      );

      dispatch<FetchCollectionsSuccessAction>({
        type: CollectionActionTypes.fetchCollectionSuccess,
        payload: response.data,
      });
    } catch (e) {
      dispatch<FetchCollectionsFailureAction>({
        type: CollectionActionTypes.fetchCollectionFailure,
      });
    }
  };
};
