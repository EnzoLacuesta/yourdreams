const ValidarFormulario = ()=>{
    let nameField = document.getElementById('name-contacto');
    let emailContacto = document.getElementById('email-contacto');
    let validName = /^([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+)(\s+([A-Za-zÑñÁáÉéÍíÓóÚú]+['\-]{0,1}[A-Za-zÑñÁáÉéÍíÓóÚú]+))*$/;
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

    if(validName.test(nameField.value) && validEmail.test(emailContacto.value)){
        alert('Formulario enviado')
        return true;
    }else{
        alert('Revise sus datos')
        return false;
    }


  }
  export default ValidarFormulario;