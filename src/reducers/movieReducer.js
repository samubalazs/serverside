export const movieReducer = (state = {
  movies: {},
  related: {},
}, action) => {
  switch (action.type) {
    case 'SEARCH_DATA':
      state = {
          ...state,
          movies: action.payload,
      };
      break;
    case 'RELATED_DATA':
      state = {
          ...state,
          related: action.payload,
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
  }
  return state;
};

export default movieReducer;
