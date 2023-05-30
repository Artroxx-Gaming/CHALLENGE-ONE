function performOperation() {
  var text = document.getElementById("text").value.toLowerCase();
  var operation = document.querySelector('input[name="operation"]:checked').value;

  var dictionary;
  if (operation === "encrypt") {
    dictionary = {
      'e': 'enter',
      'i': 'imes',
      'a': 'ai',
      'o': 'ober',
      'u': 'ufat'
    };
  } else {
    dictionary = {
      'enter': 'e',
      'imes': 'i',
      'ai': 'a',
      'ober': 'o',
      'ufat': 'u'
    };
  }

  var result = "";
  var words = text.split(' ');
  for (var i = 0; i < words.length; i++) {
    var word = words[i];
    var decryptedWord = "";
    var j = 0;
    while (j < word.length) {
      var foundMatch = false;
      for (var key in dictionary) {
        if (word.startsWith(dictionary[key], j)) {
          decryptedWord += key;
          j += dictionary[key].length;
          foundMatch = true;
          break;
        }
      }
      if (!foundMatch) {
        decryptedWord += word[j];
        j++;
      }
    }
    result += decryptedWord + " ";
  }

  document.getElementById("result").value = result.trim();
}

function copyResult() {
  var resultTextarea = document.getElementById("result");
  resultTextarea.select();
  document.execCommand("copy");
}
