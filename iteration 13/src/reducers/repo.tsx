import {
    GET_REPO_SUCCESS,
    GET_REPO_FAILURE,
    GET_REPO_STARTED
  } from '../actions/types';
  
  const initialState = {
    loading: false,
    repos: [],
    error: null
  };
  
  export default function repoReducer(state = initialState, action: any) {
    switch (action.type) {
      case GET_REPO_STARTED:
        return {
          ...state,
          loading: true
        };
      case GET_REPO_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          repos: action.payload.repo
        };
      case GET_REPO_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          repos: []
        };
      default:
        return state;
    }
  }