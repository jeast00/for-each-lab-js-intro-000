function iterativeLog (array) {
  array.forEach(callback => {
    console.log(`${array.index}: ${array}`);
  })
}

function iterate(callback) {
  const array = ["Not Empty Array"];
  array.forEach(callback => {
    return array;
  })
}

function doToArray(array, callback) {
  array.forEach(callback);
}
