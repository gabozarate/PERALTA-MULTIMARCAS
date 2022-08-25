// //data 
// const dataUser = []
// //clases
// class User {
//     constructor (name, lastName, cuit, email){
//         this.name = name,
//         this.lastName = lastName,
//         this.email = email,
//         this.cuit = cuit
//     }
// } 

// function newUser(){
//     let nameImput = document.getElementById
//     ("nameInput")
//     let cuitImput = document.getElementById
//     ("cuitInput")
//     let emailImput = document.getElementById
//     ("emaiInput")
//     let newUserCreated = new User (
//         nameImput.value,
//         emailInput.value, 
//         cuitImput.value
//         )
//     console.log(newUserCreated)
//     dataUser.push(newUserCreated)
// }

// const signInBtn = document.getElementById("signInBtn") 
// signInBtn.addEventListener("click", newUser);





//Declaracion del form 
const formulario = document.getElementById(`form`)
const inputs = document.querySelectorAll(`#form input`);
const campos = {
    name : false,
    email : false,
    cuit : false,
    password : false,
    password2 : false,
}

//delcaracion de expreciones
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	cuit: /^\d{1,11}$/ // 7 a 14 numeros.
};

//terminos 
const terminos = document.getElementById(`checkTerms`);

//envio de formulario 
formulario.addEventListener(`submit`, (e) => {
 e.preventDefault();

 if (campos.name &&
     campos.email && 
     campos.cuit && 
     campos.password && 
     campos.password2 &&
     terminos.checked) {
        formulario.reset();
     }
});




    //validacion de inputs
const formValidation = (e) => {
    switch (e.target.name){
        case "name":
          validation(expresiones.nombre, e.target, `nombre`);
        break
        case "email":
            validation(expresiones.correo, e.target, `email`);
        break
        case "cuit":
            validation(expresiones.cuit, e.target, `cuit`);
        break
        case "password":
            validation(expresiones.password, e.target, `password`);
            
        break
        case "password2":
            passwordValidation()
        break
        case "checkTerms":

        break
    }
}

const validation = (expresion, input, campo) =>{
      if(expresion.test(input.value)){
                campos[campo] = true;
            } else {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 1000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  Toast.fire({
                    icon: 'warning',
                    title: 'caracter incorrecto'
                  })
                  campos[campo] = false;
            }
}
//validacion de contraseñas
const passwordValidation = () => {
    const inputPassword1 = document.getElementById("password")
    const inputPassword2 = document.getElementById("password2");

    if (inputPassword1.value != inputPassword2.value){
        // Swal.fire({
        //     icon: 'error',
        //     title: 'Oops...',
        //     text: 'las contraseñas no coinciden',
        //   })
        campos[`password`] = true;
        console.log("mal")
        
    }
    else {
        // Swal.fire({
        //     icon: 'success',
        //     title: 'Guardado',
        //     text: 'contraseña correcta'
        //   })
        campos[`password`] = true;
        console.log("bien")
        
    }
 }



//inputs 
inputs.forEach((input) => {
    input.addEventListener(`change`, formValidation);
    input.addEventListener(`blur`, formValidation);
    
    });