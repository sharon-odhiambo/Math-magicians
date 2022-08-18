import React from 'react';
import { render } from '@testing-library/react';
import Quote from '../../spa/quote.js';

describe('Quote', () => {
  test('should match Quote snapshot', () => {
    const tree = render(
      <Quote />,
    );
    expect(tree).toMatchSnapshot();
  });
});
