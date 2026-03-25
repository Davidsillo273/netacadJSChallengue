let deepComp = function(src, trg) {
    let retVal = Object.keys(src).length === Object.keys(trg).length;
    if(retVal) {
        for(property in src) {
            if(typeof(src[property]) === typeof(trg[property])) { 
                retVal = typeof(src[property]) === 'object' ? deepComp(src[property], trg[property]) : src[property] === trg[property]
            } else {
                retVal =false;
            }
            if(!retVal) break;
        }
    }
    return retVal;
}

// Este código define una función de comparación profunda (deepComp) diseñada para verificar si dos objetos son idénticos, no solo en su estructura superficial sino también en sus valores internos. La lógica comienza validando que ambos objetos tengan la misma cantidad de propiedades mediante Object.keys().length, y luego recorre cada atributo del objeto origen con un ciclo for...in. Si encuentra que una propiedad es a su vez otro objeto, la función se llama a sí misma de forma recursiva para inspeccionar los niveles inferiores; de lo contrario, realiza una comparación directa de valores simples. El proceso utiliza un interruptor (break) para detenerse inmediatamente si detecta cualquier discrepancia en los tipos de datos o en los valores, asegurando que solo devuelva true si la igualdad es absoluta en toda la jerarquía del objeto.