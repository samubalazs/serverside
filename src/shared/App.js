import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import loadable from 'react-loadable';
import styled from 'styled-components';

import Header from './Header/';
import MovieDetails from './Movielist/MovieItem/MovieDetails';
import MovieList from './Movielist/';
import { MissingPage } from './Error/MissingPage';
import { Footer } from './Footer/';

import './App.style.less';

const StyledLink = styled(Link)`
  color: red;
  font-weight: bold;
`;

const Loading = <div>Loading...</div>;
const NoMoviesFound = loadable({
  loader: () => import('./Movielist/NoMoviesFound'),
  loading: () => Loading,
});

const SingleMovie = ({ match }) => (
  <MovieDetails id={match.params.id} />
);

const FilteredMovies = ({ match }) => (
  <MovieList filter={match.params.filter} phrase={match.params.phrase} />
);

class App extends Component {
  render() {
    return (
      <div className="container">
        <Link to="/">Home</Link>
        <StyledLink to="/movies">Movies</StyledLink>
        <Header />
        <Switch>
          <Route exact path="/" component={NoMoviesFound} />
          <Route path="/movies" component={MovieList} />
          <Route path="/film/:id" component={SingleMovie} />
          <Route path="/:filter/:phrase" component={FilteredMovies} />
          <Route component={MissingPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
