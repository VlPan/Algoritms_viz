/**
 * Import the Component styles
 */
import './home.component.scss';
import './btn.component.scss';
import {AlgoritmsService} from '../../services/algoritms.service';
import {LsService} from '../../services/ls.service';
import {Algoritm} from '../../models/Algoritm';

class HomeController {

    algoritmsList : Algoritm[];


    constructor(
        private algoritmsService: AlgoritmsService,
        private lsService: LsService
    ) {
        'ngInject';
        this.algoritmsList = algoritmsService.getAlgList() || [];
        console.log(this.algoritmsList);
    }

    $onInit() {

        if(!this.lsService.has('algList')) {
            this.lsService.set('algList', this.algoritmsList)
        }
    }



}

export class Home implements angular.IComponentOptions {
    static selector = 'home';
    static controller = HomeController;
    static template = require('./home.component.html');
}
