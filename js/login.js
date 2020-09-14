//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){
  const loginForm = document.getElementById("loginForm");

  loginForm.onsubmit = function(e) {
   e.preventDefault();
   let user = document.getElementById("inputEmail").value;
   let password = document.getElementById("inputPassword").value;
   checkuser ({'http://localhost:8080/auth', {
       user,
       password
   });
   //
};
});

function checkuser(url, data) {
   fetch(url, {
       method: 'POST', 
       body: JSON.stringify(data), 
       headers:{
         'Content-Type': 'application/json'
       }
     }).then(res => res.json())
     .catch(error => console.error('Error:', error))
     alert('Usuario y/o contraseña incorrecta');
    });
     .then(response => console.log('Success:', response)
     localStorage.setItem("email", data.user);
     localStorage.setItem("token", response.token);
     window.location.href = 'index.html';
  });
};