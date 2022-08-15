let login = prompt('Введите логин', '');
let password = '0';
if (login == 'admin') {
    password = prompt('Введите пароль', '');
    if (password == '123123') {
        alert('добро');
    }
    else {
        alert('fuck you');
    }
}
else {
    alert('хто ты');
}
