
class Uszo {
    constructor(nev, idopont, kor, uszoda, intenzitas) {
        this.nev = nev;
        this.idopont = idopont;
        this.kor = kor;
        this.uszoda = uszoda;
        this.intenzitas = intenzitas;
    }
}

const form = document.getElementById("uszodaForm");
const tabla = document.getElementById("uszokTabla");
const mentesGomb = document.getElementById("mentesGomb");

const uszok = [];
let szerkesztettIndex = null;

function adatokKiolvasasa() {
    return new Uszo(
        document.getElementById("nev").value.trim(),
        document.getElementById("idopont").value.trim(),
        Number(document.getElementById("kor").value),
        document.getElementById("uszoda").value.trim(),
        document.getElementById("intenzitas").value.trim()
    );
}

function tablaFrissitese() {
    tabla.innerHTML = "";

    uszok.forEach((uszo, index) => {
        const sor = tabla.insertRow();

        sor.insertCell().textContent = uszo.nev;
        sor.insertCell().textContent = uszo.idopont;
        sor.insertCell().textContent = uszo.kor;
        sor.insertCell().textContent = uszo.uszoda;
        sor.insertCell().textContent = uszo.intenzitas;

        const muveletCella = sor.insertCell();

        //Szerkesztés
        const szerkesztesGomb = document.createElement("button");
        szerkesztesGomb.textContent = "Szerkesztés";
        szerkesztesGomb.type = "button";

        szerkesztesGomb.addEventListener("click", function() {
            document.getElementById("nev").value = uszo.nev;
            document.getElementById("idopont").value = uszo.idopont;
            document.getElementById("kor").value = uszo.kor;
            document.getElementById("uszoda").value = uszo.uszoda;
            document.getElementById("intenzitas").value = uszo.intenzitas;

            szerkesztettIndex = index;
            mentesGomb.textContent = "Mentés";
        });

        muveletCella.appendChild(szerkesztesGomb);

        //Törlés
        const torlesGomb = document.createElement("button");
        torlesGomb.textContent = "Törlés";
        torlesGomb.type = "button";

        torlesGomb.addEventListener("click", function() {
            uszok.splice(index, 1);

            if (szerkesztettIndex === index) {
                form.reset();
                szerkesztettIndex = null;
                mentesGomb.textContent = "Hozzáadás";
            } else if (szerkesztettIndex !== null && szerkesztettIndex > index) {
                szerkesztettIndex--;
            }

            tablaFrissitese();
        });

        muveletCella.appendChild(torlesGomb);
    });
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const ujUszo = adatokKiolvasasa();

    if (szerkesztettIndex === null) {
        uszok.push(ujUszo);
    } else {
        uszok[szerkesztettIndex] = ujUszo;
    }

    tablaFrissitese();

    form.reset();
    szerkesztettIndex = null;
    mentesGomb.textContent = "Hozzáadás";
});
