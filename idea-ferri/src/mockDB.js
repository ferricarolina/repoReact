import a71 from './assets/a71.jpg'
import g100 from './assets/g100.jpg'
import s21 from './assets/s21.png'
import note10 from './assets/note10.jpg'

const db = [
    {id:1, stock:2, pictureUrl: a71, title: 'SAMSUNG GALAXY A71', price:65000, description:'El Samsung Galaxy A71 llega para suceder al Galaxy A70 con una pantalla Super AMOLED de 6.7 pulgadas a resolución FHD+. Utilizando un procesador Snapdragon 730 de ocho núcleos, el Galaxy A71 cuenta con variantes de 6GB o 8GB de memoria RAM con 128GB de espacio de almacenamiento interno expandible microSD. La cámara principal del Galaxy A51 es cuádruple, de 64 MP + 12 MP + 5 MP + 5 MP, mientras que su cámara para selfies es de 32 MP.'},
    {id:2, stock:6, pictureUrl: s21, title: 'SAMSUNG S21', price:119000, description:'Diseñado con una sola cámara en los contornos de un marco para crear una revolución en la fotografía. Podrás hacer videos cinematográficos en 8K y tomar fotos épicas, todo al mismo tiempo. Además, cuenta con el conjunto de chips más rápido en un teléfono Galaxy, el vidrio más resistente, velocidad 5G y una batería que dura todo el día. “Ultra” realmente le rinde honor a su nombre.'},
    {id:3, stock:3, pictureUrl: g100, title: 'MOTOROLA G100', price:79000, description:'Experimentá la potencia con la nueva plataforma móvil Qualcomm® Snapdragon™ 870 5G. Pasá de una aplicación a otra de manera fluida gracias a la memoria de 8 GB de última generación y obtené mucho espacio para fotos, películas, juegos y música con el almacenamiento de 128 GB4.'},
    {id:4, stock:8, pictureUrl: note10, title: 'XIAOMI MI NOTE 10', price:94000, description:'El Xiaomi Redmi Note 10 es el líder de la décima reencarnación de la serie Redmi Note. Con una pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10 está potenciado por un procesador Snapdragon 678 con 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior del Redmi Note 10 es cuádruple, en configuración 48MP+ 8MP + 2MP + 2MP, mientras que la cámara selfie es de 13 megapixels.'}
]

function mockItems() {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(db);
      }, 2000);
    });
    return promise;
 }

 function getItem(id) {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(
            db.filter(item => item.id.toString() === id)[0]
        );
      }, 2000);
    });
    return promise;
 }

export { mockItems, getItem } 