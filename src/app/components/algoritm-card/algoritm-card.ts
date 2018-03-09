import './algoritm-card.scss'
import {Algoritm} from '../../models/Algoritm';
import * as angular from 'angular';
import {AlgoritmsService} from '../../services/algoritms.service';

class AlgoritmCardController {
    algorithm: Algoritm;

    constructor (
        private algoritmsService: AlgoritmsService,
    ) {
        'ngInject';

    }

    $onInit() {
        console.log(this.algorithm);
    }

}


export class AlgoritmCard implements angular.IComponentOptions {

    static selector = 'algCard';
    static bindings = {
        algorithm: '<'
    };
    static controller = AlgoritmCardController;
    static template = require('./algoritm-card.html');

}
