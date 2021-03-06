/* global describe it  */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { mount } from 'enzyme';
import sprkFormatPhone from './sprkFormatPhone';
import SprkTextInput from '../../base/inputs/SprkTextInput/SprkTextInput';

Enzyme.configure({ adapter: new Adapter() });

describe('sprkFormatPhone tests', () => {
  it('should format the Phone in the (XXX) XXX-XXXX style', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = '1234567890';
    expect(sprkFormatPhone(input.value)).toBe('(123) 456-7890');
  });

  it('should return null on invalid input', () => {
    const wrapper = mount(<SprkTextInput />);
    const input = wrapper.find('input');
    input.value = 'asdf';
    expect(sprkFormatPhone(input.value)).toBe(null);
  });
});
