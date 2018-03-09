import {Algoritm} from '../models/Algoritm';

export class AlgoritmsService {
    static selector = 'algoritmsService';

    private algoritmsList: Algoritm[] = [
        {id: 1, name: 'Binary Search'},
        {id: 2, name: 'Bubble Search'}
    ];


    getAlgList() {
        return this.algoritmsList;
    }

    getAlgoritmById(id: number): Algoritm {
        return this.algoritmsList.find(alg => alg.id === +(id));
    }
}
