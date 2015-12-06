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
<<<<<<< HEAD
=======

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
      enviado.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);

}

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
      '" class="">Editar</button><button id="eliminar_correo_salida" data-id="' +
      salida.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);
}


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

>>>>>>> origin/master

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

<<<<<<< HEAD
function getSalida() {
  var salida = JSON.parse(localStorage.getItem('salida'));
  return salida ? salida : [];
}

function setSalida(datos) {
  localStorage.setItem('salida', JSON.stringify(
    datos));
=======
function EditarCorreo()
{
	var id_correo = sessionStorage.getItem("id_correo");
	var seccion = sessionStorage.getItem("seccion");
	var destino = document.getElementById("destino").value;
	var asunto = document.getElementById("asunto").value;
	var contenido = document.getElementById("contenido").value;
	var tmp = enviados_correos[id_correo];
	tmp.destino = destino;
	tmp.asunto = asunto;
	tmp.contenido = contenido;
	if(seccion == "enviados")
	{
		enviados_correos[id_correo] = tmp;
		localStorage.setItem('enviados_correos', JSON.stringify(enviados_correos));
	}else{
		borrador_correos[id_correo] = tmp;
		localStorage.setItem('borrador_correos', JSON.stringify(borrador_correos));
	}
}

function EliminarCorreo()
{
	var id_correo = sessionStorage.getItem("id_correo");
	var correos_tmp = [];
	var seccion = sessionStorage.getItem("seccion");
	if(seccion == "enviados")
	{
		for (var i = 0, a = 0; i < enviados_correos.length; i++) {
			if(id_correo != i)
			{
				correos_tmp[a] = enviados_correos[i];
				a++;
			}
		}
		for (var i = 0; i < correos_tmp.length; i++) {
			correos_tmp[i].id = i;
		}
		localStorage.setItem('enviados_correos', JSON.stringify(correos_tmp));
	}else{
		for (var i = 0, a = 0; i < borrador_correos.length; i++) {
			if(id_correo != i)
			{
				correos_tmp[a] = borrador_correos[i];
				a++;
			}
		}
		for (var i = 0; i < correos_tmp.length; i++) {
			correos_tmp[i].id = i;
		}
		localStorage.setItem('borrador_correos', JSON.stringify(correos_tmp));
	}


>>>>>>> origin/master
}



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
      enviado.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);

}

<<<<<<< HEAD
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
      '" class="">Editar</button><button id="eliminar_correo_salida" data-id="' +
      salida.id + '" class="">Eliminar</button></td></tr>';
  });

  tableBody.empty();
  tableBody.append(body);
=======
function GuardarCorreo()
{
	var destino = document.getElementById("destino").value;
	var asunto = document.getElementById("asunto").value;
	var contenido = document.getElementById("contenido").value;
	var id = borrador_correos.length;
	var correo = {
		"id": id,
		"destino": destino,
		"asunto": asunto,
		"contenido": contenido
	};
	if(destino != "" && asunto != "" && contenido != "")
	{
		borrador_correos.push(correo);
		localStorage.setItem('borrador_correos', JSON.stringify(borrador_correos));
	}
}

function EnviarCorreo() {
	var destino = document.getElementById("destino").value;
	var asunto = document.getElementById("asunto").value;
	var contenido = document.getElementById("contenido").value;
	var id = enviados_correos.length;
	var correo = {
		"id": id,
		"destino": destino,
		"asunto": asunto,
		"contenido": contenido
	};
	if(destino != "" && asunto != "" && contenido != "")
	{
		enviados_correos.push(correo);
		localStorage.setItem('enviados_correos', JSON.stringify(enviados_correos));
	}
>>>>>>> origin/master
}


$(document).delegate("#editar_correo_salida", "click", function() {
  var id = $(this).data('id');
  location = location = "editar.html?id=" + id;
});

<<<<<<< HEAD
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
=======
function CargarCorreos(categoria)
{
	var correo_html = "";
	if (categoria == 'borrador') {
	    for (var i = 0; i < borrador_correos.length; i++) {
			var u = borrador_correos[i];
			correo_html = correo_html + "<tr class=cursor id=" + i + " onclick=SetDatosTmp(`borrador`,this.id)><td>" + u.destino + "</td><td>" +
			u.asunto + "</td>" + "<td>" + u.contenido + "</td></tr>";
		}
	} else {
	    for (var i = 0; i < enviados_correos.length; i++) {
			var u = enviados_correos[i];
			correo_html = correo_html + "<tr class=cursor id=" + i + " onclick=SetDatosTmp(`enviados`,this.id)><td>" + u.destino + "</td><td>" +
			u.asunto + "</td>" + "<td>" + u.contenido + "</td></tr>";
		}
	}
	$('#tablaCorreo').html(correo_html);
}
>>>>>>> origin/master

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

<<<<<<< HEAD

=======
function Redireccionar(seccion)
{
	switch(seccion)
	{
		case "login":
			window.location.href = "index.html";
		break;

		case "borrador":
			window.location.href = "principalM.html";
		break;

		case "enviados":
			window.location.href = "enviados.html";
		break;

		case "nuevo":
			window.location.href = "EditarCorreo.html";
		break;

		default:
			window.location.href = "borrador.html";
	}
}*/
>>>>>>> origin/master
