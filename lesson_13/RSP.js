'use strict';

(() => {
  const FIGURES = ['камень', 'ножницы', 'бумага'];

  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const game = () => {
    const result = {
      player: 0,
      computer: 0,
    };

    const getAlertText = (key) => {
      const texts = {
        choose: 'Выберите',
        quit: 'Вы уверены, что хотите выйти из игры?',
        gameOver: 'Игра завершена. Очки: Игрок',
        roundResult: 'Результат раунда:',
        scores: 'Счет: Игрок',
        PLAYER: 'Игрок',
        COMPUTER: 'Компьютер',
        Tie: 'Ничья',
        PLAYER_WIN: 'Победитель: Игрок',
        COMPUTER_WIN: 'Победитель: Компьютер',
      };
      return texts[key];
    };

    const playRound = () => {
      const playerChoice = prompt(`${getAlertText('choose')}: ${FIGURES.join(', ')}`);
      if (!playerChoice) {
        const confirmExit = confirm(getAlertText('quit'));
        if (confirmExit) {
          alert(
            `${getAlertText('gameOver')} ${result.player} vs ${result.computer}`
          );
          return;
        }
      }

      const playerIndex = FIGURES.indexOf(playerChoice.toLowerCase());
      if (playerIndex === -1) {
        alert('Неверный выбор. Пожалуйста, попробуйте снова.');
        playRound();
        return;
      }

      const aiIndex = getRandomIntInclusive(0, 2);
      const playerFigure = FIGURES[playerIndex];
      const aiFigure = FIGURES[aiIndex];

      const winner = getRoundResult(playerIndex, aiIndex);

      let resultText = '';
      if (winner === 'Tie') {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure}; ${getAlertText('COMPUTER')} - ${aiFigure}; ${getAlertText('Tie')}`;
      } else if (winner === 'PLAYER') {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure}; ${getAlertText('COMPUTER')} - ${aiFigure}; ${getAlertText('PLAYER_WIN')}`;
      } else {
        resultText = `${getAlertText('roundResult')} ${getAlertText('PLAYER')} - ${playerFigure}; ${getAlertText('COMPUTER')} - ${aiFigure}; ${getAlertText('COMPUTER_WIN')}`;
      }

      alert(resultText);

      if (winner === 'PLAYER') {
        result.player++;
      } else if (winner === 'COMPUTER') {
        result.computer++;
      }

      alert(`${getAlertText('scores')} ${result.player}, ${getAlertText('COMPUTER')} ${result.computer}`);
      playRound();
    };

    const getRoundResult = (playerIndex, aiIndex) => {
      if (playerIndex === aiIndex) {
        return 'Tie';
      }
      if ((playerIndex + 1) % 3 === aiIndex) {
        return 'PLAYER';
      }
      return 'COMPUTER';
    };

    playRound();
  };

  window.rsp = game;
})();
