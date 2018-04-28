import 'angular-minesweeper';

describe('<title-bar>', () => {
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

  test('should render title bar', () => {
    const html = `<title-bar></title-bar>`;
    createComponent(html, {});

    expect(element.html()).toMatchSnapshot();
  });
});

