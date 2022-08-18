import operate from '../../logic/operate';

describe('The function', () => {
  test('adds numbers', () => {
    expect(operate(3, 2, '+')).toBe('5');
  });

  test('gets the difference between two numbers', () => {
    expect(operate(63, 3, '-')).toBe('60');
  });

  test('multiplies numbers', () => {
    expect(operate(2, 14, 'x')).toBe('28');
  });

  test('divides', () => {
    expect(operate(12, 2, '÷')).toBe('6');
  });

  test('gets the modulus of two numbers', () => {
    expect(operate(12, 2, '%')).toBe('0');
  });
});
