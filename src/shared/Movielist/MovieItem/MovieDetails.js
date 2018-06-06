import React, { Component } from 'react';
import { Row, Col, Image, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {
  singleMovieRequest,
  seeAlso,
} from '../../../actions/movieActions';

import {
  listGenres,
} from '../../../common';

const rouletteDetails = classNames({
    'show-grid': true,
    'roulette-details': true,
    'single-movie': true,
});

class MovieDetails extends Component {
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
      recommended: '',
      loading: movies ? false : true,
    };
  }

  componentDidMount() {
      this.setState({
        movies: this.props.singleMovieRequest(this.props.id),
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
    const isLoading = this.state.loading;
    if (isLoading) {
      return (<p>loading</p>);
    } else {
      const movieDetails = this.props.movies.movies;
      return (
        <Row className={rouletteDetails}>
          <Col md={9} mdOffset={1}>
            <Row>
              <Col md={4}>
                <Image src={movieDetails.poster_path} responsive thumbnail />
              </Col>
              <Col md={7} mdOffset={1}>
                <div className="title">{movieDetails.title}</div>
                <b>{movieDetails.tagline}</b>
                <div className="time-info">
                  <span>Release date: {movieDetails.release_date}</span>
                  <span>Runtime {movieDetails.runtime} mins</span>
                </div>
                <div className="overview"><b>Story:</b> {movieDetails.overview}</div>
                <div className="genres"><b>Genres:</b> {listGenres(movieDetails.genres)}</div>
                <div className="rating">
                  <b>Rating:</b> {movieDetails.vote_average} from {movieDetails.vote_count} votes
                </div>
              </Col>
            </Row>
            <Row className="option-bar">
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    More films in genre "{movieDetails.genres[0]}"
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
            </Row>
          </Col>
        </Row>
      );
    };
  }
}

const mapStateToProps = (state) => {
  return {
      movies: state.movies,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        singleMovieRequest: (id) => {
            dispatch(singleMovieRequest(id));
        },
        seeAlso: (recommended) => {
            dispatch(seeAlso(recommended));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
