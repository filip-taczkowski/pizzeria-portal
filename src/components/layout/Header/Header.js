import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = props => {
  return (
    <h1 className={styles.component}>{props.title}</h1>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
