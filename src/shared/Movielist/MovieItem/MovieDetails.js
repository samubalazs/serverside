import React, { Component } from 'react';
import { Row, Col, Image, Navbar } from 'react-bootstrap';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import RelatedList from '../related';

import {
  singleMovieRequest,
  relatedRequest,
} from '../../../actions/movieActions';

import {
  listGenres,
} from '../../../common';

const rouletteDetails = classNames({
    'show-grid': true,
    'movie-details': true,
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
      related: '',
      loading: movies ? false : true,
    };
  }

  componentDidMount() {
    this.setState({
      movies: this.props.singleMovieRequest(this.props.id),
    });
    if (!this.state.loading) {
      this.setState({
        related: this.props.relatedRequest(this.props.movies.movies.genres[0]),
      });
    }
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
      const movieDetailsItem = this.props.movies.movies;
      return (
        <Row className={rouletteDetails}>
          <Col md={9} mdOffset={1}>
            <Row>
              <Col md={4}>
                <Image src={movieDetailsItem.poster_path} responsive thumbnail />
              </Col>
              <Col md={7} mdOffset={1}>
                <div className="title">{movieDetailsItem.title}</div>
                <b>{movieDetailsItem.tagline}</b>
                <div className="time-info">
                  <span>Release date: {movieDetailsItem.release_date}</span>
                  <span>Runtime {movieDetailsItem.runtime} mins</span>
                </div>
                <div className="overview"><b>Story:</b> {movieDetailsItem.overview}</div>
                <div className="genres"><b>Genres:</b> {listGenres(movieDetailsItem.genres)}</div>
                <div className="rating">
                  Rating: {movieDetailsItem.vote_average} from {movieDetailsItem.vote_count} votes
                </div>
              </Col>
            </Row>
            <Row className="option-bar">
              <Navbar>
                <Navbar.Header>
                  <Navbar.Brand>
                    More films in genre "{movieDetailsItem.genres[0]}"
                  </Navbar.Brand>
                </Navbar.Header>
              </Navbar>
              <RelatedList relatedMovies={this.props.movies.related.data} />
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
      related: state.related,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        singleMovieRequest: (id) => {
            dispatch(singleMovieRequest(id));
        },
        relatedRequest: (genre) => {
            dispatch(relatedRequest(genre));
        },
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MovieDetails));
