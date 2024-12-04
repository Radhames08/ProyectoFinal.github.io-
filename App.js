// Variables para almacenar los datos de etiquetas, ventas y colores
const labels = [];
const salesData = [];
const colors = [];

// Configuración inicial del gráfico
const ctx = document.getElementById('salesChart').getContext('2d');
const salesChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Ventas por Mes',
            data: salesData,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Función para agregar los datos al gráfico
function addData() {
    // Obtén los valores del formulario
    const month = document.getElementById('month').value;
    const sales = parseInt(document.getElementById('sales').value); // Convierte a número

    // Verifica que ambos campos tengan valores válidos
    if (month && !isNaN(sales)) {
        labels.push(month);
        salesData.push(sales);

        // Define el color según si la venta es baja, intermedia o alta
        if (sales <= 75000) {
            colors.push('rgba(255, 99, 132, 0.8)'); // Rojo para ventas bajas
        } else if (sales > 75000) {
            colors.push('rgba(75, 192, 192, 0.8)'); // Verde para ventas altas
        } else {
            colors.push('rgba(255, 206, 86, 0.8)'); // Amarillo para ventas intermedias
        }

        salesChart.update(); // Actualiza el gráfico con los nuevos datos
        clearForm(); // Limpia el formulario
    } else {
        alert("Por favor, ingresa ambos valores.");
    }
}

// Función para limpiar los campos del formulario después de agregar los datos
function clearForm() {
    document.getElementById('month').value = '';
    document.getElementById('sales').value = '';
}

// Función para descargar el gráfico como imagen
document.getElementById('downloadBtn').addEventListener('click', function() {
    // Convierte el gráfico en una imagen en base64
    const imageUrl = salesChart.toBase64Image();
    
    // Crea un enlace para descargar la imagen
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'grafico_ventas.png'; // Nombre del archivo a descargar
    link.click(); // Simula un clic en el enlace para iniciar la descarga
});
