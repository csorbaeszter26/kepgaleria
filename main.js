import { Kartya } from "./modell/Kartya.js";
import { adatLISTA } from "./view/adat.js";
import Jatekter from "./controller/Jatekter.js";

const szuloElemN = $(".nagyKep")
//const szuloElemK = $(".kisKepek")

new Kartya(adatLISTA, szuloElemN)
//new Jatektar(adatLISTA, szuloElemK)


const LISTA = []


