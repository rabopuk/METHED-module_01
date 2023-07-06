/* eslint-disable max-len */
'use strict';
// Усовершенствуйте игру, которую написали в game01
// бот предлагает ввести два числа, и загадывает случайное число в этом диапазоне
// бот запоминает каждое число которое ввел пользователь и записывает в массив
// бот отграничивает количество попыток до 30 % от количества цифр в диапазоне
// если пользователь повторно ввел число, которое вводил ранее, то бот выводит "Это число вы уже вводили" попытка не засчитывается
// если диапазон от 50 до 100, то попыток бот даёт 15
// если попытки закончились игра прекращается

{
  // Генерирую случайное число в заданном диапазоне
  const generateRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  // Если промпт отменён
  const checkPromptCancel = (prompt) => prompt === null || prompt === '' || prompt === 0;


  // Промпт и проверка на число
  const promptNum = (str = 'Твоё предположение?') => {
    let text = prompt(str);

    while (isNaN(parseFloat(text)) && !isFinite(parseFloat(text))) {
      if (checkPromptCancel(text)) {
        return text;
      } else {
        alert('Введи число');
        text = prompt(str);
      }
    }

    return text;
  };


  // Проверка, является ли число повторяющимся в массиве
  const isNumberRepeated = (number, array) => array.includes(number);


  // Рекурсия
  const foo = (attempt, num, numbersArray, maxAttempts, range) => {
    if (checkPromptCancel(attempt)) {
      return alert('Конец игры(((');
    }

    while (isNumberRepeated(+attempt, numbersArray)) {
      alert('Это число уже было. Попытка не засчитывается');
      attempt = promptNum();
    }

    numbersArray.push(+attempt);
    console.log('numbersArray: ', numbersArray);


    if (+attempt === num) {
      return alert(`Ты угадал(а)!!! Загаданное число было " ${num} "! ПОЗДРАВЛЯЮ)))`);
    }

    if (numbersArray.length > maxAttempts) {
      return alert(`Попытки закончились! Загаданное число было ${num}. Игра окончена`);
    }

    +attempt < num ?
      alert(`Загаданное число больше. Осталось попыток: ${maxAttempts - numbersArray.length}.\nНапоминаю, угадать нужно из диапазона ${range}`) :
      alert(`Загаданное число меньше. Осталось попыток: ${maxAttempts - numbersArray.length}.\nНапоминаю, угадать нужно из диапазона ${range}`);

    attempt = promptNum();

    return foo(attempt, num, numbersArray, maxAttempts, range);
  };


  // Игра
  const bot = () => {
    alert(`Игра: отгадай число в загаданном тобой диапазоне`);

    const minNum = promptNum('Загадай первое число');

    if (checkPromptCancel(minNum)) {
      return alert('Конец игры(((');
    }

    const maxNum = promptNum('Загадай второе число');

    if (checkPromptCancel(maxNum)) {
      return alert('Конец игры(((');
    }

    const range = `" ${Math.min(minNum, maxNum)} / ${Math.max(minNum, maxNum)} "`;
    const randomNum = generateRandomNumber(minNum, maxNum);
    console.log('randomNum: ', randomNum);

    // Массив для хранения введенных чисел
    const numbersArray = [];

    // Количество попыток (30% от количества чисел в диапазоне)
    const maxAttempts = Math.floor((Math.abs(maxNum - minNum) + 1) * 0.3);


    alert(`Отгадай число в диапазоне ${range}. Количество попыток: ${maxAttempts}`);

    const res = promptNum();

    // Крутим рекурсию до победного или отмены
    foo(res, randomNum, numbersArray, maxAttempts, range);
  };

  setTimeout(() => {
    bot();
  }, 3000);
}

