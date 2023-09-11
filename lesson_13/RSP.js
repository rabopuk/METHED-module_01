/* eslint-disable max-len */
'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  // Генерация случайного числа из диапазона
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Игра
  const game = () => {
    // Объект для отслеживания счета
    const result = {
      player: 0,
      computer: 0,
    };

    // Фразы для алерта
    const getAlertText = (key) => {
      const texts = {
        choose: 'Выберите',
        quit: 'Вы уверены, что хотите выйти из игры?',
        gameOver: 'Игра завершена. Очки:',
        roundResult: 'Результат раунда:',
        scores: 'Счет:',
        PLAYER: 'Игрок',
        COMPUTER: 'Компьютер',
        Tie: 'Ничья',
        PLAYER_WIN: 'Победитель: Игрок',
        COMPUTER_WIN: 'Победитель: Компьютер',
      };
      return texts[key];
    };

    // Функционал раунда
    const playRound = () => {
      const playerChoice = prompt(`${getAlertText('choose')}: ${FIGURES.join(', ')}`);

      if (!playerChoice) {
        // Запрос подтверждения выхода из игры
        const confirmExit = confirm(getAlertText('quit'));

        if (confirmExit) {
          // Сообщение о завершении игры
          alert(
            `${getAlertText('gameOver')} ${getAlertText('PLAYER')} ${result.player} vs ${result.computer} ${getAlertText('COMPUTER')}`,
          );
          return;
        }
      }

      const choiceToLowerCase = playerChoice.toLowerCase();

      // Проверка первых букв в названии фигуры (чтоб была возможность не писать слово целиком в игре)
      const matchingFigure = FIGURES.find(figure => figure.startsWith(choiceToLowerCase));

      if (!matchingFigure) {
        // Вывод сообщения об ошибке в случае некорректного выбора
        alert('Неверный выбор. Пожалуйста, попробуйте снова.');
        playRound();
        return;
      }

      // Определение индексов фигур
      const playerIndex = FIGURES.indexOf(matchingFigure);
      const aiIndex = getRandomIntInclusive(0, 2);

      // Получение фигур для отображения результатов
      const playerFigure = FIGURES[playerIndex];
      const aiFigure = FIGURES[aiIndex];

      // Определения победителя раунда
      const getRoundResult = (playerIndex, aiIndex) => {
        if (playerIndex === aiIndex) {
          return 'Tie';
        } else if ((playerIndex + 1) % 3 === aiIndex) { // ! не смог догадаться написать это условие самостоятельно
          return 'PLAYER';
        } else {
          return 'COMPUTER';
        }
      };

      // Победитель
      const winner = getRoundResult(playerIndex, aiIndex);

      let resultText = '';

      // Определение текста для сообщения
      if (winner === 'Tie') {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure} vs ${aiFigure} - ${getAlertText('COMPUTER')}; ${getAlertText('Tie')}`;
      } else if (winner === 'PLAYER') {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure} vs ${aiFigure} = ${getAlertText('COMPUTER')}; ${getAlertText('PLAYER_WIN')}`;
      } else {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure} vs ${aiFigure} = ${getAlertText('COMPUTER')}; ${getAlertText('COMPUTER_WIN')}`;
      }

      // Сообщение о результате раунда
      alert(resultText);

      // Обновление счета игры
      if (winner === 'PLAYER') {
        result.player++;
      } else if (winner === 'COMPUTER') {
        result.computer++;
      }

      // Текущий счёт игры
      alert(`${getAlertText('scores')} ${getAlertText('PLAYER')} - ${result.player} vs ${result.computer} - ${getAlertText('COMPUTER')} `);

      // Повторение раунда
      playRound();
    };

    // Начало игры
    playRound();
  };

  window.rsp = game;
})();
