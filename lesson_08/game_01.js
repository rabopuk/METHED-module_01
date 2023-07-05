/* eslint-disable max-len */
'use strict';
// Написать простой игровой бот, который умеет следующее:
// Загадывает число от 1 до 100;
// предлагает пользователю ввести свой вариант отгадки;
// если пользовательское число больше, чем загаданное, то бот выводит “Меньше!” и предлагает ввести новый вариант;
// если пользовательское число меньше, чем загаданное, то бот выводит “Больше!” и предлагает ввести новый вариант;
// если пользователь вводит правильное число, то бот выводит “Правильно!”;
// если пользователь ввел не число, то выводит “Введи число!”;
// если пользователь нажимает “Отмена”, то игра заканчивается.

{
  // Генерирую случайное число
  const generateRandomNumbers = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const randomNum = Math.floor(Math.random() * (max - min + 1) + min);

    return randomNum;
  };

  // Проверка, что пользователь ввёл число
  const isNumber = (text) => {
    if (Number.isFinite(+text) && !Number.isNaN(+text)) {
      return text;
    } else {
      alert('Введи число!');
      text = isNumber(prompt('Твоё предположение?'));
    }

    return text;
  };

  const bot = () => {
    const randomNum = generateRandomNumbers(1, 100);
    console.log('randomNum: ', randomNum);

    alert('Игра: отгадай число в диапазоне 1-100');

    let res = isNumber(prompt('Твоё предположение?'));

    // Игра
    while (+res !== randomNum) {
      // Отмена игры
      if (res === null || res === '' || res === 0) {
        alert('Конец игры(((');
        return;
      }

      if (+res < randomNum) {
        alert('Загаданное число больше');

        res = isNumber(prompt('Следующая попытка!'));
      }

      if (+res > randomNum) {
        alert('Загаданное число меньше');

        res = isNumber(prompt('Следующая попытка!'));
      }

      if (+res === randomNum) {
        alert(`Ты угадал(а)!!! Загаданное число было ${randomNum}! ПОЗДРАВЛЯЮ)))`);

        console.log(`Ты угадал(а)!!! Загаданное число было ${randomNum}! ПОЗДРАВЛЯЮ)))`);

        return;
      }
    }

    return;
  };

  // setTimeout(() => {
  // 	bot();
  // }, 3000);
}
