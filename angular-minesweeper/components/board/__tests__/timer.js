import 'angular-minesweeper';
import { noop } from 'lodash';

describe('<timer>', () => {
  let createComponent, $scope, element, $interval;

  beforeEach(angular.mock.module('ngReact.board'));

  beforeEach(inject(($rootScope, $compile, _$interval_) => {
    $interval = _$interval_;

    createComponent = (html, scopeAttrs) => {
      $scope = angular.extend($rootScope.$new(), scopeAttrs);

      element = angular.element(html);
      element = $compile(element)($scope);
      $scope.$digest();
    };
  }));

  test('should render a timer', () => {
    const html = `<timer>`;
    createComponent(html, {});

    expect(element.html()).toMatchSnapshot();
  });

  test('should increase timer over time', () => {
    const html = `<timer>`;
    createComponent(html, {});

    expect(element.find('span').html()).toMatch("0");

    $interval.flush(1100);

    expect(element.find('span').html()).toMatch("1");
  });

  test('should reset timer on event reset-timer', () => {
    const html = `<timer>`;
    createComponent(html, {});

    expect(element.find('span').html()).toMatch("0");

    $interval.flush(1100);

    expect(element.find('span').html()).toMatch("1");

    $scope.$emit('reset-timer');
    $scope.$digest();

    expect(element.find('span').html()).toMatch("0");
  });

  test('should stop timer on event stop-game', () => {
    const html = `<timer>`;
    createComponent(html, {});

    expect(element.find('span').html()).toMatch("0");

    $interval.flush(1100);

    expect(element.find('span').html()).toMatch("1");

    $scope.$emit('game-over');
    $scope.$digest();

    expect(element.find('span').html()).toMatch("1");

    $interval.flush(1100);

    expect(element.find('span').html()).toMatch("1");

    $interval.flush(1100);

    expect(element.find('span').html()).toMatch("1");
  });

});

