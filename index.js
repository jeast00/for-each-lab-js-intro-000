function iterativeLog (array) {
  array.forEach((index, element) => {
    callback = (`${index}: ${element}`);
  });
}

function iterate(callback) {
  var array = ["Not Empty Array"];
  array.forEach(callback => {
    return array;
  });
}

function doToArray(array, callback) {
  array.forEach(callback);
}
