//Funcion Formulario
const $form = document.querySelector('#form')
$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body:form,
    headers:{
      'Accept': 'application/json'      }
  })

  if(response.ok){
    this.reset()
    swal({
      title: "Tu mensaje fue enviado!",
      text: "Gracias por contactarte, nos comunicaremos con vos lo mas pronto posible.",
      icon: "success",
    });
    
  }
}


const grande= document.querySelector('.grande')
const punto= document.querySelectorAll('.punto')

// Recorrer TODOS los punto
punto.forEach( ( cadaPunto , i )=> {
    // Asignamos un CLICK a cadaPunto
    punto[i].addEventListener('click',()=>{

        // Guardar la posición de ese PUNTO
        let posicion  = i
        // Calculando el espacio que debe DESPLAZARSE el GRANDE
        let operacion = posicion * -50

        // MOVEMOS el grand
        grande.style.transform = `translateX(${ operacion }%)`

        // Recorremos TODOS los punto
        punto.forEach( ( cadaPunto , i )=>{
            // Quitamos la clase ACTIVO a TODOS los punto
            punto[i].classList.remove('activo')
        })
        // Añadir la clase activo en el punto que hemos hecho CLICK
        punto[i].classList.add('activo')

    })
})

var nombre = document.getElementById('name')
var email = document.getElementById('email')
var mensaje = document.getElementById('message')

function validar(){
  validarNombre(nombre)
  validarEmail(email)
  validarMensaje(mensaje)
}



  function validarNombre(nombre) {

    if (nombre.value == "") {
      alert("Escriba su nombre")
     }
   }
    
        
  function validarEmail(email) {
    var mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (!email.value.match(mailformat)) {
      alert("Por favor ingrese un email valido");
    }
  }
 
        
    function validarMensaje(mensaje) {
      if (mensaje.value == "") {
       alert("Escriba su mensaje")
      }
    }

      
      
  










