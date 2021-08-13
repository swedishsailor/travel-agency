import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('renders properly', () => {
    const component = shallow(<OrderOption type='numer' name='zz' />);
    expect(component).toBeTruthy();
  });
});