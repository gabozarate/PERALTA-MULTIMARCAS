//data 
const dataUser = []
//clases
class User {
    constructor (name, lastName, cuit, cuil){
        this.name = name,
        this.lastName = lastName,
        this.cuit = cuit
    }
} 

function newUser(){
    let nameImput = document.getElementById
    ("nameInput")
    let lastNaImput = document.getElementById
    ("lastNaInput")
    let cuitImput = document.getElementById
    ("cuitInput")
    let cuilImput = document.getElementById
    ("cuitInput__2")
    let newUserCreated = new User (
        nameImput.value,
        lastNaImput.value, 
        cuitImput.value
        )
    console.log(newUserCreated)
    dataUser.push(newUserCreated)
}

const signInBtn = document.getElementById("signInBtn") 
signInBtn.addEventListener("click", newUser);