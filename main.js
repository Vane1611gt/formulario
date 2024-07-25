// Selecciona el elemento con id 'root'
let root = document.querySelector("#root");

// Crea un nuevo div para el formulario
let div_formulario = document.createElement("div");
div_formulario.className = "div-formularios"; // 

// Lista de datos (String)
let formularios=[
    { nombre:"Login",link:"componentes/login/login.html"},   
    { nombre:"Login",link:"#:"}, 
    { nombre:"Login",link:"#"}, 
    { nombre:"Login",link:"#"}, 
];

// Itera sobre cada elemento de la lista
formularios.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.href="itemLista.link";
    div_item.innerText=itemLista.nombre;

    div_formulario.appendChild(div_item); 
});

// Agrega el div_formulario a root
root.appendChild(div_formulario);

