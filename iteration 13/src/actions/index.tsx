import { GET_REPO_SUCCESS, GET_REPO_FAILURE, GET_REPO_STARTED } from "./types";

import axios from "axios";

export const getRepo = (user: any) => {
  return (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    dispatch(getRepoStarted());

    axios
      .get(`https://api.github.com/users/${user}/repos`, {})
      .then((res) => {
        dispatch(getRepoSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getRepoFailure(err.message));
      });
  };
};

const getRepoSuccess = (repo: any) => ({
  type: GET_REPO_SUCCESS,
  payload: {
    repo,
  },
});

const getRepoStarted = () => ({
  type: GET_REPO_STARTED,
});

const getRepoFailure = (error: any) => ({
  type: GET_REPO_FAILURE,
  payload: {
    error,
  },
});
