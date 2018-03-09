/**
 * Import the Component styles
 */
import './concreate-algoritm.component.scss';
import {AlgoritmsService} from '../../services/algoritms.service';
import {Algoritm} from '../../models/Algoritm';
import * as angular from 'angular';

class ConcreateAlgoritmController {

    algoritm: Algoritm;
    constructor(
        private algoritmsService: AlgoritmsService,
        private $stateParams: any,
        private $state: any

) {

        this.algoritm = this.algoritmsService.getAlgoritmById(this.$stateParams.id);


    }

    $onInit() {
        switch (this.algoritm.id) {
            case 1: {
                this.$state.go('binarySearch');
            }
        }
    }

}


export class ConcreateAlgoritm implements angular.IComponentOptions {
  static selector = 'concreateAlgoritm';
  static controller = ConcreateAlgoritmController;
  static template = require('./concreate-algoritm.component.html');
}
