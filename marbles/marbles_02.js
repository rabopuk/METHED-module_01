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

  // Промпт игроку на количество загадываемых им шариков и валидация ввода
  const getPlayerInputBalls = () => {
    const input = prompt(`У вас ${playerBalls} шариков.\nВведите количество шариков от 1 до ${playerBalls}:`);

    if (input === null) {
      return null;
    }

    const parsedInput = parseInt(input);

    if (isNaN(parsedInput) || parsedInput < 1 || parsedInput > playerBalls) {
      alert('Пожалуйста, введите корректное число шариков.');
      return getPlayerInputBalls();
    }

    return parsedInput;
  };

  // Промпт игроку на чёт/нечёт у бота и валидация ввода
  const getPlayerInputOddOrEven = () => {
    const input = prompt(`Бот загадал своё количество ●▲■.\nЭто число чётное (ч) или нечётное (н)?`);

    if (input === null) {
      return null;
    }

    const lowerInput = input.toLowerCase();

    if (lowerInput !== 'ч' && lowerInput !== 'н') {
      alert('Пожалуйста, введите корректное значение ("ч" или "н").');
      return getPlayerInputOddOrEven();
    }

    return lowerInput;
  };

  const game = () => {
    const playRound = () => {
      // Раунд игрока
      if (currentPlayer === 'player') {
        const guess = getPlayerInputBalls();

        if (guess === null) {
          alert('Игра завершена.');
          return;
        }

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
      } else {
        // Раунд бота
        const botGuess = getRandomIntInclusive(1, botBalls);

        // Чётное или нет число шариков у бота
        const isEven = botGuess % 2 === 0;

        const playerGuess = getPlayerInputOddOrEven();

        if (playerGuess === null) {
          alert('Игра завершена.');
          return;
        }

        if ((isEven && playerGuess === 'ч') || (!isEven && playerGuess === 'н')) {
          botBalls -= botGuess;
          playerBalls += botGuess;
          alert(`Вы угадали!`);
        } else {
          botBalls += botGuess;
          playerBalls -= botGuess;
          alert(`Вы не угадали!`);
        }
      }

      // Победа и поражение
      if (playerBalls >= 10) {
        alert('Вы выиграли!\nУ бота закончились ●▲■.');
        return;
      } else if (botBalls >= 10) {
        alert('Вы проиграли!\nУ вас закончились ●▲■.');
        return;
      } else {
        // Смена игроков в раундах
        currentPlayer = currentPlayer === 'player' ? 'bot' : 'player';
        alert(`У вас ${playerBalls} ●▲■.\nУ бота ${botBalls} ●▲■.`);
        playRound();
      }
    };

    playRound();
  };

  window.marbles = game;
})();
