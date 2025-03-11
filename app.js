// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arregloDeNombres = [];

function agregarAmigo() {
    let ingresarNombre = document.getElementById('amigo').value;
  //  let textoNombres = document.getElementById('listaAmigos');
    
    if (ingresarNombre == '') {
        alert('"Por favor, inserte un nombre."');
        return; 
    }

    if (!arregloDeNombres.includes(ingresarNombre)) {
        arregloDeNombres.push(ingresarNombre);
        mostrarNombre();
    } else {
        alert('Este nombre ya está en la lista.');
    }

    limpiarCaja();
   
}

function mostrarNombre() {  
    let listaCompletaAmigos = document.getElementById('listaCompletaAmigos');
    
    // Limpiamos la lista antes de agregar los nuevos nombres
    listaCompletaAmigos.innerHTML = '';

    for (let i = 0; i < arregloDeNombres.length; i++) {
        let nombrePersona = arregloDeNombres[i];
        let listItem = document.createElement('li'); // Crear un nuevo <li> en cada iteración
        listItem.innerHTML = nombrePersona;
        listaCompletaAmigos.appendChild(listItem);
    }
}

function limpiarCaja() {
     document.querySelector('#amigo').value ='';
    return;
}

function sortearAmigo() {
    if (arregloDeNombres.length === 0) {
        alert("No hay nombre en la lista para el sorteo");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * arregloDeNombres.length);
    let nombreSorteado = arregloDeNombres[indiceAleatorio];

    // Mostrar el nombre sorteado en pantalla
    document.getElementById('resultadoSorteo').textContent = `🎉 El amigo sorteado es: ${nombreSorteado} 🎉`;
    return;
}
