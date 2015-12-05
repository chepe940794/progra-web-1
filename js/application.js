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


function EnviarCorreo() {
	var destino = document.getElementById("correo_destino").value;
	var asunto = document.getElementById("asunto").value;
	var contenido = CKEDITOR.instances.editor.getData();
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
}





//aqui empieza el codigo de daniel

/*var borrador_correos = JSON.parse(localStorage.getItem('borrador_correos'));
if (!borrador_correos) {
	borrador_correos = [];
}

function Conectar()
{
	localStorage.setItem("conectado",true);
}

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
	
	
}

function Desconectar()
{
	localStorage.setItem("conectado",false);
}

var enviados_correos = JSON.parse(localStorage.getItem('enviados_correos'));
if (!enviados_correos) {
	enviados_correos = [];
}

function Bloquear()
{
	var conectado = localStorage.getItem("conectado");
	if(conectado == "false")
	{
		Redireccionar("login");
	}
}

function GuardarUsuario()
{
	var usuario = document.getElementById("usuario").value;
	var contrasena = document.getElementById("contrasena").value;
	localStorage.setItem("usuario",usuario);
	localStorage.setItem("contrasena",contrasena);
}

function SetDatosTmp(seccion,id_correo)
{
	sessionStorage.setItem("seccion",seccion);
	sessionStorage.setItem("id_correo",id_correo);
	Redireccionar(0);
}

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
}

function SetInfo(destino,asunto,contenido)
{
	document.getElementById("destino").value = destino;
	document.getElementById("asunto").value = asunto;
	document.getElementById("contenido").value = contenido;
}

function LeerCorreo()
{
	var seccion = sessionStorage.getItem("seccion");
	var id_correo = sessionStorage.getItem("id_correo");
	if(seccion == "borrador")
	{
		for (var i = 0; i < borrador_correos.length; i++) {
			if(i == id_correo)
			{
				var u = borrador_correos[i];
				SetInfo(u.destino,u.asunto,u.contenido);
			}
		}
	}else
	{
		for (var i = 0; i < enviados_correos.length; i++) {
			if(i == id_correo)
			{
				var u = enviados_correos[i];
				SetInfo(u.destino,u.asunto,u.contenido);
			}
		}
	}
}

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

function Error()
{
	document.getElementById("error").innerHTML = "Usuario/contraseña incorrectos";
}

function ValidarUsuario()
{
	var user = document.getElementById("usuario").value;
	var password = document.getElementById("contrasena").value;
	var registroUser = localStorage.getItem("usuario");
	var registroPass = localStorage.getItem("contrasena");
	if(user == registroUser && password == registroPass)
	{
		Conectar();
		location = "principalM.html"
	}
	else
		window.alert("Usuario/contraseña invalidos");
		return false;
}

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