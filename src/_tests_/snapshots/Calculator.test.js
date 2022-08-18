import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../../components/Calculator';

describe('Calculator', () => {
  test('should match Calculator snapshot', () => {
    const tree = render(
      <Calculator />,
    );
    expect(tree).toMatchSnapshot();
  });
});
