let tareas = [
    { id: 16, descripcion: "Hacer mercado", completada: false },
    { id: 60, descripcion: "Estudiar para la prueba", completada: false },
    { id: 24, descripcion: "Sacar a pasear a Toby", completada: false }
];

let contador = 100;


function mostrarTareas() {

    let lista = document.getElementById("listaTareas");

    lista.innerHTML = "<b>ID - Tarea</b><br><br>";

    for (let i = 0; i < tareas.length; i++) {

        let div = document.createElement("div");
        div.className = "tarea";

        let texto = document.createElement("span");

        texto.textContent = tareas[i].id + " - " + tareas[i].descripcion;

        if (tareas[i].completada == true) {
            texto.className = "realizada";
        }

        let checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = tareas[i].completada;

        checkbox.onclick = function() {
            cambiarEstado(i);
        };

        let boton = document.createElement("button");

        boton.textContent = "X";
        boton.className = "eliminar";

        boton.onclick = function() {
            eliminarTarea(i);
        };

        div.appendChild(texto);
        div.appendChild(checkbox);
        div.appendChild(boton);

        lista.appendChild(div);
    }

    actualizarResumen();
}



function agregarTarea() {

    let input = document.getElementById("nuevaTarea");

    let descripcion = input.value;

    if (descripcion == "") {
        alert("Ingrese una tarea");
    } else {

        contador++;

        let nueva = {
            id: contador,
            descripcion: descripcion,
            completada: false
        };

        tareas[tareas.length] = nueva;

        input.value = "";

        mostrarTareas();
    }
}



function eliminarTarea(indice) {

    for (let i = indice; i < tareas.length - 1; i++) {
        tareas[i] = tareas[i + 1];
    }

    tareas.length = tareas.length - 1;

    mostrarTareas();
}



function cambiarEstado(indice) {

    if (tareas[indice].completada == false) {
        tareas[indice].completada = true;
    } else {
        tareas[indice].completada = false;
    }

    mostrarTareas();
}



function actualizarResumen() {

    document.getElementById("total").textContent = tareas.length;

    let hechas = 0;

    for (let i = 0; i < tareas.length; i++) {

        if (tareas[i].completada == true) {
            hechas++;
        }
    }

    document.getElementById("realizadas").textContent = hechas;
}



mostrarTareas();
















