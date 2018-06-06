import React, { Component } from 'react';
import { Col, Image, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {
  truncate,
  listGenres,
  releaseDate,
} from '../../../common';

class MovieItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const movieDetails = this.props.moviedata;

    return (
      <Col md={4} key={movieDetails.id} className="single-movie">
        <Link to={`/film/${movieDetails.id}`}>
          <Image src={movieDetails.poster_path} responsive thumbnail />
        </Link>
        <div className="title">{truncate(movieDetails.title, 30)}</div>
        <Badge pullRight>
          {releaseDate(movieDetails.release_date)}
        </Badge>
        <div className="genres">{listGenres(movieDetails.genres, 3)}</div>
      </Col>
    );
  }
}

export default MovieItem;
