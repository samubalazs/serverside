import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import MovieItem from './MovieItem';

const rouletteDetails = classNames({
    'show-grid': true,
    'rouletteDetails': true,
});

class RelatedList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      relatedMovies: false,
    };
  }

  componentDidMount() {
    this.setState({
      relatedMovies: this.props.relatedMovies,
    });
  }

  render() {
    if (this.state.relatedMovies) {
      const movieList = this.state.relatedMovies;
      const movieItems = movieList.map((movie) =>
        <MovieItem moviedata={movie} key={movie.id} />
      );

      return (
        <Row className={rouletteDetails}>
          <Col md={12}>
            {movieItems}
          </Col>
        </Row>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

export default RelatedList;
