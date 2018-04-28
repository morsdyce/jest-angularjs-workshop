import 'angular-minesweeper';
import SPOT_TYPES from 'common/spot/spot-types.constants';

describe('<cell>', () => {
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

  test('should show an unrevealed spot', () => {
    const html = `<cell spot="spot"></cell>`;
    createComponent(html, {
      spot: {
        isRevealed: false,
        content: {
          type: SPOT_TYPES.MINE.type
        }
      }
    });

    expect(element.html()).toMatchSnapshot();
  });

  test('should show an empty spot', () => {
    const html = `<cell spot="spot"></cell>`;
    createComponent(html, {
      spot: {
        isRevealed: true,
        content: {
          type: SPOT_TYPES.EMPTY.type
        }
      }
    });

    expect(element.html()).toMatchSnapshot();
  });

  test('should show a mine spot', () => {
    const html = `<cell spot="spot"></cell>`;
    createComponent(html, {
      spot: {
        isRevealed: true,
        content: {
          type: SPOT_TYPES.MINE.type
        }
      }
    });

    expect(element.html()).toMatchSnapshot();
  });

  test('should show a flagged spot', () => {
    const html = `<cell spot="spot"></cell>`;
    createComponent(html, {
      spot: {
        isRevealed: false,
        isFlagged: true,
        content: {
          type: SPOT_TYPES.MINE.type
        }
      }
    });

    expect(element.html()).toMatchSnapshot();
  });

  Object.entries(SPOT_TYPES)
    .filter(([type]) => type.includes('NUMBER'))
    .forEach(([type, value]) => {
      test(`should show a ${ type } spot`, () => {
        const html = `<cell spot="spot"></cell>`;
        createComponent(html, {
          spot: {
            isRevealed: true,
            isFlagged: false,
            content: {
              type: value.type
            }
          }
        });

        expect(element.html()).toMatchSnapshot();
      });
    });



});

