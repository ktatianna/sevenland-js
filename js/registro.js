let alertName = document.getElementById("name-group");
let alertLastName = document.getElementById("lastName-group");
let alertEmail = document.getElementById("email-group");
let alertPsw = document.getElementById("psw-group");

let boton = document.getElementById("btn-registro");
boton.addEventListener("click", validarFormulario);

function validarFormulario() {
    var alert = document.createElement('div');
    var name = document.getElementById("form-name").value;
    var lastname = document.getElementById("form-lastname").value;
    var email = document.getElementById("form-email").value;
    var psw = document.getElementById("form-pwd").value;
    
    // Validamos los datos del Campo Nombre
    if (name == "") {
        alert.innerHTML = 
            ` <div id="alert-name"> * Por favor ingrese un Nombre! </div>`
        alertName.append(alert)
        return;
    } else {
        if(document.getElementById("alert-name") != null ){
            document.getElementById("alert-name").innerHTML=''
        }
    }

    // Validamos los datos del Campo Apellido
    if (lastname == "") {
        alert.innerHTML = 
            ` <div id="alert-ln"> * Por favor ingrese tu apellido! </div>`
        alertLastName.append(alert)
        return;
    } else {
        if(document.getElementById("alert-ln") != null ){
            document.getElementById("alert-ln").innerHTML=''
        }
    }

    // Validamos los datos del Campo Email
    if (email == "") {
        alert.innerHTML = 
            ` <div id="alert-email"> * Por favor ingrese tu correo! </div>`
        alertEmail.append(alert)
        return;
    } else {
        if(document.getElementById("alert-email") != null ){
            document.getElementById("alert-email").innerHTML=''
        }
    }

    // Validamos los datos del Campo password
    if (psw == "") {
        alert.innerHTML = 
            ` <div id="alert-psw"> * Por favor ingrese una contraseña! </div>`
        alertPsw.append(alert)
        return;
    } else {
        if(document.getElementById("alert-psw") != null ){
            document.getElementById("alert-psw").innerHTML=''
        }
    }

    window.alert("Registro éxitoso");


} 