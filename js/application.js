var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}


function saveToLocalStorage(first_name, last_name, email, password) {
	var user = {
		"first_name": first_name,
		"last_name": last_name,
		"email": email,
		"password": password
	};
	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	loadUsers();
}


/*function loadUsers() {

	// read users from localstorage
	// loop users
	var user_html = "";
	for (var i = 0; i < users.length; i++) {
		// add users to the table
		var u = users[i];
		user_html = user_html + "<tr><td>"+u.username+"</td><td>"+
		u.password+"</td></tr>";
	}

	$('#users_table').html(user_html);

}*/
