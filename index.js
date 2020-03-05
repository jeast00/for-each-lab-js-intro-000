function iterativeLog (array) {
  array.forEach((index, element) => {
    console.log(`${index}: ${element}`);
  });
}

function iterate(callback) {
  const arrays = ["Not Empty Array"];
  arrays.forEach((array, callback) => {
    return array;
  });
}

function doToArray(array, callback) {
  array.forEach(callback);
}
