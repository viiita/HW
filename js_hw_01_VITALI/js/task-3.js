

const ADMIN_PASSWORD = 'adminpass'; 
let message;

let userName = prompt('Введите пароль');

if(userName === null) {
    message = 'Отменено пользователем!';
} else if (userName === ADMIN_PASSWORD){
    message = 'Добро пожаловать!';
} else {message = 'Доступ запрещен, неверный пароль!';}

alert(message);


//  Задание 3
// Напиши скрипт имитирующий авторизацию администратора в панели управления.
// Есть переменная message в которую будет записано сообщение о результате. 
//  загрузке страницы у посетителя запрашивается пароль через prompt: 
//   Если нажали Cancel, записать в message строку 'Отмевателемнено пользо!' 
//   В протовном случае, если введен пароль который совпадает со 
//   значением константы ADMIN_PASSWORD, записать в message строку 'Добро пожаловать!' 
//   В противном случае, то есть если ни одно из предыдущих условий не выполнилось, 
//   записать в message строку 'Доступ запрещен, неверный пароль!' 
//   После всех проверок вывести в alert значение переменной
//  message. const ADMIN_PASSWORD = 'adminpass'; let message; 