
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if(matrix === undefined)
    return []
  else  return matrix.reduce((arr, el, index) => index % 2 !== 1 ? arr.concat(...el) : arr.concat(el.reverse()), []);
}
