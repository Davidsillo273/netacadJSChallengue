let images = [
    {
        title: 'Mona Lisa',
        artist: 'Leonardo da Vinci',
        date: 1503
    },
    {
        title: 'The Last Supper',
        artist: 'Leonardo da Vinci',
        date: 1495
    },
    {
        title: 'The Starry Night',
        artist: 'Vincent van Gogh',
        date: 1889
    },
    {
        title: 'The Scream',
        artist: 'Edvard Munch',
        date: 1893
    },
    {
        title: 'Guernica',
        artist: 'Pablo Picasso',
        date: 1937
    },
    {
        title: 'The Kiss',
        artist: 'Gustav Klimt',
        date: 1907
    },
    {
        title: 'Girl With a Pearl Earring',
        artist: 'Johannes Vermeer',
        date: 1665
    },
    {
        title: 'The Birth of Venus',
        artist: 'Sandro Botticelli',
        date: 1485
    },
    {
        title: 'Las Meninas',
        artist: 'Diego Velázquez',
        date: 1656
    },
    {
        title: 'Creation of Adam',
        artist: 'Michelangelo',
        date: 1512
    }
];
images.forEach(image => {console.log(`${image.title}
(${image.artist}, ${image.date})`)});

// Este código utiliza un arreglo de objetos llamado images para almacenar información sobre obras de arte y luego recorre cada elemento mediante el método forEach, que actúa como un ciclo que visita cada cuadro uno por uno. Dentro de este ciclo, se utiliza una función de flecha que recibe el objeto actual (representado por la variable image) y ejecuta un console.log para imprimir sus propiedades en la consola. Para lograr el formato de salida, se emplean plantillas literales (delimitadas por las comillas invertidas `), las cuales permiten insertar directamente los valores de image.title, image.artist y image.date dentro de una cadena de texto, resultando en una lista organizada donde cada obra aparece con su autor y año entre paréntesis.