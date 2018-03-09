// temporary, until https://github.com/Microsoft/TypeScript/issues/10178 is implemented
import * as angular from 'angular';

/**
 * Import Module Components
 */

import { Home } from '../../components/home/home.component';

/**
 * Import Module Containers
 */


/**
 * Import Module Services
 */


/**
 * Import Module Routing
 */
import { routing } from './home.routes';
import {AlgoritmsService} from '../../services/algoritms.service';
import {LsService} from '../../services/ls.service';
import {AlgoritmCard} from '../../components/algoritm-card/algoritm-card';

export const moduleName =
    angular.module('application.signin', [
        'ui.router'
    ])

    /**
     * Register Module Components
     */
        .component(Home.selector, Home)
        .component(AlgoritmCard.selector, AlgoritmCard)

        /**
         * Register Module Containers
         */
        /**
         * Register Module Services
         */
        .service(AlgoritmsService.selector, AlgoritmsService)
        .service(LsService.selector, LsService)
        /**
         * Register Module Configuration
         */
        .config(routing)
        .name;
