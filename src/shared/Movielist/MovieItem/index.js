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
    const details = this.props.moviedata;

    return (
      <Col md={4} key={details.id} className="single-movie">
        <Link to={`/film/${details.id}`}>
          <Image src={details.poster_path} responsive thumbnail />
        </Link>
        <div className="title">{truncate(details.title, 30)}</div>
        <Badge pullRight>
          {releaseDate(details.release_date)}
        </Badge>
        <div className="genres">{listGenres(details.genres, 3)}</div>
      </Col>
    );
  }
}

export default MovieItem;
