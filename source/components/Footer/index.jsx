// Not sure if it is needed any more
import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as style from './style';
import Location from '../Location';
import KlequisBrand from '../KlequisBrand';

const Footer = () => {

  return (
    <div>
      <Location />
      <KlequisBrand />
    </div>
  );
};

export default Footer;
