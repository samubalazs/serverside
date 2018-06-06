import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import classNames from 'classnames';

import MovieItem from './MovieItem';

import './movielist.style.less';

import {
  serverRequest,
  searchRequest,
  sortByReleaseDate,
  sortByRating,
  offlineRequest,
} from '../../actions/movieActions';

const rouletteDetails = classNames({
    'show-grid': true,
    'rouletteDetails': true,
});

class MovieList extends Component {
  constructor(props) {
    super(props);

    let movies;
    if (__isBrowser__) {
      movies = window.__INITIAL_DATA__;
      delete window.__INITIAL_DATA__;
    } else {
      movies = this.props.staticContext.data;
    }

    this.state = {
      movies,
      loading: movies ? false : true,
    };
  }

  componentDidMount() {
      this.setState({
        movies: this.props.serverRequest(9),
        // movies: this.props.offlineRequest(),
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.movies !== this.props.movies) {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    if (!this.state.loading && this.props.movies) {
      const movieList = this.props.movies.movies.data;
      const movieItems = movieList.map((movie) =>
        <MovieItem moviedata={movie} key={movie.id} />
      );

      return (
        <Row className={rouletteDetails}>
          <Col md={12}>
            <Row className="option-bar">
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    {movieList.length} movie{movieList.length > 1 && 's'} found
                  </Navbar.Brand>
                </Navbar.Header>
                <Nav pullRight>
                  <NavItem onClick={() => this.props.sortByReleaseDate(movieList)}>
                    release date
                  </NavItem>
                  <NavItem onClick={() => this.props.sortByRating(movieList)}>
                    rating
                  </NavItem>
                </Nav>
                <Navbar.Text pullRight>Sort by:</Navbar.Text>
              </Navbar>
            </Row>
            <Row>
              <Col md={9} mdOffset={1}>
                <Row>
                  {movieItems}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        serverRequest: (limit) => {
            dispatch(serverRequest(limit));
        },
        searchRequest: (phrase, filter) => {
            dispatch(searchRequest(phrase, filter));
        },
        sortRequest: (sortBy) => {
            dispatch(sortRequest(sortBy));
        },
        sortByReleaseDate: (list) => {
            dispatch(sortByReleaseDate(list));
        },
        sortByRating: (list) => {
            dispatch(sortByRating(list));
        },
        offlineRequest: () => {
            dispatch(offlineRequest());
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieList));
