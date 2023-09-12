/* eslint-disable max-len */
'use strict';

(() => {
  let playerBalls = 5;
  let botBalls = 5;
  let currentPlayer = 'player';

  // Рандомный true или false
  const getRandomBoolean = () => Math.random() < 0.5;

  // Бот "не угадал" в текущем раунде (когда getRandomBoolean > 0.5) или "угадал" (getRandomBoolean < 0.5)
  const getBotGuess = getRandomBoolean;

  // Рандомное число в диапазоне включительно
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Промпт игроку и валидация ввода
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

  // Завершение игры на "отмене" в промпте или Esc
  const checkIfCancelled = (input) => {
    if (input === null || input === '') {
      alert('Игра завершена.');
      throw new Error('Игра завершена');
    }
  };

  // Раунд, когда число загадывает игрок
  const playPlayerRound = () => {
    const guess = getPlayerInput();

    // ! Не срабатывает завершение игры, а только раунда
    // if (guess === null) {
    //   alert('Игра завершена.');
    //   return;
    // }

    checkIfCancelled(guess);

    const isRight = getBotGuess();

    // Если бот "угадал"
    if (isRight) {
      playerBalls -= guess;
      botBalls += guess;
      alert(`Бот угадал!`);
      // Если не "угадал"
    } else {
      playerBalls += guess;
      botBalls -= guess;
      alert(`Бот не угадал!`);
    }
  };
  // Раунд бота
  const playBotRound = () => {
    const botGuess = getRandomIntInclusive(1, botBalls);

    // Чётное или нет
    const isEven = botGuess % 2 === 0;

    // Специально оставил загаданное ботом число в промпте для удобства проверки работы приложения
    const playerGuess = prompt(`Бот загадал ${botGuess} ●▲■. Это число чётное (ч) или нечётное (н)?`);

    // ! Не срабатывает завершение игры, а только раунда
    // if (guess === null) {
    //   alert('Игра завершена.');
    //   return;
    // }

    checkIfCancelled(playerGuess);

    if ((isEven && playerGuess === 'ч') || (!isEven && playerGuess === 'н')) {
      botBalls -= botGuess;
      playerBalls += botGuess;
      alert(`Вы угадали!`);
    } else {
      botBalls += botGuess;
      playerBalls -= botGuess;
      alert(`Вы не угадали!`);
    }
  };

  const game = () => {
    const playRound = () => {
      // Кто ходит?
      if (currentPlayer === 'player') {
        playPlayerRound();
      } else {
        playBotRound();
      }

      // Победа и поражение
      if (playerBalls >= 10) {
        alert('Вы выиграли! У бота закончились ●▲■.');
        return;
      } else if (botBalls >= 10) {
        alert('Вы проиграли! У вас закончились ●▲■.');
        return;
      } else {
        // Смена игроков в раундах
        currentPlayer = currentPlayer === 'player' ? 'bot' : 'player';
        alert(`У вас ${playerBalls} ●▲■, у бота ${botBalls} ●▲■.`);
        playRound();
      }
    };

    playRound();
  };

  window.marbles = game;
})();
