import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate correct link', () => {
    const expectedLink = '/trip/abc';
    const expectedId = 'abc';
    const component = shallow(<TripSummary link={expectedLink} id={expectedId} tags={[]}/>);

    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should render image with correct src and alt', () => {
    const expectedSrc= 'image.png';
    const expectedAlt = 'image';
    const component = shallow(<TripSummary image={expectedSrc} name={expectedAlt} tags={[]}/>);

    expect(component.find('.img').prop('src')).toEqual(expectedSrc);
    expect(component.find('.img').prop('alt')).toEqual(expectedAlt);
  });

  it('should properly render props name, cost and days', () => {
    const expectedName = 'name';
    const expectedCost = '2';
    const expectedDays = '3';
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);

    expect(component.find('.details span').at(0).text()).toEqual(`${expectedDays} days`);
    expect(component.find('.title').text()).toEqual(expectedName);
    expect(component.find('.details span').last().text()).toEqual(`from ${expectedCost}`);
  });

  it('should throw warning in case of lack of props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags.map with generated array values', () => {
    const expectedTags = ['one', 'two', 'three'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    expect(component.find('.tag').at(0).text()).toEqual(expectedTags[0]);
    expect(component.find('.tag').at(1).text()).toEqual(expectedTags[1]);
    expect(component.find('.tag').at(2).text()).toEqual(expectedTags[2]);
  });

  it('should not render spans if tags is false', () => {
    const component = shallow(<TripSummary image={''} name={''} cost={''} days={''} id={''} tags={[]} />);

    expect(component.find('.tags')).toBe(false || []);
  });
});