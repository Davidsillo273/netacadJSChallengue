let images = {
    list: [],
    contains: function(title) {
        let retVal = false;
        for(image of this.list) {
            if(image.title === title) {
                retVal = true;
                break;
            }
        }
        return retVal;
    },
    add: function(title, artist, date) {
        if(!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    }}

    // Este código define un objeto literal llamado images que actúa como un gestor de colección, encapsulando tanto los datos (en el arreglo list) como el comportamiento para manipularlos mediante métodos. El método contains implementa una lógica de búsqueda utilizando un ciclo for...of que recorre la lista comparando el título proporcionado con cada objeto existente, retornando un valor booleano para indicar si la obra ya está registrada. Por su parte, el método add utiliza esta verificación previa para evitar duplicados; si el título no se encuentra (!this.contains(title)), utiliza la función constructora new Image para instanciar un nuevo objeto y añadirlo al arreglo mediante push.