document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('alumno-form');
    const listaAlumnos = document.getElementById('lista-alumnos');

    // Cargar alumnos desde LocalStorage o inicializar vacío
    let alumnos = JSON.parse(localStorage.getItem('alumnos')) || [];

    // Función para renderizar los alumnos en la tabla
    function renderAlumnos() {
        if (!listaAlumnos) return;
        listaAlumnos.innerHTML = '';

        alumnos.forEach((alumno, index) => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${alumno.cedula}</td>
                <td>${alumno.nombre}</td>
                <td>${alumno.materia}</td>
                <td><strong>${alumno.nota}</strong></td>
                <td>
                    <button class="btn-delete" data-index="${index}">Eliminar</button>
                </td>
            `;
            listaAlumnos.appendChild(tr);
        });

        // Guardar datos actualizados en LocalStorage
        localStorage.setItem('alumnos', JSON.stringify(alumnos));
    }

    // Evento para agregar un nuevo alumno
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Capturar los valores de los inputs
            const nombre = document.getElementById('nombre').value;
            const cedula = document.getElementById('cedula').value;
            const materia = document.getElementById('materia').value;
            const nota = document.getElementById('nota').value;

            // Crear objeto del alumno
            const nuevoAlumno = { nombre, cedula, materia, nota };

            // Añadir al arreglo y actualizar la vista
            alumnos.push(nuevoAlumno);
            renderAlumnos();

            // Limpiar el formulario
            form.reset();
        });
    }

    // Evento para eliminar un alumno usando delegación de eventos
    if (listaAlumnos) {
        listaAlumnos.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-delete')) {
                const index = e.target.getAttribute('data-index');
                // Eliminar elemento del arreglo
                alumnos.splice(index, 1);
                // Volver a renderizar
                renderAlumnos();
            }
        });
    }

    // Carga inicial
    renderAlumnos();
});