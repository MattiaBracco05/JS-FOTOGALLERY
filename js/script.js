//Commentare la riga qua sotto dopo aver verificato che ci sia l' alert e che quindi sia tutto collegato
//alert("Test di collegamento")

//definisco le immagini
let immagini = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];

let i = 0; // inizializzo a 0 il contatore

//se premuta la freccia a dx
const dx = () => {
    let mainImg = document.querySelector("#main");
    if (i < 4) {
        i++;
        mainImg.setAttribute("src", immagini[i]);
    } else if (i === 4) {
        alert("Non sono presneti altre immagini dopo questa");
    }
    cambiaFreccia();
}
const sx = () => {
    let mainImg = document.querySelector("#main");
    if (i > 0) {
        i--;
        mainImg.setAttribute("src", immagini[i]);
    } else if (i === 0) {
        alert("Non sono presenti altre immagini prima di questa");
    }
    cambiaFreccia();
}

const cambiaFreccia = () => {
    let frecciaSx = document.querySelector("#frecciaSx");
    let frecciaDx = document.querySelector("#frecciaDx");

    if (i === 0) {
        frecciaSx.setAttribute("src", "img/sxNone.svg");
        frecciaDx.setAttribute("src", "img/dx.svg");
    } else if (i === 5) {
        frecciaSx.setAttribute("src", "img/sx.svg");
        frecciaDx.setAttribute("src", "img/dxNone.svg");
    } else {
        frecciaSx.setAttribute("src", "img/sx.svg");
        frecciaDx.setAttribute("src", "img/dx.svg");
    }
}