/* ==========================================================================
   NICCOGAR RENTAL S.A.C. - Lógica de Control e Interactividad
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. CONTROL DEL FORMULARIO DE COTIZACIÓN ONLINE
    const formulario = document.querySelector('.form-cotizar');
    
    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que la página se recargue por defecto
            
            // Captura de datos ingresados por el usuario
            const nombre = document.getElementById('nombre').value;
            const empresa = document.getElementById('empresa').value || "Particular";
            const telefono = document.getElementById('telefono').value;
            const equipoSelect = document.getElementById('equipo');
            const equipoTexto = equipoSelect.options[equipoSelect.selectedIndex].text;
            const fecha = document.getElementById('fecha').value;
            
            // Simulación de procesamiento de datos en el servidor logístico de la empresa
            alert(`🏗️ ¡SOLICITUD DE COTIZACIÓN RECIBIDA EN SISTEMA!\n\n` +
                  `Estimado(a): ${nombre}\n` +
                  `Entidad: ${empresa}\n` +
                  `Equipo solicitado: ${equipoTexto}\n` +
                  `Fecha requerida: ${fecha}\n\n` +
                  `✅ Nuestro asesor comercial en Moquegua se comunicará al número ${telefono} en menos de 30 minutos con la propuesta económica formal. ¡Gracias por confiar en NICCOGAR RENTAL!`);
            
            formulario.reset(); // Limpia los campos del formulario tras el éxito
        });
    }

    // 2. LOG INTERACTIVO DE CONTROL EN CONSOLA (Para demostrar desarrollo técnico)
    console.log("🚀 Sistema de Control de NICCOGAR RENTAL S.A.C. inicializado correctamente.");
    console.log("📊 Monitoreando estados de disponibilidad de la flota en Moquegua...");
});