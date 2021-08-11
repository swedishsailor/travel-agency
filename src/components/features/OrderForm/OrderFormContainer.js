import { connect } from 'react-redux';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';

const mapStateToProps = (state, props) => {
  const options = getOrderOptions(state, props.options);

  return{
    options,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: value => dispatch(setOrderOption(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);

