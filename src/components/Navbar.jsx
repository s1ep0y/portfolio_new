import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

const Navbar = () => {
  const history = useHistory();

  const toHome = () => {
    history.push('/');
  };

  return (
    <div className="page-navbar">
      <p>Navbar</p>
    </div>
  );
};

export default Navbar;
