const checkLength = function (string, maxLength) {
  const result = string.length <= maxLength;
  return result;
};

console.log(checkLength('Hello World', 11));

const checkPalindrome = function (string) {
  const startingString = string.replaceAll(' ', '');
  const normalizedString = startingString.toLowerCase();

  let containerString = '';

  for (let i = string.length - 1; i >= 0; i--) {
    const symbol = normalizedString[i];
    containerString += symbol;
  }

  const result = containerString === normalizedString;

  return result;
};

console.log(checkPalindrome('Доход'));
