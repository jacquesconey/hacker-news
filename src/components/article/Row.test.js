import expect from 'expect';
import React from 'react';
import Row from './Row';
import { mount, shallow } from 'enzyme';

const setup = (article) => {
  const props = {
    article: article
  };

  return shallow(<Row {...props} />);
};

describe('Row', () => {

  const article = {
    id: '7',
    title: 'The Adventures of Steve',
    url: 'https://www.steve.com',
    by: 'Steve Stevenson',
    scrore: 101
  };
  
  it('should render a row when there is data', () => { 
    const wrapper = setup(article);

    expect(wrapper.find('.comments').length).toBe(1);
  });

  it('should have the data rendered in the row if it exists', () => {
    const wrapper = setup(article);

    expect(wrapper.find('.title').text()).toEqual('The Adventures of Steve');
    expect(wrapper.find('.author').text()).toEqual('Steve Stevenson');
    expect(wrapper.find('.comments').html()).toEqual('<td class="comments"></td>');
  });

  it('should render comments if they exist', () => {
    const article = {
      kids: [111, 111]
    };
    const wrapper = setup(article);

    expect(wrapper.find('.comments').html()).toEqual('<td class="comments"><a>2</a></td>');
  });
});