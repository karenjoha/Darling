const formulario_payment = document.getElementById("add_payment_method");
console.log(formulario_payment);
// const nombre= document.querySelector("#name");
// console.log(nombre);

// console.log(formulario_payment.children);

// acceder a los valores de los elementos del formulario

// ]

//validación de datos

// formulario_payment.addEventListener('submit', function(event){
//     event.preventDefault();
//     const correoElectronico = document.getElementById('email').value;
//     const  nombre =document.getElementById('name').value;
//     const  numeroEnLaTarjeta= document.getElementById('number').value;
//     const fechaDeCaducidad= document.getElementById('date').value;
//     const  cvv= document.getElementById('cvv').value;

//     if (!correoElectronico.includes('@')){
//         console.log("Ingrese un correo electrónico válido");
//     }else if( nombre.length<3)
//     {console.log("el nombre debe tener más de 3 caracteres");
//     }else{
//         console.log("El número de la tarjeta debe tener 16 dígitos");
//     }
// })

//manejar eventos de los formularios

formulario_payment.addEventListener("submit", (evento) => {
  evento.preventDefault();
  // console.log(evento);
  // console.log(formulario_payment.children);

  //     // const formData= new FormData(formulario_payment);
  //     // console.log(formData);
  //     const dataForm={};
  //     const formData =new FormData(formulario_payment);
  //     for (const [nombrePropiedad, valorPropiedad] of formData.entries()){
  //         dataForm[nombrePropiedad]=valorPropiedad;
  //     }
  //     console.log(dataForm);
  // })

  const dataForm = {};
  const formData = formulario_payment.children;
  for (const elemento of formData) {
    if (elemento.localName != "label" && elemento.localName != "button") {
      console.log(elemento.value);
      // console.log(elemento.type);
      dataForm[elemento.id] = elemento.ariaValueMax;
    }
  }

  // Expresión para validar el correo electrónico
  const email = document.getElementById("email").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Función para validar el correo electrónico
  const validarEmail = (email) => {
    return emailRegex.test(email);
  };

  if (validarEmail(email)) {
    console.log(`Correo: $${email} - Válido`);
  } else {
    console.log(`Correo: $${email} - No válido.`);
  }
  // Ejemplos de uso
  // const email1 = "test@example.com";
  // const email2 = "invalid-email";

  // console.log(`Correo Electrónico: ${email1} - ${validarEmail(email1) ? 'Válido' : 'No válido'}`);
  // console.log(`Correo Electrónico: ${email2} - ${validarEmail(email2) ? 'Válido' : 'No válido'}`);

  // console.log(dataForm);
  const nombre = document.getElementById("name").value;
  const nombreRegex = /^.{10,}$/;

  // Función para validar el nombre
  const validarNombre = (nombre) => {
    return nombreRegex.test(nombre);
  };

  // Validar el nombre y mostrar el resultado en la consola
  if (validarNombre(nombre)) {
    console.log(`Nombre: ${nombre} - Válido`);
  } else {
    console.log(
      `Nombre: ${nombre} - No válido. Debe tener mínimo de 10 caracteres.`
    );
  }

  // Validar la tarjeta visa y mostrar el resultado en la consola

  const visa = document.getElementById("number").value;
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;

  // Función para validar la tarjeta
  const validarTarjeta = (visa) => {
    return visaRegex.test(visa);
  };

  
  if (validarTarjeta(visa)) {
    console.log(`Tarjeta visa: ${visa} - Válida`);
  } else {
    console.log(`Tarjeta visa: ${visa} - No válida`);
  }

  //validar la tarjeta master card y mostrar el resultado en consola

  const masterCard = document.getElementById("number").value;
  const mastercardRegex = /^(5[1-5][0-9]{14}|2(2[2-9][0-9]{12}|[3-6][0-9]{13}|7[01][0-9]{12}|720[0-9]{12}))$/;

  // Función para validar la tarjeta
  const validarTarjetaMasterCard = (masterCard) => {
    return mastercardRegex.test(masterCard);
  };

  
  if (validarTarjetaMasterCard(masterCard)) {
    console.log(`Tarjeta MasterCard: ${masterCard} - Válida`);
  } else {
    console.log(`Tarjeta MasterCard: ${masterCard} - No válida`);
  }

  //validar la tarjeta American Express y mostrar el resultado en consola

  const amex = document.getElementById("number").value;
  const amexRegex = /^3[47][0-9]{13}$/;

  // Función para validar la tarjeta
  const validarTarjetaAmex = (amex) => {
    return amexRegex.test(amex);
  };

  
  if (validarTarjetaAmex(amex)) {
    console.log(`Tarjeta AmericanExpress: ${amex} - Válida`);
  } else {
    console.log(`Tarjeta AmericanExpress: ${amex} - No válida`);
  }

  const  cvv= document.getElementById('cvv').value;
  if( cvv.length !=3)
    console.log("el cvv debe tener 3 numeros");
});

// }
// )
