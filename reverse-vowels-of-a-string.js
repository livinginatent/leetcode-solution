const reverseVowels = function (s) {
  let word = s.split("");
  let vowels = "aeouiAEOUI";
  let start = 0;
  let end = word.length - 1;
  while (start < end) {
    while (start < end && !vowels.includes(word[start])) {
      start++;
    }
    while (start < end && !vowels.includes(word[end])) {
      end--;
    }
    [word[start], word[end]] = [word[end], word[start]];
    start++;
    end--;
  }
  return word.join('');
};
