import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import './missingpage.style.less';

const rouletteDetails = classNames({
    'show-grid': true,
    'rouletteDetails': true,
});

export class MissingPage extends React.Component {
  render() {
    return (
      <Row className={rouletteDetails}>
        <Col md={12}>
          <Row>
            <Col md={9} mdOffset={1}>
              <Row>
                <div className="center">404 not found</div>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
