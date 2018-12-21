// index.js
module.exports = (num) => {
  fizzBuzz = fizz(num) + buzz(num);

  if(fizzBuzz) return fizzBuzz;
  return '' + num;

  function fizz(num) {
    if (num % 3 == 0) return 'Fizz';
    return '';
  };

  function buzz(num) {
    if (num % 5 == 0) return 'Buzz';
    return '';
  };
};
