import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classNames from 'classnames';

import './footer.style.less';

const rouletteFooter = classNames({
    'rouletteFooter': true,
    'show-grid': true,
});

export const Footer = (props) => {
  return (
    <Row className={rouletteFooter}>
      <Col md={12}>
        <Row>
          <div className='logo'>
              NetflixRoulette
            </div>
        </Row>
      </Col>
    </Row>
  );
};
