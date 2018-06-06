import React, { Component } from 'react';
import { Row, Col, Navbar, Nav, NavItem } from 'react-bootstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import MovieItem from './MovieItem';

import {
  searchRequest,
} from '../../actions/movieActions';

const rouletteDetails = classNames({
    'show-grid': true,
    'roulette-details': true,
});

class SearchResult extends Component {
  constructor(props) {
    super(props);
    console.log(props);

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
        movies: this.props.searchRequest(this.props.filter, this.props.phrase),
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
        searchRequest: (phrase, filter) => {
            dispatch(searchRequest(phrase, filter));
        },
        sortByReleaseDate: (list) => {
            dispatch(sortByReleaseDate(list));
        },
        sortByRating: (list) => {
            dispatch(sortByRating(list));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchResult));
