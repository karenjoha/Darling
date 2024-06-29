import { productos } from '../modules/data.js';



const contenedorFiltros =document.getElementById('menu')
console.log(contenedorFiltros);

const tipoAccesorio = productos.map(productos=> productos.tipoDeAccesorio);
console.log(tipoAccesorio);

const categorias = [...new Set(tipoAccesorio)];
// const listaCategorias = Array.from(new Set(categorias));
console.log(categorias);



// Para revisar
categorias.forEach(element => {
    const item= document.createElement('ul')
    item.innerHTML=`
        <li id=${element} name=${element}>${element}</li>
    `
    // console.log(item);
    item.addEventListener('click', ()=>{
        console.log(`Hiciste click en la categoría ${element}`)
    });
    // console.log(item);
    contenedorFiltros.appendChild(item);

})



const opciones = document.getElementById('price-filter');
console.log(opciones);

const listaDePrecios = productos.map(productos=> productos.precioUnitario);
console.log(listaDePrecios);

const valoresUnicos= new Set(listaDePrecios);
console.log(valoresUnicos);

    opciones.addEventListener('change', ()=>{
        let valorOpcion=opciones.value;
        console.log(valorOpcion);

    

        let opcionSelect= opciones.options[opciones.selectedIndex===1 ];

        console.log(`Opcion:`, listaDePrecios.sort());

        console.log(opcionSelect);
    })
    
    

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
