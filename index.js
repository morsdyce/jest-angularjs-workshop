import 'common/assets/stylesheets/global.css';

import angular from 'angular';

import AngularMinesweeper from 'angular-minesweeper';

let angularContainer = document.getElementById('angular');

// render angular to #angular dom node
angular.bootstrap(angularContainer, [AngularMinesweeper.name]);