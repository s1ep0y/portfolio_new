import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as actions from '../actions';

const Header = () => {
  const history = useHistory();

  const toHome = () => {
    history.push('/');
  };

  return (
    <header className="page-header">
      <p>header</p>
    </header>
  );
};

export default Header;
