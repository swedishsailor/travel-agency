import React, { useState } from 'react';
//import PropTypes from 'prop-types';
//import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import picker from './DatePicker.scss';

const OrderOptionDate = () => {
  //var DatePicker = require('react-datepicker/dist/react-datepicker-cssmodules.css');
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div>
      <DatePicker className={picker.dpicker} selected={startDate} onChange={(date) => setStartDate(date)}/>
    </div>
  );
};

export default OrderOptionDate;