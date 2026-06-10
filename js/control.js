/* ==========================================================================
   NICCOGAR RENTAL S.A.C. - Lógica Comercial y de Costos (EPIC)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('.form-cotizar');
    
    // Matriz de Costos Unitarios basados en los datos de inversión del proyecto
    const costosMaquinaria = {
        'plancha': { nombre: 'Compactadora tipo plancha', precio: 3000 },
        'canguro': { nombre: 'Compactadora tipo canguro', precio: 3500 },
        'mezcladora': { nombre: 'Mezcladora de concreto', precio: 2000 },
        'vibrador': { nombre: 'Vibrador para concreto', precio: 600 },
        'rotomartillo': { nombre: 'Rotomartillo / martillo demoledor', precio: 500 },
        'generador': { nombre: 'Generador eléctrico', precio: 2500 }
    };

    if (formulario) {
        formulario.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const nombre = document.getElementById('nombre').value;
            const empresa = document.getElementById('empresa').value || "Particular / Contratista EPIC";
            const telefono = document.getElementById('telefono').value;
            const equipoSelect = document.getElementById('equipo').value; // Asegúrate de que los values en el HTML coincidan con las llaves ('plancha', 'canguro', etc.)
            const cantidad = parseInt(document.getElementById('cantidad').value) || 1;
            const fecha = document.getElementById('fecha').value;
            
            // Validación y Cálculo Financiero
            const equipoData = costosMaquinaria[equipoSelect];
            
            if (equipoData) {
                const costoUnitario = equipoData.precio;
                const costoTotal = costoUnitario * cantidad;
                
                // Alerta Interactiva con Desglose de Presupuesto para Ingeniería Civil
                alert(`🏗️ ¡SIMULACIÓN DE PRESUPUESTO - NICCOGAR RENTAL S.A.C.!\n\n` +
                      `👤 Representante: ${nombre}\n` +
                      `🏢 Entidad/Obra: ${empresa}\n` +
                      `📅 Fecha de Inicio: ${fecha}\n` +
                      `--------------------------------------------------\n` +
                      `🛠️ Equipo: ${equipoData.nombre}\n` +
                      `🔢 Cantidad Solicitada: ${cantidad} und.\n` +
                      `💰 Costo Referencial Unitario: S/. ${costoUnitario.toLocaleString('en-US')}.00\n` +
                      `📊 COSTO TOTAL DE INVERSIÓN: S/. ${costoTotal.toLocaleString('en-US')}.00\n` +
                      `--------------------------------------------------\n` +
                      `✅ Propuesta comercial registrada. Un asesor técnico de la EPIC se comunicará al ${telefono} para coordinar los términos de la entrega en Moquegua.`);
                
                formulario.reset();
            } else {
                alert("⚠️ Por favor, selecciona un equipo válido de la flota disponible.");
            }
        });
    }

    console.log("🚀 Módulo de costos y presupuestos NICCOGAR inicializado para la EPIC Moquegua.");
});