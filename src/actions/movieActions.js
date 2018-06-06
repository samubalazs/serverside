import axios from 'axios';

export function serverRequest(limit) {
  return (dispatch) => {
    axios
      .get(
        'http://react-cdp-api.herokuapp.com/movies?sortBy=release_date&sortOrder=asc&limit='
        + limit
      )
      .then(function(result) {
        dispatch({
          type: 'READ_DATA',
          payload: result.data,
        });
      });
  };
}

export function singleMovieRequest(id) {
  return (dispatch) => {
    axios.get('http://react-cdp-api.herokuapp.com/movies/' + id)
    .then(function(result) {
      dispatch({
        type: 'SINGLE_MOVIE_DATA',
        payload: result.data,
      });
    });
  };
}

export function searchRequest(filter, phrase) {
  return (dispatch) => {
    axios
    .get(
      'http://react-cdp-api.herokuapp.com/movies?search='
      + phrase + '&searchBy=' + filter + '&limit=9'
    )
    .then(function(result) {
      dispatch({
        type: 'SEARCH_DATA',
        payload: result.data,
      });
    });
  };
}

export function seeAlso(recommended) {
  return (dispatch) => {
    axios
    .get(
      'http://react-cdp-api.herokuapp.com/movies?search='
      + recommended + '&searchBy=genres&limit=9'
    )
    .then(function(result) {
      dispatch({
        type: 'SEEALSO_DATA',
        payload: result.data,
      });
    });
  };
}

export function sortByReleaseDate(list) {
  return (dispatch) => {
    const result = {
      data: list.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date))),
    };
    dispatch({
      type: 'SORT_DATA_BY_RELEASEDATE',
      payload: result,
    });
  };
}

export function sortByRating(list) {
  return (dispatch) => {
    const result = {
      data: list.sort((a, b) => b.vote_average - a.vote_average),
    };
    dispatch({
      type: 'SORT_DATA_BY_RATING',
      payload: result,
    });
  };
}

export function offlineRequest() {
  return (dispatch) => {
    axios
    .get(
      '../datasource/movies.json'
    )
    .then(function(result) {
      dispatch({
        type: 'OFFLINE_DATA',
        payload: result.data,
      });
    });
  };
}
