import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Choices from '../components/Choices';

configure({adapter: new Adapter() });

describe('Choices', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Choices />);
  });

  it('should exist', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have only six images', () => {
    expect(wrapper.find('button').children().length).toEqual(6);
  });

  it('rock image should have an onClick handler', () => {
    expect(wrapper.find('.rock').props().onClick).toBeTruthy();
  });

  it('paper image should have an onClick handler', () => {
    expect(wrapper.find('.paper').props().onClick).toBeTruthy();
  });

  it('scissors image should have an onClick handler', () => {
    expect(wrapper.find('.scissors').props().onClick).toBeTruthy();
  });

  it('lizard image should have an onClick handler', () => {
    expect(wrapper.find('.lizard').props().onClick).toBeTruthy();
  });

  it('spock image should have an onClick handler', () => {
    expect(wrapper.find('.spock').props().onClick).toBeTruthy();
  });
  
});