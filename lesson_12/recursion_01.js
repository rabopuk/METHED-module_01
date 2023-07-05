/* eslint-disable max-len */
'use strict';

{
  // Генерирую случайное число
  const generateRandomNumbers = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNum;
  };


  // Промпт и проверка на число
  const promptNum = () => {
    let text = prompt('Твоё предположение?');

    while (isNaN(text)) {
      alert('Введи число');
      text = prompt('Следующая попытка!');
    }

    return text;
  };


  // Рекурсия
  const foo = (attempt, num) => {
    // Отмена игры
    if (attempt === null || attempt === '' || attempt === 0) {
      return alert('Конец игры(((');
    }

    if (+attempt === num) {
      return alert(`Ты угадал(а)!!! Загаданное число было ${num}! ПОЗДРАВЛЯЮ)))`);
    }

    +attempt < num ?
      alert('Загаданное число больше') :
      alert('Загаданное число меньше');

    attempt = promptNum();

    return foo(attempt, num);
  };


  // Игра
  const bot = () => {
    const randomNum = generateRandomNumbers(1, 100);
    console.log('randomNum: ', randomNum);

    alert('Игра: отгадай число в диапазоне 1-100');

    const res = promptNum();

    // Кручу рекурсию до победного или отмены
    foo(res, randomNum);
  };

  // setTimeout(() => {
  //   bot();
  // }, 3000);
}


