import React from 'react';
//import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = () => (
  <div>
    <input type="text" placeholder="type here" className={styles.inputSmall}></input>
  </div>
);

export default OrderOptionText;