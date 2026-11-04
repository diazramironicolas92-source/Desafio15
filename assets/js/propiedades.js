let tareas = [
            { id: 16, descripcion: "Hacer mercado", completada: false },
            { id: 60, descripcion: "Estudiar para la prueba", completada: false },
            { id: 24, descripcion: "Sacar a pasear a Toby", completada: false }
        ];

        
        function mostrarTareas() {

            let lista = document.getElementById("listaTareas");

            lista.innerHTML = "<b>ID &nbsp;&nbsp; Tarea</b><br><br>";

            tareas.forEach(function(tarea, indice) {

                let div = document.createElement("div");
                div.className = "tarea";

                let texto = document.createElement("span");
                texto.textContent = tarea.id + " - " + tarea.descripcion;

                if (tarea.completada) {
                    texto.className = "realizada";
                }

                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.checked = tarea.completada;
                checkbox.style.width = "auto";

                checkbox.onclick = function() {
                    cambiarEstado(indice);
                };

                let boton = document.createElement("button");
                boton.textContent = "✖";
                boton.className = "eliminar";

                boton.onclick = function() {
                    eliminarTarea(indice);
                };

                div.appendChild(texto);
                div.appendChild(checkbox);
                div.appendChild(boton);

                lista.appendChild(div);

            });

            actualizarResumen();
        }

       
        function agregarTarea() {

            let input = document.getElementById("nuevaTarea");
            let descripcion = input.value.trim();

            if (descripcion === "") {
                alert("Ingrese una tarea");
                return;
            }

            let nueva = {
                id: Date.now(),
                descripcion: descripcion,
                completada: false
            };

            tareas.push(nueva);

            input.value = "";

            mostrarTareas();
        }

        
        function eliminarTarea(indice) {

            tareas.splice(indice, 1);

            mostrarTareas();
        }

        
        function cambiarEstado(indice) {

            tareas[indice].completada = !tareas[indice].completada;

            mostrarTareas();
        }

        
        function actualizarResumen() {

            document.getElementById("total").textContent = tareas.length;

            let hechas = tareas.filter(function(tarea) {
                return tarea.completada === true;
            });

            document.getElementById("realizadas").textContent = hechas.length;
        }

       
        mostrarTareas();