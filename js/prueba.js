/* En este archivo debe agregar las clases JS que considere necesarias para la realización de las pruebas de páginas Estáticas */

function validation(){
	var name, lastName, telephone, email, topic, menssage, expresion;
	name = forma.name;
	lastName = forma.lastName;
	telephone = forma.telephone; 
	email = forma.email;
	topic = forma.topic;
	menssage = forma.;menssage;
	expresion = /\w+@+\w+\.+[a-z]/;
	

	if (name.value===""||email.value===""){
		document.getElementById("resultado").innerHTML = "Error, revisar campos obligatorios.";
		return false;
	}
	else if (!expresion.test(email.value)){
		alert('El formato del correo es inválido. Formato Correcto: jdoe@test.com');
		return false;
	}

		alert('Los datos ingresados Fueron: Nombre: ' + name + 'Apellidos: ' + lastName + 'Teléfono: ' + telephone + 'Correo: ' + email + 'Tema de interés: ' + topic + 'Mensaje: ' + menssage);
		document.getElementById("resultado").innerHTML = "Mensaje enviado.";
		return true;


}

/*var name, lastName, telephone, email, topic, menssage, expresion;
	name = document.getElementById("name").value;
	lastName = document.getElementById("last-name").value;
	telephone = document.getElementById("telephone").value;
	email = document.getElementById("email").value;
	topic = = document.getElementById("topic").value;
	menssage = = document.getElementById("menssage").value;
	expresion = /\w+@+\w+\.+[a-z]/;

	if (!name===""||!lastName===""||!telephone===""||(!email==="" && expresion.test(email))||!topic===""||!menssage===""){
		alert('Los datos ingresados Fueron: Nombre: ' + name + 'Apellidos: ' + lastName + 'Teléfono: ' + telephone + 'Correo: ' + email + 'Tema de interés: ' + topic + 'Mensaje: ' + menssage);
		document.getElementById("resultado").innerHTML = "Mensaje enviado.";
		return true;
	}
	else if (!expresion.test(email)){
		alert('El formato del correo es inválido. Formato Correcto: jdoe@test.com');
		return false;
	}
	else if(name===""||email===""){
		document.getElementById("resultado").innerHTML = "Error, revisar campos obligatorios.";
		return false;
	}

	if (name.value == "") {
		alert("Debe proporcionar un nombre de usuario");
		name.focus();
		name.select();
		return false;
	}
	else{
		alert("Goog Job");
	}
	*/