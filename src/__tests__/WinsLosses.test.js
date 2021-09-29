import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinsLosses from '../components/WinsLosses';

configure({adapter: new Adapter() });

describe('Choices', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<WinsLosses wins={3} losses={4}  />);
    });
  
    it('should exist', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should be number', () => {
    wrapper.find('.number').contains('number');
    });

    it('should be text', () => {
        wrapper.find('.text').contains('text');
    });

    it('should render the win score', () => {
      expect(wrapper.find('.wins').html()).toEqual('<div class="wins"><span class="number">3</span><span class="text">Wins</span></div>');
    });

    it('should render the loss score', () => {
      expect(wrapper.find('.losses').html()).toEqual('<div class="losses"><span class="number">4</span><span class="text">Losses</span></div>');
    });

    // it('should return the proper win text when passed the win prop', () => {
    //   wrapper = shallow(<WinsLosses wins={'wins'} />);
    //   expect(wrapper.html()).toEqual('<div className="wins"><span className="number">{wins}</span><span className="text">{wins === 1 ? "Win" : "Wins"}</span></div>');
    // });

});