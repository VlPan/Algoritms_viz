// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */

import {ConcreateAlgoritm} from '../../components/concreate-algoritm/concreate-algoritm.component';




/**
 * Import Module Routing
 */
import { routing } from './algoritms.routes';
import {HelperService} from '../../services/helperService';
import {BinarySearch} from '../../components/alg-components/binary-search';

export const moduleName =
  angular.module('application.contacts', [
      'ui.router'
  ])

  /**
   * Register Module Components
   */

  .component(ConcreateAlgoritm.selector, ConcreateAlgoritm)
  .component(BinarySearch.selector, BinarySearch)



  /**
   * Register Module Services
   */
  .service(HelperService.selector, HelperService)

  /**
   * Register Module Configuration
   */
  .config(routing)
  .name;
