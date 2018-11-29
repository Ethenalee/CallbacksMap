var words = ["ground", "control", "to", "major", "tom"];

map(words, function(word) {
  return word.length;
});

map(words, function(word) {
  return word.toUpperCase();
});

map(words, function(word) {
  return word.split('').reverse().join('');
});


function map(array, callback) {
  var arr = [];
  for(arrayE of array) {
    arr.push(callback(arrayE));
  }
  console.log(arr);
}

