import MineSweeper from 'common/minesweeper';
import template from 'angular-minesweeper/components/board/board.html';

export default function Board() {
  return {
    restrict: 'E',
    template,
    scope: true,
    controller: BoardController,
    controllerAs: 'Board',
    bindToController: {
      minefield: '='
    }
  };
}

export class BoardController {
  constructor($scope) {
    this.$scope = $scope;
    this.game = new MineSweeper();

    this.newGame = this.newGame.bind(this);
  }

  revealSpot(spot) {
    spot.revealSpot();

    if (this.game.hasWon() || this.game.hasLost()) {
      this.$scope.$broadcast('game-over');
    }

    if (this.game.hasWon()) {
      alert('You Win!');
    } else if (this.game.hasLost()) {
      alert('You lose!');
    }
  }

  flagSpot(spot) {
    spot.flagSpot();
  }

  remainingBombs() {
    return this.game.remainingBombs();
  }

  newGame() {
    this.game = new MineSweeper();
    this.$scope.$broadcast('reset-timer');
  }
}
