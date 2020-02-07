import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';

const Header = title => {
  return (
    <h1 className={styles.component}>{title}</h1>
  );
};

Header.propType = {
  title: PropTypes.string,
};

export default Header;
