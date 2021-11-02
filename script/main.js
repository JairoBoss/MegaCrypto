//8.3
let glosario = new Array();

function Definicion(nombre, ruta, definicion) {
    this.nombre = nombre;
    this.ruta = ruta;
    this.definicion = definicion;
}

let hold = new Definicion('Hold / Holdear / Holder', 'https://www.noticias.info/wp-content/uploads/2021/07/bitcoin-hold-mercado-precio-2.jpg', 'Hace referencia a la accion de conservar/mantener una o varias criptomonedas durante un lapso tiempo indefinido con la finalidad de que el precio aumente con el paso del tiempo.');
let dip = new Definicion('Buy The Dip ', 'https://hoooodl.com/wp-content/uploads/2021/05/did-you-buy-the-dip-how-much-did-you-make.jpg', 'Hace referencia a la accion de comprar alguna criptomoneda cuando su precio esta en caida, pero antes de comprarla tienes que hacer un analisis para no perder dinero.');
let shitcoin = new Definicion('Shitcoin', 'https://pbs.twimg.com/profile_images/1382329805144674306/c1lcLw6M.jpg', 'Son todas aquellas criptomonedas que no tienen un proposito/bases definidas o son la copia de otro proyecto o simplemente son un meme o burla a las criptomonedas, un ejemplo puede ser DogeCoin, Shiba, BabyDoge . Invertir en una de estas criptomonedas es mala idea.');
let mineros = new Definicion('Minero ', 'https://i.pinimg.com/736x/a1/93/a7/a193a736a1573a6fe36927bc5fa4db1e.jpg', 'Un minero es aquella persona que dedica sus recursos computacionales a verificar y procesar transacciones, a cambio de esto como recompensa reciben una pequeña fraccion de la criptomoneda.');
let pool = new Definicion('Mining Pool', 'https://bitpanda-academy.imgix.net/nullbab12851-6b9a-4be9-9289-e9e23ad79199/bitpanda-academy-beginners-16-what-are-mining-pools.png?auto=compress%2Cformat&fit=min&fm=jpg&q=80&w=2100', 'Es cuando un grupo de mineros juntan sus recursos computacionales (regularment graficas) en una sola red para "minar" juntos, esto con el proposito de tener mas probabilidad de encontrar bloques de una cierta cripto, las pool´s mas importantes son "Ant pool, F2Pool, Binance Pool".');
//let dip = new Definicion('Buy The Dip ', 'https://hoooodl.com/wp-content/uploads/2021/05/did-you-buy-the-dip-how-much-did-you-make.jpg', 'Hace referencia a la accion de comprar alguna criptomoneda cuando su precio esta en caida, pero antes de comprarla tienes que hacer un analisis para no perder dinero.');

glosario.push(hold);
glosario.push(dip);
glosario.push(shitcoin);
glosario.push(mineros);
glosario.push(pool);

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