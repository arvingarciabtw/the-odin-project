function caesarCipher(str, shiftFactor) {
  const split = str.split("");
  const result = [];

  function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
  }

  split.forEach((char) => {
    if (isLetter(char)) {
      if (char.toUpperCase() === char) {
        let shiftedAsciiCode = char.charCodeAt(0) + shiftFactor;
        if (shiftedAsciiCode > 90) {
          let asciiCode = shiftedAsciiCode - 26;
          result.push(String.fromCharCode(asciiCode));
        } else {
          result.push(String.fromCharCode(shiftedAsciiCode));
        }
      }

      if (char.toLowerCase() === char) {
        let shiftedAsciiCode = char.charCodeAt(0) + shiftFactor;
        if (shiftedAsciiCode > 122) {
          let asciiCode = shiftedAsciiCode - 26;
          result.push(String.fromCharCode(asciiCode));
        } else {
          result.push(String.fromCharCode(shiftedAsciiCode));
        }
      }
    } else {
      result.push(char);
    }
  });

  return result.join("");
}

export default caesarCipher;
