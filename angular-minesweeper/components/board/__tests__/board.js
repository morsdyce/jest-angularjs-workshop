import 'angular-minesweeper';
import { noop } from 'lodash';
import { BoardController } from 'angular-minesweeper/components/board/board';

jest.mock('common/minesweeper');

describe('<board>', () => {
  let $scope, $controller;

  beforeEach(angular.mock.module('ngReact.board'));

  beforeEach(inject(($rootScope) => {
    $scope = angular.extend($rootScope.$new(), { minefield: null });
    jest.spyOn($scope, '$broadcast');
    $controller = new BoardController($scope);
    global.alert = jest.fn();
  }));

  afterAll(() => {
    global.alert = undefined;
  });

  test('should stop the game and declare win', () => {
    expect($scope.$broadcast).not.toHaveBeenCalled();

    const spotSpy = jest.fn();
    $controller.revealSpot({ revealSpot: spotSpy });

    expect(spotSpy).toHaveBeenCalled();
    expect($scope.$broadcast).toHaveBeenCalled();

    expect(global.alert).toHaveBeenCalledWith('You Win!');
  });

  test('should stop the game and declare lose', () => {
    expect($scope.$broadcast).not.toHaveBeenCalled();

    $controller.game.hasWon.mockImplementation(() => false);
    $controller.game.hasLost.mockImplementation(() => true);

    const spotSpy = jest.fn();
    $controller.revealSpot({ revealSpot: spotSpy });

    expect(spotSpy).toHaveBeenCalled();
    expect($scope.$broadcast).toHaveBeenCalled();

    expect(global.alert).toHaveBeenCalledWith('You lose!');
  });

  test('should reveal a spot and continue the game', () => {
    $controller.game.hasWon.mockImplementation(() => false);
    $controller.game.hasLost.mockImplementation(() => false);

    $controller.revealSpot({ revealSpot: noop });

    expect($scope.$broadcast).not.toHaveBeenCalled();

    expect(global.alert).not.toHaveBeenCalled();
  });

});

