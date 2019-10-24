import React from 'react';
import { shallow } from 'enzyme';
import Navigation from "../components/Navigation";
import axios from 'axios';

jest.mock('menuMock');

describe('Navigation component', () => {
    describe('when rendered', () => {
        it('Should go to mobile viewport and test hamburger', () => {
            jest.spyOn(axios, 'get');
            const navigationInstance = shallow(
                <Navigation />
            );
            window.innerWidth = 500;
            const hamburger = navigationInstance.find('label.navigation-trigger');
            hamburger.simulate('click');
            const links = navigationInstance.find('a');
            expect(navigationInstance.state().navigationActive).toEqual(true);
            expect(links.length).toBe(4);
            // expect(navigationInstance.find('div.navigation').get(0).props.style).toHaveProperty(
            //     'left',
            //     '0',
            // );
        });
    });
});