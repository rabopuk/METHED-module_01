/* eslint-disable max-len */
'use strict';

(() => {
  const FIGURES = {
    RU: ['камень', 'ножницы', 'бумага'],
    ENG: ['rock', 'scissors', 'paper'],
  };

  const TEXTS = {
    RU: {
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
    },
    ENG: {
      choose: 'Choose',
      quit: 'Are you sure you want to quit the game?',
      gameOver: 'Game over. SCORES:',
      roundResult: 'ROUND RESULT:',
      scores: 'Scores:',
      PLAYER: 'PLAYER',
      COMPUTER: 'COMPUTER',
      Tie: 'TIE',
      PLAYER_WIN: 'WINNER: Player',
      COMPUTER_WIN: 'WINNER: Computer',
    },
  };

  const getRandomIntInclusive = (min, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);

  const game = (language = 'RU') => {
    if (language === 'EN') {
      language = 'ENG';
    }

    const result = {
      player: 0,
      computer: 0,
    };

    const getAlertText = (key) => TEXTS[language][key];

    const getResultText = (winner, playerFigure, aiFigure) =>
      `
        ${getAlertText('roundResult')}\n
        ${getAlertText('PLAYER')} - ${playerFigure} VS ${aiFigure} - ${getAlertText('COMPUTER')}\n
        ${getAlertText(winner)}
      `;

    const playRound = () => {
      const playerChoice = prompt(`${getAlertText('choose')}: ${FIGURES[language].join(', ')}`);

      if (!playerChoice) {
        const confirmExit = confirm(getAlertText('quit'));

        if (confirmExit) {
          alert(
            `
              ${getAlertText('gameOver')}\n
              ${getAlertText('PLAYER')} ${result.player} vs ${result.computer} ${getAlertText('COMPUTER')}
            `,
          );
          return;
        }
      }

      const matchingFigure = FIGURES[language].find(figure => figure.startsWith(playerChoice.toLowerCase()));

      if (!matchingFigure) {
        alert('Неверный выбор. Пожалуйста, попробуйте снова.');
        playRound();
        return;
      }

      const playerIndex = FIGURES[language].indexOf(matchingFigure);
      const aiIndex = getRandomIntInclusive(0, 2);

      const playerFigure = FIGURES[language][playerIndex];
      const aiFigure = FIGURES[language][aiIndex];

      const getRoundResult = (playerIndex, aiIndex) => {
        switch ((playerIndex - aiIndex + 3) % 3) {
          case 0: return 'Tie';
          case 1: return 'PLAYER_WIN';
          default: return 'COMPUTER_WIN';
        }
      };

      const winner = getRoundResult(playerIndex, aiIndex);

      alert(getResultText(winner, playerFigure, aiFigure));

      if (winner === 'PLAYER_WIN') {
        result.player++;
      } else if (winner === 'COMPUTER_WIN') {
        result.computer++;
      }

      alert(`${getAlertText('scores')} ${getAlertText('PLAYER')} - ${result.player} vs ${result.computer} - ${getAlertText('COMPUTER')} `);

      playRound();
    };

    playRound();
  };

  window.rsp = game;
})();
