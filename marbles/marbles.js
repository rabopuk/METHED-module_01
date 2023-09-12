/* eslint-disable max-len */
'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;

  // Рандомный true или false
  const getRandomBoolean = () => Math.random() < 0.5;

  // Бот "не угадал" в текущем раунде (когда getRandomBoolean > 0.5) или "угадал" (getRandomBoolean < 0.5)
  const getBotGuess = getRandomBoolean;

  // Промт игроку и валидация ввода
  const getPlayerInput = () => {
    const input = prompt(`У вас ${playerBalls} шариков. Введите количество шариков от 1 до ${playerBalls}:`);

    if (input === null) {
      return null;
    }

    const parsedInput = parseInt(input);

    if (isNaN(parsedInput) || parsedInput < 1 || parsedInput > playerBalls) {
      alert('Пожалуйста, введите корректное число шариков.');

      return getPlayerInput();
    }

    return parsedInput;
  };

  const game = () => {
    const playRound = () => {
      const guess = getPlayerInput();

      // Игра завершена
      if (guess === null) return;

      const isRight = getBotGuess();

      // Если бот "угадал"
      if (isRight) {
        playerBalls -= guess;
        botBalls += guess;

        alert(`Бот угадал! У вас осталось ${playerBalls} ●▲■.`);
        // Если не "угадал"
      } else {
        playerBalls += guess;
        botBalls -= guess;

        alert(`Бот не угадал! У вас теперь ${playerBalls} ●▲■.`);
      }

      // Проверка на завершение игры
      if (botBalls >= 10) {
        alert('Вы проиграли! У вас закончились ●▲■.');

        return;
      } else if (playerBalls >= 10) {
        alert('Вы выиграли! У бота закончились ●▲■.');

        return;
      } else {
        alert(`У вас ${playerBalls} ●▲■, у бота ${botBalls} ●▲■.`);

        // Новый раунд, если кто-то не проиграл
        playRound();
      }
    };

    // Начало игры
    playRound();
  };

  window.marbles = game;
})();
