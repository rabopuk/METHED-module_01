// Получите от пользователя 2 числа
// Напишите функцию нахождения минимального числа, без использования условного оператора, циклов и массивов
// Не используйте Math.max и Math.min

let numb1 = +prompt('Введите первое число');
let numb2 = +prompt('Введите второе число');

const findMin = (x, y) => (x + y - Math.abs(x - y)) / 2;

alert(`Минимальное число: ${findMin(numb1, numb2)}`)
console.log('findMin: ', findMin(numb1, numb2));

// const findMax = (x, y) => (x + y + Math.abs(x - y)) / 2;
// console.log('findMax: ', findMax(numb1, numb2));
