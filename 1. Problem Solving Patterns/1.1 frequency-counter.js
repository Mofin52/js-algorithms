const validAnagram = (a, b) => {
  if (a.length !== b.length) return false;

  const freqA = {};
  const freqB = {};

  a.split("").forEach((char) => {
    freqA[char] = freqA[char] ? freqA[char] + 1 : 1;
  });

  b.split("").forEach((char) => {
    freqB[char] = freqB[char] ? freqB[char] + 1 : 1;
  });

  const letters = Object.keys(freqA);

  for (let i = 0; i < letters.length; i++) {
    if (!freqB[letters[i]]) {
      return false;
    } else if (freqB[letters[i]] !== freqA[letters[i]]) {
      return false;
    }
  }

  return true;
};

module.exports = validAnagram;
