
import {ConcreateAlgoritm} from '../../components/concreate-algoritm/concreate-algoritm.component';
import {BinarySearch} from '../../components/alg-components/binary-search';

export const routing = ($stateProvider: angular.ui.IStateProvider) => {
  'ngInject';
  $stateProvider

    .state('algoritm', {
      parent: 'app',
      url: '/algoritm/{id}',
      component: ConcreateAlgoritm.selector
    })

    .state('binarySearch', {
        parent: 'algoritm',
        url: '/BinarySearch',
        component: BinarySearch.selector
    });
};
