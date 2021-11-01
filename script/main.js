//8.3
let glosario = new Array();

function Definicion(nombre, ruta, definicion) {
    this.nombre = nombre;
    this.ruta = ruta;
    this.definicion = definicion;
}

let hold = new Definicion('Hold', 'https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg', 'Es la accion de ');
let hold1 = new Definicion('aaaaaaaaaaaaa', 'https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg', 'Es la accion de ');
let hold2 = new Definicion('BBBBBBBBB', 'https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg', 'Es la accion de ');
let hold3 = new Definicion('CCCCCCC', 'https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg', 'Es la accion de ');

glosario.push(hold);
glosario.push(hold1);
glosario.push(hold2);
glosario.push(hold3);

var imagen_a_mostrar = 0;

function mover(numero) {
    let titulo = document.getElementById("tituloArticulo");
    let imagen = document.getElementById("misfotos");
    let informacion = document.getElementById("informacionDelArticulo");
    var ultima = glosario.length - 1;
    var temp = imagen_a_mostrar + numero;

    if (temp < 0) {
        temp = ultima;
    }
    if (temp > ultima) {
        temp = 0;
    }
    imagen_a_mostrar = temp;

    titulo.innerHTML = glosario[imagen_a_mostrar].nombre;
    imagen.src = glosario[imagen_a_mostrar].ruta;
    informacion.innerHTML = glosario[imagen_a_mostrar].definicion;

}