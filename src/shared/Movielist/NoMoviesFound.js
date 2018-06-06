import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

const rouletteDetails = classNames({
    'show-grid': true,
    'rouletteDetails': true,
});

export default class NoMoviesFound extends React.Component {
  render() {
    return (
      <Row className={rouletteDetails}>
        <Col md={12}>
          <Row>
            <Col md={9} mdOffset={1}>
              <Row>
                <div className="center">No films found</div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
