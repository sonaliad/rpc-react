import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';
import WinsLosses from '../components/WinsLosses';
import GameState from '../components/GameState';
import Choices from '../components/Choices';

configure({adapter: new Adapter() });

describe('App', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<App />);
    });
  
    it('should exist', () => {
      expect(wrapper).toBeTruthy();
    });

    it('should have the WinsLosses component', () => {
        expect(wrapper.find(WinsLosses).length).toEqual(1);
    });

    // it('should have the GameState component', () => {
    //     expect(wrapper.find(GameState).length).toEqual(1);
    // });

    it('should have the Choices component', () => {
        expect(wrapper.find(Choices).length).toEqual(1);
    });

    // it('should generate random choice', () => {
    //     expect(restartGame()).toMatch(/rock|paper|scissors|lizard|spock/);
    // });

    // it('should return win if the player has won', () => {
    //     expect(getWinner('rock', 'scissors')).toEqual('wins');
    //   });
    
});