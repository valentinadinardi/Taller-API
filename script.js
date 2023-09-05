 // Función para obtener y mostrar la imagen del espacio del día
 function getImagenEspacio() {
    //API demo de la NASA
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
        .then(response => response.json())
        .then(data => {
            document.getElementById('imagen').src = data.url; //Establezco el src de la imagen
            document.getElementById('titulo').textContent = data.title; //titulo
            document.getElementById('fecha').textContent = data.date; //fecha
            document.getElementById('descripcion').textContent = data.explanation; //Descripcion
                })
        .catch(error => {
            console.error('Error al obtener la imagen del espacio:', error); //Lo que aparece si no la encuentra
        });
}

// Asociar la función al botón de obtener imagen del espacio
document.getElementById('boton').addEventListener('click', getImagenEspacio);
