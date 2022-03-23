import operate from '../logic/operate';
import calculate from '../logic/calculate';

describe('tests for calculating logic', () => {
  let obj = {};

  beforeEach(() => {
    obj = {
      total: '12',
      next: '3',
      operation: '-',
    };
  });

  test('clear the aboject if "AC" button is presses', () => {
    expect(calculate(obj, 'AC')).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  test("if user tries to enter multi digit 0's return empty object", () => {
    obj.next = '0';
    expect(calculate(obj, '0')).toEqual({});
  });

  test("if there is on going operation add '0' digit to existing next number", () => {
    expect(calculate(obj, '0')).toEqual({
      total: '12',
      next: '30',
      operation: '-',
    });
  });

  test('when "=" is pressed total: 9 must be returned and other fields cleared', () => {
    expect(calculate(obj, '=')).toEqual({
      total: '9',
      next: null,
      operation: null,
    });
  });

  test('when "=" is pressed if there is no next(new) and operation values return empty object', () => {
    obj = { total: '9' };
    expect(calculate(obj, '=')).toEqual({});
  });

  test('if "+/-" is pressed integer sign must reverse', () => {
    expect(calculate(obj, '+/-')).toEqual({
      total: '12',
      next: '-3',
      operation: '-',
    });
  });
});

describe('test for operating logic', () => {
  test('2 + 3 should equal to 5', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  test('2 - 3 should equal to -1', () => {
    expect(operate(2, 3, '-')).toBe('-1');
  });
  test('2 x 3 should equal to 6', () => {
    expect(operate(2, 3, 'x')).toBe('6');
  });
  test('2 ÷ 3 should equal to 2/3', () => {
    expect(operate(2, 3, '÷')).toBe('0.66666666666666666667');
  });
  test("2 ÷ 0 should equal to Can't divide by 0.", () => {
    expect(operate(2, 0, '÷')).toBe("Can't divide by 0.");
  });
  test('2 % 3 should equal to 2', () => {
    expect(operate(2, 3, '%')).toBe('2');
  });
  test("2 % 0 should equal to Can't find modulo as can't divide by 0.", () => {
    expect(operate(2, 0, '%')).toBe("Can't find modulo as can't divide by 0.");
  });
  test('2 + 3 should equal to 5', () => {
    expect(operate(2, 3, '+')).toBe('5');
  });
  test("2 ^ 3 should Throw Unknown operation '^'", () => {
    expect(() => operate(2, 3, '^')).toThrow("Unknown operation '^'");
  });
});
