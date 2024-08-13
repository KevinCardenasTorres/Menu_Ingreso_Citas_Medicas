// scrips.js

function confirmarCita(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtén los valores ingresados por el usuario
    const nombre = document.getElementById('Nombre').value;
    const email = document.getElementById('Email').value;
    const telefono = document.getElementById('Telefono').value;
    const fecha = document.getElementById('Fecha').value;
    const hora = document.getElementById('Hora').value;

    // Crear un mensaje con los datos confirmados
    const mensaje = `
        Cita asignada con éxito!\n
        Nombre: ${nombre}\n
        Correo Electrónico: ${email}\n
        Número de Teléfono: ${telefono}\n
        Fecha: ${fecha}\n
        Hora: ${hora}
    `;

    // Muestra el mensaje en una alerta
    alert(mensaje);
}
