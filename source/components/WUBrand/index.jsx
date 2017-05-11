// Not sure if it is needed any more
import React from 'react';
import { PropTypes } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions';
import * as selectors from '../../store/selectors';
import * as style from './style';

const Branding = ({ branding }) => {
  const logoURL = "http://klequis.com/images/weather/wunderground.logo.png";
  return (
    <a style={style.item} href={branding.link}><img style={style.logo} src={logoURL}></img></a>
  );
};

const mapStateToProps = (state) => {
  return {
    branding: selectors.getBranding(state),
  };
};

export default connect(mapStateToProps, actionCreators)(Branding);
