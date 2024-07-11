//import { obtenerCategorias} from '../modules/services.js';

// Función para pintar las categorías
// const pintarCategorias = (listaCategorias, contenedor) => {
//     contenedor.innerHTML = ""; 

//     listaCategorias.forEach(categoria => {
//         const li = document.createElement('li');
//         const button = document.createElement('button');

//         button.textContent = categoria.nombre;
    

//         li.appendChild(button);
//         contenedor.appendChild(li); // Agrega el elemento li al contenedor
//     });
// };

// // Variable para el contenedor de filtros
// const contenedorFiltros = document.getElementById("filtros");

// // Ejecución cuando el DOM está completamente cargado
// document.addEventListener('DOMContentLoaded', async () => {
//     try {
//         const categorias =await obtenerCategorias();
//         pintarCategorias(categorias, contenedorFiltros); // Pasamos categorias y el contenedor correcto
//     } catch (error) {
//         console.error('Error al obtener categorías:', error);
//     }
// });

import { productos } from '../modules/data.js';



const contenedorFiltros =document.getElementById('menu')
console.log(contenedorFiltros);

const tipoAccesorio = productos.map(productos=> productos.tipoDeAccesorio);
console.log(tipoAccesorio);

const categorias = [...new Set(tipoAccesorio)];

console.log(categorias);


categorias.forEach(element => {
    const item= document.createElement('ul')
    item.innerHTML=`
        <li id=${element}>${element}</li>
    `    // console.log(item);
    item.addEventListener('click', ()=>{
        console.log(`Hiciste click en la categoría ${element}`)
    });
    
    contenedorFiltros.appendChild(item);

})




const opciones = document.getElementById('price-filter');
console.log(opciones);

const listaDePrecios = productos.map(productos=> productos.precioUnitario);
console.log(listaDePrecios);

const listaOrdenadaMenorAMayor= listaDePrecios.sort((a,b)=>a-b);
console.log(listaOrdenadaMenorAMayor);


const listaOrdenadaMayorAMenor= listaDePrecios.sort((a, b) => b-a);
console.log(listaOrdenadaMayorAMenor);


    opciones.addEventListener('change', ()=>{
        const valorOpcion=opciones.value;
        console.log(valorOpcion);

    

        const opcionSelect= opciones.options[opciones.selectedIndex===1 ];

        console.log(`Opcion:`, listaDePrecios.sort());

        console.log(opcionSelect);
    })
    
    
// const contenedorFiltroPrecio= document.getElementById("price-filter");
// console.log(contenedorFiltroPrecio);
// console.log(contenedorFiltroPrecio.children);

// const opciones= contenedorFiltroPrecio.options;
// console.log(opciones);
// // const opciones = document.querySelector

// function ejecutarFiltros(precioUnitario) {
//     console.log(`Hiciste click en: ${opciones.value} los valores son: ${precioUnitario}`);
// }


// const filtroPrecios = document.getElementById("price-filter");
// filtroPrecios.addEventListener("click", (evento) => {
//   ejecutarFiltros(evento
//   );
// });

// function ejecutarFiltros(filtroPrecios,) {
    
// }

    function filtrarProductos(criterio) {
        const criterioLower = criterio.toLowerCase();
        const resultados = productos.filter(producto =>
            producto.nombre.toLowerCase().includes(criterioLower) ||
            producto.codigo.toString().includes(criterioLower) ||
            producto.descripcion.toLowerCase().includes(criterioLower) ||
            producto.tipoDeAccesorio.toLowerCase().includes(criterioLower) ||
            producto.precioUnitario.toLowerCase().includes(criterioLower)
        );
        console.log(resultados);
    }

/* ejemplo de uso */
filtrarProductos("anillo");


function sumarPreciosYMostrar(idsSeleccionados) {
    const productosSeleccionados = productos.filter(producto =>
        idsSeleccionados.includes(producto.idProducto)
    );

    const totalPrecio = productosSeleccionados.reduce((total, producto) => {
        const precio = parseFloat(producto.precioUnitario.replace('$', ''));
        return total + precio;
    }, 0);

    console.log("Productos seleccionados:", productosSeleccionados);
    console.log(`El total de los precios es: $${totalPrecio.toFixed(2)}`);
}

// Ejemplo de uso:
const ids = [1, 2, 3]; 
sumarPreciosYMostrar(ids);
