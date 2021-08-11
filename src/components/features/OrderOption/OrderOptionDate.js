import React, { useState } from 'react';
import PropTypes from 'prop-types';
//import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import picker from './DatePicker.scss';

const OrderOptionDate = ({setOptionValue}) => {
  //var DatePicker = require('react-datepicker/dist/react-datepicker-cssmodules.css');
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker className={picker.dpicker} selected={startDate} onChange={(date) => (setStartDate(date), setOptionValue(date))}/>
    </div>
  );
};

OrderOptionDate.propTypes = {
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;