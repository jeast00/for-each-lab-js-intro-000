function iterativeLog (array) {
  array.forEach((index, element) => {
    return (`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = [8675309];
  array.forEach(callback);
  return array;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
