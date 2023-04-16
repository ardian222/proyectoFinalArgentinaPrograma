//botón cargar más 

let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 4;

loadMoreBtn.onclick = () => {
    
    let boxes = [...document.querySelectorAll(".box-container .box")];
    for(var i = currentItem; i < currentItem + 4; i++) {
    boxes[i].style.display = "inline-block";
    }
    currentItem += 4;
    if(currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none"
    }
}

//carrito

const carrito = document.getElementById("carrito");
const elementos1 = document.getElementById("lista-1");
const lista = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.getElementById("vaciar-carrito");

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener("click", comprarElemento);
    carrito.addEventListener("click", eliminarElemento);
    vaciarCarritoBtn.addEventListener("click", vaciarCarrito);

}

function comprarElemento(e) {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")) {
    const elemento = e.target.parentElement.parentElement;
    leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento = {
        imagen: elemento.querySelector("img").src,
        titulo: elemento.querySelector("h3").textContents,
        precio: elemento.querySelector(".precio").textContents,
        id: elemento.querySelector("a").getAttribute(data-id)

    }
    insertarCarrito(infoElemento)
}

function insertarCarrito(elemento){
    const row = document.createElement("tr");
    row.innerHTML = `
    
    <td>
        <img src="${elemento.imagen}" width=100 />
    </td>

    <td>
        ${elemento.titulo}
    </td>

    <td>
        ${elemento.precio}
    </td>

    <td>
        <a href="#" class="borrar" data-id="${elemento.id0}" >x</a>
    </td>
    
    `;
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
        if (e.target.classList.contains("borrar")) {
            e.target.parentElement.parentElement.remove();
            elemento = e.target.parentElement.parentElement;
            elementoId = elemento.querySelector("a").getAttribute("data-id");
        }
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);

    }
    return false
}

//formulario

const form = document.querySelector('form');
  const nombre = document.querySelector('#nombre');
  const email = document.querySelector('#email');
  const telefono = document.querySelector('#telefono');
  const servicio = document.querySelector('#servicio');
  const cantidad = document.querySelector('#cantidad');
  const detalles = document.querySelector('#detalles');
  const fechaLimite = document.querySelector('#fecha_limite');
  const presupuesto = document.querySelector('#presupuesto');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita que se envíe el formulario
    
    // Validación de campos requeridos
    if (nombre.value === '' || email.value === '' || servicio.value === '' || cantidad.value === '' || fechaLimite.value === '') {
      alert('Los campos marcados con * son requeridos');
      return;
    }
    
    // Validación de formato de correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
      alert('Ingrese un correo electrónico válido');
      return;
    }

    // Validación de formato de número de teléfono
    const telefonoRegex = /^\d{8}$/; // asumimos que el formato de teléfono es de 8 dígitos
if (!telefonoRegex.test(telefono.value)) {
  alert('Ingrese un número de teléfono válido');
  return;
}

// Envío de formulario
const data = new FormData(form);
fetch('/enviar_cotizacion', {
  method: 'POST',
  body: data
})
.then(response => {
  if (response.ok) {
    alert('La cotización ha sido enviada correctamente');
    form.reset(); // reinicia el formulario
  } else {
    alert('Ocurrió un error al enviar la cotización');
  }
})
.catch(error => {
  alert('Ocurrió un error al enviar la cotización');
  console.error(error);
});