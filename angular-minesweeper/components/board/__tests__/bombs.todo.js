import 'angular-minesweeper';

/*
  In this test we should be testing the bombs directive rendering the correct amount of bombs
  It receives an amount using angular bindings and should display the amount it received.

  Using the directive in the application looks like this:
  <bombs amount="amount"></bombs>

  In this test you can test in 2 various ways:
  1. Checking the that number of bombs appears in the html page
  2. Saving a snapshot of the directive html.

  You can write these tests as individual tests or as 2 assertions in a single test.

  To make things easier you can use the commented code below in order to create the directive
  by running createComponent function with the html using the directive and passing the right parameters
  for the scope in each test.

  beforeEach(angular.mock.module('ngReact.board'));

  beforeEach(inject(($rootScope, $compile) => {
    createComponent = (html, scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element(html);
      element = $compile(element)($scope);
      $scope.$digest();
    };
  }));

 */

test('it should pass', () => {});