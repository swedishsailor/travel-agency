import React from 'react';
import styles from './OrderOption.scss';
import PropTypes from 'prop-types';
import { formatPrice } from '../../../utils/formatPrice';
import Icon from '../../common/Icon/Icon';


const OrderOptionIcons = ({values, setOptionValue}) => (
  <div className={styles.component}> 
    <div className={styles.icon} onClick={() => (setOptionValue(''))}>
      <Icon name={'times-circle'}/>
      none
    </div>
    {values.map(value => (
      <div key={value.id} className={styles.icon} onClick={() => (setOptionValue(value.name))}>
        <Icon name={value.icon}/>  
        {value.name}
         - 
        {formatPrice(value.price)}
      </div>
    ))}

  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  setOptionValue: PropTypes.func,
};


export default OrderOptionIcons;