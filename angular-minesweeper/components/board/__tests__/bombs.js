import 'angular-minesweeper';

describe('<bombs>', () => {
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

  test('should display 5 bombs', () => {
    const html = `<bombs amount="amount"></bombs>`;
    createComponent(html, { amount: 5 });

    expect(element.html()).toContain('5');
    expect(element.html()).toMatchSnapshot();
  });

});

