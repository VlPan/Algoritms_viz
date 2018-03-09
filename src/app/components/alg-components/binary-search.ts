import './binary-search.scss'
import {Algoritm} from '../../models/Algoritm';
import * as angular from 'angular';
import {AlgoritmsService} from '../../services/algoritms.service';

class BinarySearchController {

}


export class BinarySearch implements angular.IComponentOptions {

    static selector = 'binarySearch';
    static controller = BinarySearchController;
    static template = require('./binary-search.html');

}
