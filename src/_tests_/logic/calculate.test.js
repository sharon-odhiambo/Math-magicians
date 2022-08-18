import calculate from '../../logic/calculate';

describe('The function', () => {
  test('resets the input results', () => {
    expect(calculate({ total: '6', next: null, operation: '+' }, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test('returns the result of operating two numbers', () => {
    expect(calculate({ total: '8', next: '5', operation: '+' }, '=')).toEqual({
      total: '13',
      next: null,
      operation: null,
    });
  });

  test('returns an empty object if next and buttonName are 0', () => {
    expect(calculate({ total: '8', next: '0' }, '0')).toEqual({});
  });

  test('concantenates consecutive positive values', () => {
    expect(calculate({ total: null, next: '5' }, '8')).toEqual({
      total: null,
      next: '58',
    });
  });

  test('toggles between positive and negative values', () => {
    expect(calculate({ next: '12' }, '+/-')).toEqual({
      next: '-12',
    });
  });

  test('concatetates value with operation', () => {
    expect(calculate({ total: '5', next: null, operation: null }, '%')).toEqual({
      total: '5',
      next: null,
      operation: '%',
    });
  });

  test('changes the operation if one is already existing', () => {
    expect(calculate({ total: '5', next: null, operation: '-' }, '+')).toEqual({
      total: '5',
      next: null,
      operation: '+',
    });
  });

  test('displays operation if total is null', () => {
    expect(calculate({ total: null, operation: '+' }, '+')).toEqual({
      total: 0,
      operation: '+',
    });
  });

  test('displays operation if a number has not been clicked', () => {
    expect(calculate({ next: null, operation: null }, '+')).toEqual({
      operation: '+',
    });
  });

  test('sets the first value as the total', () => {
    expect(calculate({ total: null, next: '5', operation: null }, '+')).toEqual({
      total: '5',
      next: null,
      operation: '+',
    });
  });
});
