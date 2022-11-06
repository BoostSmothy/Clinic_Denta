document.getElementById('submit').onclick = function(){
    let username = document.getElementById('username').value;
    let password = document.getElementById('pwd').value;

    if (username == 'admin' && password == 'admin')
        document.location.href = "../user/user.html";

    else alert('Incorrect login or pass');

}