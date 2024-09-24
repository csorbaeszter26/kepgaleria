//1db kép megjelenítése:

export class Kartya{

    //adattagok:
    #kepAdat ={};
    #szuloELEM;

    //konstruktor:
    constructor(adat, szuloElem){
        this.#kepAdat = adat
        this.#szuloELEM = szuloElem
        this.KepMegjelenit()

        //this.gombElemB = $(".bal")
        //this.gombElemJ = $(".jobb")
        //this.gombKatt()

    }

    //tagfüggvény:
    KepMegjelenit(kep){
        this.#szuloELEM.append(
            //<div class="gomb">
            //<button class = "bal btn btn-success"> << </button>
            //</div>
            `
            <div class="card" >
                <div class="card-body">
                    <h3 class="card-title"> ${this.#kepAdat.cim}</h3>
                    <img class="card-img" src="${this.#kepAdat.leiras}" alt="${this.#kepAdat.kep}">
                    <p class="card-text">${this.#kepAdat.leiras}</p>
                </div>   
            </div>
            
            `,
        //<div class="gomb">
        //<button class = "jobb btn btn-success"> >> </button>
        //</div>
        console.log("tt")
        )
            
    }


    gombKatt(){
        this.gombElemB.on("click", () => {
            console.log(this)
        })
    }

}