let inventario = {
    "productos": [
      { "id": 1, "nombre": "Laptop", "precio": 1000, "stock": 50 },
      { "id": 2, "nombre": "Smartphone", "precio": 700, "stock": 30 },
      { "id": 3, "nombre": "Tablet", "precio": 500, "stock": 20 },
      { "id": 4, "nombre": "Smartwatch", "precio": 300, "stock": 15 },
      { "id": 5, "nombre": "Auriculares", "precio": 150, "stock": 40 }
    ],
    "ventas": []
  };
  
  // Función para agregar una venta
  function agregarVenta(productoId, cantidad) {
    let producto = inventario.productos.find(p => p.id === productoId);
    
    if (producto && producto.stock >= cantidad) {
      producto.stock -= cantidad;
      inventario.ventas.push({
        id: inventario.ventas.length + 1,
        productoId: productoId,
        cantidad: cantidad,
        total: producto.precio * cantidad
      });
      console.log("Venta agregada con éxito.");
    } else {
      console.log("Stock insuficiente o producto no encontrado.");
    }
  }
  
  // Función para modificar una venta
  function modificarVenta(ventaId, nuevaCantidad) {
    let venta = inventario.ventas.find(v => v.id === ventaId);
    if (venta) {
      let producto = inventario.productos.find(p => p.id === venta.productoId);
      let diferencia = nuevaCantidad - venta.cantidad;
      
      if (producto.stock >= diferencia) {
        producto.stock -= diferencia;
        venta.cantidad = nuevaCantidad;
        venta.total = producto.precio * nuevaCantidad;
        console.log("Venta modificada con éxito.");
      } else {
        console.log("Stock insuficiente para modificar la venta.");
      }
    } else {
      console.log("Venta no encontrada.");
    }
  }
  
  // Función para eliminar una venta
  function eliminarVenta(ventaId) {
    let ventaIndex = inventario.ventas.findIndex(v => v.id === ventaId);
    
    if (ventaIndex !== -1) {
      let venta = inventario.ventas[ventaIndex];
      let producto = inventario.productos.find(p => p.id === venta.productoId);
      producto.stock += venta.cantidad;
      inventario.ventas.splice(ventaIndex, 1);
      console.log("Venta eliminada con éxito.");
    } else {
      console.log("Venta no encontrada.");
    }
  }
  
  // Ejemplos de uso
  agregarVenta(1, 5);  // Agrega una venta de 5 laptops
  modificarVenta(1, 3);  // Modifica la venta para que ahora sea 3 laptops
  eliminarVenta(1);  // Elimina la venta de 3 laptops
  