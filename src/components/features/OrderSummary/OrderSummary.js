import React from 'react';
import PropTypes from 'prop-types';
//import { Grid, Row, Col } from 'react-flexbox-grid';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

const OrderSummary = (props) => (
  <h2 className={styles.component}>Total: <strong>{formatPrice(calculateTotal(props.cost, props.options))}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.node,
  options: PropTypes.node,
  formatPrice: PropTypes.func,
  calculateTotal: PropTypes.func,
};

export default OrderSummary;