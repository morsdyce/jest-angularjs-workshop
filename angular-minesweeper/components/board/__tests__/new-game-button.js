import 'angular-minesweeper';
import { noop } from 'lodash';

describe('<new-game-button>', () => {
  let createComponent, $scope, element;

  beforeEach(angular.mock.module('ngReact.board'));

  beforeEach(inject(($rootScope, $compile) => {
    createComponent = (html, scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element(html);
      element = $compile(element)($scope);
      $scope.$digest();
    };
  }));

  test('should render a new game button', () => {
    const html = `<new-game-button new-game="newGame"></new-game-button>`;
    createComponent(html, { newGame: noop });

    expect(element.html()).toMatchSnapshot();
  });

  test('should call new game function when clicking on the button', () => {
    const html = `<new-game-button new-game="newGame"></new-game-button>`;
    const newGameSpy = jest.fn();
    createComponent(html, { newGame: newGameSpy });

    expect(newGameSpy).not.toHaveBeenCalled()

    element.find('img').triggerHandler('click');

    expect(newGameSpy).toHaveBeenCalled()
  });

});

