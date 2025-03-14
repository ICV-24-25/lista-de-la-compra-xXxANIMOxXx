// Clase Producto para representar cada elemento de la lista
class Producto {
    constructor(nombre, cantidad, categoria) {
      this.nombre = nombre;
      this.cantidad = cantidad;
      this.categoria = categoria;
    }
  }
  
  // Clase gestor para manejar los productos
  class GestorProductos {
    constructor() {
      this.productos = [
        new Producto("Leche", 2, "categoriaLacteos"),
        new Producto("Pollo", 1, "categoriaCarnes"),
        new Producto("Zanahorias", 5, "categoriaVerduras"),
        new Producto("Manzanas", 3, "categoriaFrutas"),
        new Producto("Pan Integral", 1, "categoriaPanaderia"),
        new Producto("Jugo de Naranja", 2, "categoriaBebidas")
      ];
    }
  
    // Añadir producto
    anadirProducto(producto) {
      this.productos.push(producto);
    }
  
    // Obtener productos filtrados por categoría
    obtenerProductosPorCategoria(categoria) {
      return this.productos.filter(producto => producto.categoria === categoria);
    }
  }
  
  // Instancia del gestor
  const gestor = new GestorProductos();
  
  // Función para actualizar las listas de categorías
  function actualizarCategorias() {
    const categorias = [
      'categoriaLacteos', 
      'categoriaCarnes', 
      'categoriaVerduras', 
      'categoriaFrutas', 
      'categoriaPanaderia', 
      'categoriaBebidas'
    ];
  
    categorias.forEach(categoria => {
      const categoriaList = document.getElementById(`${categoria}List`);
      categoriaList.innerHTML = '';  // Limpiar lista antes de volver a cargar
  
      // Obtener productos de la categoría actual
      gestor.obtenerProductosPorCategoria(categoria).forEach((producto, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            ${producto.cantidad}x <strong>${producto.nombre}</strong>
          </div>
        `;
        categoriaList.appendChild(li);
      });
    });
  }
  
  // Función para manejar el formulario de adición de producto
  document.getElementById('formProducto').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const nombre = document.getElementById('nombre').value;
    const cantidad = document.getElementById('cantidad').value;
    const categoria = document.getElementById('categoria').value;
  
    // Crear un nuevo producto
    const nuevoProducto = new Producto(nombre, cantidad, categoria);
  
    // Añadir el producto al gestor
    gestor.anadirProducto(nuevoProducto);
  
    // Actualizar las categorías
    actualizarCategorias();
  
    // Limpiar formulario
    document.getElementById('formProducto').reset();
  });
  
  // Inicializar la página con los productos iniciales
  actualizarCategorias();
  