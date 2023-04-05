function validarLogin(){
    const inputEmail = document.getElementById("campo_email")
    const inputSenha = document.getElementById()
    if(inputEmail.value!=="A"&&inputSenha!=="B"){
      alert("Email ou senha incorretos !")
    }
    else{
      var token=math.random().toString(36).substring(2);
      localStorage.setItem("token", token)
        button_form= window.open("~/../index.html");
    }
    
    }
    function mostrarNome(nomeUsuario){
            document.write('Olá', nomeUsuario, ', seja bem-vindo(a)!')
    }
    
    function logout() {
          localStorage.removeItem('token')
    }