import { productos } from '../modules/data.js';



const contenedorFiltros =document.getElementById('menu')
console.log(contenedorFiltros);

const tipoAccesorio = productos.map(productos=> productos.tipoDeAccesorio);
console.log(tipoAccesorio);

const categorias = [...new Set(tipoAccesorio)];

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
    
    contenedorFiltros.appendChild(item);

})



const opciones = document.getElementById('price-filter');
console.log(opciones);

const listaDePrecios = productos.map(productos=> productos.precioUnitario);
console.log(listaDePrecios);

const listaOrdenadaMenorAMayor= listaDePrecios.sort((a,b)=>a-b);
console.log(listaOrdenadaMenorAMayor);
// numeros.sort((a, b) => b - a);

const listaOrdenadaMayorAMenor= listaDePrecios.sort((a, b) => b - a);
console.log(listaOrdenadaMayorAMenor);

// const valoresUnicos= new Set(listaDePrecios);
// console.log(valoresUnicos);

// const valoresArray = Array.from(listaDePrecios);
// console.log(valoresArray);

// const valoresOrdenados= valoresUnicos.sort();
// console.log(valoresOrdenados);

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

// function busquedaVideoPorNombre(listaVideos, nombreABuscar) {
//     return listaVideos.filter((video) =>
//       video.namevideo.toLowerCase().includes(nombreABuscar.toLowerCase())
//     );
//   }

