import NoMoviesFound from '../shared/Movielist/NoMoviesFound';
import MovieList from '../shared/MovieList';
import SearchResult from '../shared/MovieList/SearchResult';
import MovieDetails from '../shared/Movielist/MovieItem/MovieDetails';
import { MissingPage } from '../shared/Error/MissingPage';

const SingleMovie = ({ match }) => (
  <MovieDetails id={match.params.id} />
);

const Filter = ({ match }) => (
  <SearchResult filter={match.params.filter} phrase={match.params.phrase} />
);

const routes = [
  {
    path: '/',
    exact: true,
    component: NoMoviesFound,
  },
  {
    path: '/movies',
    component: MovieList,
  },
  {
    path: '/filter/:phrase',
    component: Filter,
  },
  {
    path: '/film/:id',
    component: SingleMovie,
  },
  {
    component: MissingPage,
  },
];

export default routes;
