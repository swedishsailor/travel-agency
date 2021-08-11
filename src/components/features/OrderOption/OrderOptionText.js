import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({setOptionValue}) => (
  <div>
    <input type="text" placeholder="type here" className={styles.inputSmall} onChange={event => setOptionValue(event.currentTarget.value)}></input>
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;