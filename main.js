// Selecciona el elemento con id 'root'
let root = document.querySelector("#root");

// Crea un nuevo div para el formulario
let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios"; // 

// Lista de datos (String)
let formularios = [
    { nombre: "Formulario de Contacto", link: "componentes/formularioDeContacto/formularioDeContacto.html" },
    { nombre: "Formulario de Registro", link: "componentes/formularioDeRegisto/formularioDeRegisto.html" },
    { nombre: "Formulario de Búsqueda", link: "componentes/formularioDeBusqueda/formularioDeBusqueda.html" },
    { nombre: "Formulario de Pedido Compras", link: "componentes/formularioDePedidoCompras/formularioDePedidoCompras.html" },
    { nombre: "formulario De Comentarios Reseñas", link: "componentes/login/login.html" } // Agregado otro formulario de login
];

// Itera sobre cada elemento de la lista
formularios.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.href = itemLista.link; // Corrige la asignación del href
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item); 
});

// Agrega el div_formulario a root
root.appendChild(div_formulario);

