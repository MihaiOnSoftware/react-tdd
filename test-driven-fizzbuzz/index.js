// index.js
module.exports = (num) => {
  return fizz(num) + buzz(num);

  function fizz(num) {
    if (num % 3 == 0) return 'Fizz';
    return '';
  };

  function buzz(num) {
    if (num % 5 == 0) return 'Buzz';
    return '';
  };
};
