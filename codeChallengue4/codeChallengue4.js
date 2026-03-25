Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

images.show = function(title) {
    for(image of this.list) {
        image.show();
    }
}

images.edit = function(title, artist, date) {
    for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}

// Este fragmento de código extiende la funcionalidad de los objetos mediante el uso de prototipos y la adición de métodos de gestión de datos (CRUD) al objeto images. Primero, se añade el método show al prototipo de Image, lo que permite que cada instancia individual imprima sus propios datos de forma estandarizada; luego, se define un método global images.show que recorre toda la lista ejecutando dicha función en cada elemento. Por otro lado, los métodos edit y delete implementan la lógica de actualización y eliminación: el primero busca una coincidencia por título para sobrescribir el artista y la fecha, mientras que el segundo utiliza un ciclo for tradicional y el método splice para remover permanentemente el objeto del arreglo una vez localizado su índice.