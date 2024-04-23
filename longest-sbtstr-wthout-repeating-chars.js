var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let res = 0;
  let charSet = new Set();

  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) { //
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    res = Math.max(res, right - left + 1);

    return res;
  }
};

lengthOfLongestSubstring("abcabcbb");
