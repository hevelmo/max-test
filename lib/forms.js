function formhash(form, password) {
    // Create a new element input, this will be our hashed password field. 
    var p = document.createElement("input");
    // Add the new element to our form. 
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    //p.value = hex_sha512(password.value);

    p.value = (password.value !== '')
        ? hex_sha512(password.value)
        : '';
    //console.log(p.value);
 
    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
 
    // Finally submit the form. 
    form.submit();
}

function recoverpass_formhash(form, password, password_confirm, email) {
    var p, pValue, p2Value, emailValue;

    pValue = '' + password.value;
    p2Value = '' + password_confirm.value;
    
    if(pValue === '' || p2Value === '') {
        alert("Todos los datos deben estar completos");
            return false;
    } else {
        if(pValue !== p2Value) {
            alert("Las contraseñas deben ser iguales");
            return false;
        } else {
            if(pValue.length < 6) {
                alert("Su contraseña debe tener mínimo 6 caracteres");
                return false;
            } else {
                // Create a new element input, this will be our hashed password field. 
                p = document.createElement("input");
                // Add the new element to our form. 
                p.name = "p";
                p.type = "hidden";

                p.value = (pValue !== '')
                    ? hex_sha512(pValue)
                    : '';
             
                form.appendChild(p);
                
                //console.log(form);

                // Make sure the plaintext password doesn't get sent. 
                password.value = "";
                password_confirm.value = "";

                //Finally submit the form. 
                form.submit();
                return true;
            }
        }
    }
}
 
function regformhash(form, uid, email, password, conf) {
    // Check each field has a value
    if (uid.value == ''        || 
          email.value == ''  || 
          password.value == ''       || 
          conf.value == '') {
        alert('Todos los datos son requeridos');
        return false;
    }
 
    // Check the username
 
    re = /^[A-Za-z ]+$/;
    if(!re.test(form.username.value)) { 
        alert("El usuario solo puede contener algunos valores. Trata de nuevo"); 
        form.username.focus();
        return false; 
    }
 
    // Check that the password is sufficiently long (min 6 chars)
    // The check is duplicated below, but this is included to give more
    // specific guidance to the user
    // after 6
    if (password.value.length < 5) {
        alert('El password tiene una longitud minima.  Trata de nuevo');
        form.password.focus();
        return false;
    }
 
    // At least one number, one lowercase and one uppercase letter 
    // At least six characters 
    // After var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/; 
 
    var re = /(?=.*\d)/; 
    if (!re.test(password.value)) {
        alert('Verifica tu password');
        return false;
    }
 
    // Check password and confirmation are the same
    if (password.value != conf.value) {
        alert('Confirmación de Password incorrecta. Please try again');
        form.password.focus();
        return false;
    }
 
    // Create a new element input, this will be our hashed password field. 
    var p = document.createElement("input");
 
    // Add the new element to our form. 
    form.appendChild(p);
    p.name = "p";
    p.type = "hidden";
    p.value = hex_sha512(password.value);
 
    // Make sure the plaintext password doesn't get sent. 
    password.value = "";
    conf.value = "";
 
    // Finally submit the form. 
    form.submit();
    return true;
}