let submit = document.querySelector('#submit');
let users = [
	{
		user: 'sqmu',
		pswrd: 'Secret210508',
	},
];
let username;
let password;
let successA = false;
let successB = false;
let isLoged = localStorage.getItem('isloged');

submit.addEventListener('click', function () {
	let user = document.getElementById('user');
	let pswrd = document.getElementById('pswrd');

	if (user.value.length == 0) {
		user.style.border = '2px solid red';
		user.style.boxShadow = '0 0 10px red';
		return;
	}

	if (pswrd.value.length == 0) {
		pswrd.style.border = '2px solid red';
		pswrd.style.boxShadow = '0 0 10px red';
		return;
	}

	for (let name of users) {
		if (user.value == name.user) {
			username = name.user;
			successA = true;
		}
	}

	for (let pass of users) {
		if (pswrd.value == pass.pswrd) {
			password = pass.pswrd;
			successB = true;
		}
	}

	if (successA == true && successB == true) {
		localStorage.setItem('isloged', 'true');
		window.location.href = 'home.html';
	} else if (successA == false) {
		user.style.border = '2px solid red';
		user.style.boxShadow = '0 0 10px red';
		localStorage.setItem('isloged', 'false');
	} else if (successB == false) {
		pswrd.style.border = '2px solid red';
		pswrd.style.boxShadow = '0 0 10px red';
		localStorage.setItem('isloged', 'false');
	}
});
