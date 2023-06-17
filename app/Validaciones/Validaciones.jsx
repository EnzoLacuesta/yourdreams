'use client'
const ValidarEmail = ()=>{
    let emailField = document.getElementById('user-email');
    var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    
    if(validEmail.test(emailField.value)){
      alert('Subscribcion con exito');
      return true;
    }else{
      alert('Campo no completado correctamente');
      return false;
    }
  }

  export default ValidarEmail;
 