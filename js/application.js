//crea usuarios
$('#save_client').click(function() {
  console.log('Registrar usuario');
  var usuario = document.getElementById("email").value;
  var contrasena = document.getElementById("password").value;

  if (usuario == '' || contrasena == '') {

    alert('LLene los campos');
    return;
  }

  localStorage.setItem("email", usuario);
  localStorage.setItem("password", contrasena);
  location = "index.html"

});

//valida usuarios para iniciar sesion
$('#iniciar_sesion').click(function() {

  var user = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var registroUser = localStorage.getItem("email");
  var registroPass = localStorage.getItem("password");
  if (user == registroUser && password == registroPass) {
    return location = "principalM.html"
  }
  window.alert("Usuario/contraseña invalidos");
});


//envia los datos a enviados despues de crear el correo
$('#enviar_correo').click(function() {
  var destino = document.getElementById("correo_destino").value;
  var asunto = document.getElementById("asunto").value;
  var contenido = CKEDITOR.instances.editor.getData();
  var enviados = getEnviados();
  var id = enviados.length + 1;
  var correo = {
    "id": id,
    "destino": destino,
    "asunto": asunto,
    "contenido": contenido,
    "fecha": new Date()
  };
  if (destino != "" && asunto != "" && contenido != "") {
    enviados.push(correo);
    setEnviados(enviados);

  }
});

//guarda el correo y lo envia a borrador
$('#guardar_correo').click(function() {
  var destino = document.getElementById("correo_destino").value;
  var asunto = document.getElementById("asunto").value;
  var contenido = CKEDITOR.instances.editor.getData();
  var salida = getSalida();
  var id = salida.length + 1;
  var correo = {
    "id": id,
    "destino": destino,
    "asunto": asunto,
    "contenido": contenido,
    "fecha": new Date()
  };
  if (destino != "" && asunto != "" && contenido != "") {
    salida.push(correo);
    setSalida(salida);

  }
});


function getEnviados() {
  var enviados = JSON.parse(localStorage.getItem('enviados'));
  return enviados ? enviados : [];
}

function setEnviados(datos) {
  localStorage.setItem('enviados', JSON.stringify(
    datos));
}

function getSalida() {
  var salida = JSON.parse(localStorage.getItem('salida'));
  return salida ? salida : [];
}

function setSalida(datos) {
  localStorage.setItem('salida', JSON.stringify(
    datos));
}


//muestra y crea las tablas en enviados con los correos nuevos
function imprimirEnviados() {
  var enviados = getEnviados();
  var tableBody = $('#tEnviados').find('tbody');
  var body = '';
  enviados.forEach(function(enviado, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + enviado.destino + '</td>' +
      '<td id="b1">' + enviado.asunto + '</td>' +
      '<td id="b1">' + enviado.contenido + '</td>' +
      '<td id="b1">' + enviado.fecha + '</td>' +
      '<td id="b1"><button id="eliminar_correo_enviados" data-id="' +
      enviado.id + '" class="waves-effect waves-light btn">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);

}

//muestra en borrador los correos guardados
function imprimirSalida() {
  var salida = getSalida();
  var tableBody = $('#tSalida').find('tbody');
  var body = '';
  salida.forEach(function(salida, index, array) {
    body +=
      '<tr>' +
      '<td id="b1">' + salida.destino + '</td>' +
      '<td id="b1">' + salida.asunto + '</td>' +
      '<td id="b1">' + salida.contenido + '</td>' +
      '<td id="b1">' + salida.fecha + '</td>' +
      '<td id="b1"><button id="editar_correo_salida" data-id="' + salida.id +
      '" class="waves-effect waves-light btn">Editar</button><button id="eliminar_correo_salida" data-id="' +
      salida.id + '" class="waves-effect waves-light btn">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);
}

//button editar correo 
$(document).delegate("#editar_correo_salida", "click", function() {
  var id = $(this).data('id');
  location = location = "editar.html?id=" + id;
});

$(document).delegate('#eliminar_correo_salida', "click", function() {
	
  var id = $(this).data('id');
  var salida = getSalida();
  var datos = [];
  salida.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setSalida(datos);
  imprimirSalida();
});
//elimina correos en enviados
$(document).delegate('#eliminar_correo_enviados', "click", function() {
  var id = $(this).data('id');
  var enviados = getEnviados();
  var datos = [];
  enviados.forEach(function(element, index) {
    if (element.id != id) {
      datos.push(element);
    }
  });
  setEnviados(datos);
  imprimirEnviados();
});
//carga lo que tenga destino, asunto y editor
function setEditarData() {

  var salida = getSalida();
  var id = window.location.search.split('=')[1];
  var destino = document.getElementById('destino');
  var asunto = document.getElementById('asunto');
  var editor = CKEDITOR.instances.editor;
  var datos;

  salida.forEach(function(element, index) {
    if (element.id == id) {
      return datos = element;
    }
  });
  destino.value = datos.destino;
  asunto.value = datos.asunto;
  editor.setData(datos.contenido);

}

//mueve los correos que se editen de borrador a enviados
$('#mover_correo').click(function() {

   var id = window.location.search.split('=')[1];
 

  var salida = getSalida();
  var enviados = getEnviados();
  var newSalida = [];

  salida.forEach(function(element,index){

  	if(element.id != id){
  		newSalida.push(element);
  	}else{
  		enviados.push(element);
  	}
  });

  setSalida(newSalida);
  setEnviados(enviados);
  
});