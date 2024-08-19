function getRandomReplacement(replacements) {
  return replacements[Math.floor(Math.random() * replacements.length)];
}

function performOperation() {
  var text = document.getElementById("text").value.toLowerCase();
  var operation = document.querySelector('input[name="operation"]:checked').value;

  var dictionary;
  if (operation === "encrypt") {
    dictionary = {
      'a': ['@12', '#34', '$56'],
      'b': ['!ab', 'cd?', 'efg#'],
      'c': ['h*i', 'j&k', 'lm^'],
      'd': ['n=o', 'pq+', 'rs-'],
      'e': ['~tU', 'Vx%', 'yz/'],
      'f': ['m&z', 'op@', 'qr*'],
      'g': ['s+t', 'uv-', 'wx%'],
      'h': ['y^z', '12+', '34*'],
      'i': ['56%', '78=', '90/'],
      'j': ['a!b', 'c?d', 'e#f'],
      'k': ['g^h', 'i@j', 'k+l'],
      'l': ['m*n', 'o/p', 'q=r'],
      'm': ['s+t', 'u-v', 'w.x'],
      'n': ['y!z', '12@', '34#'],
      'o': ['56$', '78%', '90^'],
      'p': ['a*b', 'c=d', 'e&f'],
      'q': ['g+h', 'i=j', 'k^l'],
      'r': ['m#n', 'o!p', 'q@r'],
      's': ['t-u', 'v=w', 'x+y'],
      't': ['z^a', '1!2', '3?4'],
      'u': ['5#6', '7&8', '9(0'],
      'v': ['a)b', 'c/d', 'e*f'],
      'w': ['g=h', 'i@j', 'k+l'],
      'x': ['m-n', 'o/p', 'q=r'],
      'y': ['s+t', 'u-v', 'w.x'],
      'z': ['y!z', '12@', '34#'],
      ' ': ['|p3', '&1*', '9~'],
      '.': ['0xz', '9.1', '?qr'],
      ',': ['m@3', '#c4', '5!d']
    };

    var result = "";
    for (var i = 0; i < text.length; i++) {
      var char = text[i];
      if (dictionary[char]) {
        result += getRandomReplacement(dictionary[char]);
      } else {
        result += char;
      }
    }

  } else {
    dictionary = {
      '@12': 'a', '#34': 'a', '$56': 'a',
      '!ab': 'b', 'cd?': 'b', 'efg#': 'b',
      'h*i': 'c', 'j&k': 'c', 'lm^': 'c',
      'n=o': 'd', 'pq+': 'd', 'rs-': 'd',
      '~tU': 'e', 'Vx%': 'e', 'yz/': 'e',
      'm&z': 'f', 'op@': 'f', 'qr*': 'f',
      's+t': 'g', 'uv-': 'g', 'wx%': 'g',
      'y^z': 'h', '12+': 'h', '34*': 'h',
      '56%': 'i', '78=': 'i', '90/': 'i',
      'a!b': 'j', 'c?d': 'j', 'e#f': 'j',
      'g^h': 'k', 'i@j': 'k', 'k+l': 'k',
      'm*n': 'l', 'o/p': 'l', 'q=r': 'l',
      's+t': 'm', 'u-v': 'm', 'w.x': 'm',
      'y!z': 'n', '12@': 'n', '34#': 'n',
      '56$': 'o', '78%': 'o', '90^': 'o',
      'a*b': 'p', 'c=d': 'p', 'e&f': 'p',
      'g+h': 'q', 'i=j': 'q', 'k^l': 'q',
      'm#n': 'r', 'o!p': 'r', 'q@r': 'r',
      't-u': 's', 'v=w': 's', 'x+y': 's',
      'z^a': 't', '1!2': 't', '3?4': 't',
      '5#6': 'u', '7&8': 'u', '9(0': 'u',
      'a)b': 'v', 'c/d': 'v', 'e*f': 'v',
      'g=h': 'w', 'i@j': 'w', 'k+l': 'w',
      'm-n': 'x', 'o/p': 'x', 'q=r': 'x',
      's+t': 'y', 'u-v': 'y', 'w.x': 'y',
      'y!z': 'z', '12@': 'z', '34#': 'z',
      '|p3': ' ', '&1*': ' ', '9~': ' ',
      '0xz': '.', '9.1': '.', '?qr': '.',
      'm@3': ',', '#c4': ',', '5!d': ','
    };

    var result = "";
    var i = 0;
    while (i < text.length) {
      var foundMatch = false;
      for (var key in dictionary) {
        if (text.startsWith(key, i)) {
          result += dictionary[key];
          i += key.length;
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        result += text[i];
        i++;
      }
    }
  }

  document.getElementById("result").value = result.trim();
}

function copyResult() {
  var resultTextarea = document.getElementById("result");
  resultTextarea.select();
  document.execCommand("copy");
}
