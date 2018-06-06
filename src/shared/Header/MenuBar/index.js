import React, { Component } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default class Menubar extends Component {
  render() {
    return (
      <div className="info-text">
        <span>Search by</span>
        <ButtonGroup bsSize="small">
          <Button className="search-by-title">Title</Button>
          <Button className="search-by-genre">Genre</Button>
        </ButtonGroup>
        <NavLink to={{ pathname: '/movies' }}>
          <Button className="search">Search</Button>
        </NavLink>
      </div>
    );
  }
}
