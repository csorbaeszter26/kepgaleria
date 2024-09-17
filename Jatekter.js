//kisképek megjelenítése:

import { Kartya } from "./Kartya.js";


export default class Jatektar{


    #lista = []
    #szuloelem

    //konstruktor:
    constructor(lista, szuloElem){
        this.#lista = lista
        this.#szuloelem = szuloElem
        this.kepMegjelenit()

    }

    //fuggveny:
    kepMegjelenit(){
        this.lista.forEach(elem => {
            new Kartya(elem, this.#szuloelem)
        });
    }


}