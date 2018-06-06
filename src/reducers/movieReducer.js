export const movieReducer = (state = {
  movies: {},
}, action) => {
  switch (action.type) {
    case 'READ_DATA':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'SEARCH_DATA':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'SORT_DATA_BY_RELEASEDATE':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'SORT_DATA_BY_RATING':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'SINGLE_MOVIE_DATA':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'SEEALSO_DATA':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
  }
  return state;
};

export default movieReducer;
