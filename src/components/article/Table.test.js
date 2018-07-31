import expect from 'expect';
import React from 'react';
import Table from './Table';
import { mount, shallow } from 'enzyme';

const setup = (articles) => {
  const props = {
    articles: articles
  };

  return shallow(<Table {...props} />);
};

describe('Table', () => {
  
  it('should render a table with 4 headers', () => {
    const wrapper = setup([]);

    expect(wrapper.find('table').length).toBe(1);
    expect(wrapper.find('th').length).toBe(4);
    expect(wrapper.find('tr').length).toBe(1);

  });
});