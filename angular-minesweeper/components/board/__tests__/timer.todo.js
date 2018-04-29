import 'angular-minesweeper';
import { noop } from 'lodash';

/*
  In this test we render the <timer> directive.

  This directive shows the user how much time has passed since the game has started.
  In this test we should test several use cases:

  1. that we can see time increase as time goes by.
  2. That the timer stops when we receive a stop-game event.
  3. that the timer resets when we receive a reset-timer event.

  Please see $interval and $scope.$emit functions in angular documentation to see
  how you can move time forward in tests (it is frozen by default) and how you can emit events
  when you have a reference to a $scope.
 */

test('it should pass', () => {});