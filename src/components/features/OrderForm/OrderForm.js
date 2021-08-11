import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import pricing from '../../../data/pricing.json';
import OrderOption from '../OrderOption/OrderOption';

const OrderForm = (props) => (
  <Grid>
    <Row>
      {pricing.map(({id,name, ...otherProps}, option) => (
        <Col md={4} key={option.id}>
          <OrderOption name={name} key={id} currentValue={props.options[option.id]} setOrderOption={props.setOrderOption} {...otherProps}/>
        </Col>
      ))}
      <Col xs={12}>
        <OrderSummary cost={props.tripCost} options={props.options}/>
      </Col>
    </Row>
  </Grid>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
};

export default OrderForm;