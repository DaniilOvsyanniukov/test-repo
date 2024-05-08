// Дана матрица (двумерный массив), нужно написать функцию, которая будет находить наименьшее значение, 
// после чего все нечетные значения в матрице будет умножать на это число.

// Исходная матрица:
// [
// [5, 3, 6], 
// [7, 11, 2],
// [15, 9, 4]
// ]

// Результат выполнения функции:
// [
// [10, 6, 6],
// [14, 22, 2],
// [30, 18, 4]
// ]

function findMin(matrix) {
    let min = matrix[0][0];
    for (let row of matrix) {
      for (let num of row) {
        if (num < min) {
          min = num;
        }
      }
    }
    return min;
  }

function multiplyOddWithMin(matrix) {
    const min = findMin(matrix);
    const result = [];
    for (let row of matrix) {
      const newRow = [];
      for (let num of row) {
        newRow.push(num % 2 !== 0 ? num * min : num);
      }
      result.push(newRow);
    }
    return result;
  }  

const matrixData = [[10, 6, 6], [14, 22, 2], [30, 18, 4]]
console.log(multiplyOddWithMin(matrixData))