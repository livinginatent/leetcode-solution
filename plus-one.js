const plusOne = (digits) => {
  return (parseInt(digits.join("")) + 1).toString().split("");
};

plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]);
