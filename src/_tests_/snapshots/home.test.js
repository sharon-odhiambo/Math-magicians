import React from 'react';
import { render } from '@testing-library/react';
import Home from '../../spa/home';

describe('Home', () => {
  test('should match Home snapshot', () => {
    const tree = render(
      <Home />,
    );
    expect(tree).toMatchSnapshot();
  });
});
