/* eslint-disable max-len */
'use strict';
// Напишите рекурсивную функцию, которая принимает один параметр массив, генерирует целое число от 0 до 10 включительно и добавляет его в массив.
// Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма 50 или больше, то функция возвращает этот массив.

{
  const generateRandomNumbers = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNum;
  };

  const foo = ([...arr]) => {
    const randomNum = generateRandomNumbers(0, 10);
    let sum = 0;

    arr.push(randomNum);
    // console.log('arr: ', arr);

    sum = arr.reduce((sum, cur) => sum += cur);
    // console.log('sum: ', sum);

    if (sum >= 50) {
      console.log('sum: ', sum);
      return arr;
    }

    return foo(arr);
  };

  const arr = [4, 3, 6, 1];

  console.log(foo(arr));
}
