let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let getImage = function(title, artist, date) {
    return {
        title,
        artist,
        date
    }
}

let images1 = [];
let images2 = [];

images.forEach(image => images1.push(new Image(image.title, image.artist, image.date)));
images1.forEach(image => images2.push(getImage(image.title, image.artist, image.date)));
images2.forEach(image => {console.log(`${image.title} (${image.artist}, ${image.date})`)});

// Este código ilustra dos formas distintas de crear objetos en JavaScript: primero define una función constructora Image que utiliza la palabra clave this para instanciar objetos, y luego una función de fábrica (factory function) getImage que simplemente retorna un objeto literal aprovechando la sintaxis abreviada de propiedades. A través de dos ciclos forEach, el programa transforma los datos originales: primero puebla el arreglo images1 creando instancias formales con el operador new, y después transfiere esa información al arreglo images2 usando la función de fábrica. Finalmente, recorre este último arreglo para imprimir en la consola el título, autor y fecha de cada obra mediante plantillas literales, demostrando cómo se puede manipular y reformatear una estructura de datos idéntica utilizando diferentes patrones de diseño de objetos.