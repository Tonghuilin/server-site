import React from 'react';
import PropTypes from 'prop-types';
import { homeTitle } from './homeStyle';

const Home = ({ title, name }) => (
  <div className={homeTitle}>
    {title}
    {' '}
    {name}
  </div>
);

Home.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
};

Home.defaultProps = {
  title: '',
  name: '',
};

export default Home;
