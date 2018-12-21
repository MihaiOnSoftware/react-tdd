// index.test.js
const fizzBuzz = require('./index');
describe('fizzBuzz()', () => {
  it('returns "FizzBuzz" for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
  });
  it('returns "Fizz" for multiples of 3 and not 5', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(6)).toBe('Fizz');
  });
  it('returns "Buzz" for multiples of 5 and not 3', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });
  it("returns the number if it's not a multiple of 5 or 3", () => {
    expect(fizzBuzz(7)).toBe('7');
    expect(fizzBuzz(23)).toBe('23');
  });
})
