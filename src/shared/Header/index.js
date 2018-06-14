import React, { Component } from 'react';
import { Row, Col, FormGroup, FormControl, ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

import './header.style.less';

const rouletteHeader = classNames({
  'show-grid': true,
  'rouletteHeader': true,
});

export default class Header extends Component {
  constructor(props) {
    super(props);

    this.searchChange = this.searchChange.bind(this);
    this.filterChange = this.filterChange.bind(this);

    this.state = {
      'phrase': '',
      'filterBy': '',
    };
  }

  searchChange(search) {
    this.setState({ phrase: search.target.value });
  }

  filterChange(filter) {
    this.setState({ 'filterBy': filter.target.value });
  }

  render() {
    let filter = this.state.filterBy;
    let phrase = this.state.phrase;
    let pathname = '/'+filter+'/'+phrase;
    return (
      <Row className={rouletteHeader}>
        <Col md={12}>
          <Row>
            <Col md={8} mdOffset={2}>
              <div className='logo'>
                <NavLink to={{ pathname: '/' }}>
                  NetflixRoulette
                </NavLink>
              </div>
              <div className='title'>
                Find your movie
              </div>
              <div className='search-bar'>
                <form>
                  <FormGroup
                    controlId = "formBasicText"
                  >
                    <FormControl
                      type = "text"
                      value = {this.state.phrase}
                      placeholder = "What are you looking for?"
                      onChange = {this.searchChange}
                    />
                  </FormGroup>
                </form>
              </div>
              <div className='menu-bar'>
                <div className="info-text">
                  <span>Search by</span>
                  <ButtonGroup>
                    <Button
                      className="search-by-title"
                      value="title"
                      onClick={ (e) => this.filterChange(e)}
                    >Title</Button>
                    <Button
                      className="search-by-genre"
                      value="genres"
                      onClick={ (e) => this.filterChange(e)}
                    >Genre</Button>
                  </ButtonGroup>
                  <NavLink to={{ pathname: pathname }}>
                    <Button className="search">Search</Button>
                  </NavLink>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  };
};
