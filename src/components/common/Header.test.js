import React from 'react';
import TestUtils, {createRenderer, Simulate} from 'react-addons-test-utils';
import expect from 'expect';
import Header from './Header';
import {mount, shallow} from 'enzyme';

describe('Header', () => {

  it('should contain 2 Links via shallow', () => {
    const numLinks = shallow(<Header />).find('Link').length;

    expect(numLinks).toEqual(2);
  });

  it('contains 3 anchors via mount', () => {
    const numAnchors = mount(<Header  />).find('a').length;

    expect(numAnchors).toEqual(4);
  });

  it('contains no links with active class by default', () => {
    const linksWithActiveClass = shallow(<Header />).find('.active');

    expect(linksWithActiveClass.length).toEqual(0);
  });
});
