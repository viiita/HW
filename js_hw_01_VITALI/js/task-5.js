
// Виталий Говенько//




let countri = prompt(`Введите название страны`);

 if(countri!==null) {
   countri = countri.toLowerCase();
 }

let prise;

let error = console.log('В вашей стране доставка не доступна');


switch (countri) {
  case ('китай'):
    prise = '150 кредитов';
    break; 

  case ('чили'):
    prise = '150 кредитов';
    break;

  case ('австралия'):
    prise = '150 кредитов';
    break;

  case ('индия'):
    prise = '150 кредитов';
    break;

  case ('ямайка'):
    prise = '150 кредитов';
    break;

  default:
    prise = -1;
    error;
   // console.log("В вашей стране доставка не доступна");
  }

  if (prise !== -1) {
    countri = countri.charAt(0).toUpperCase() + countri.slice(1);
   console.log(`Доставка в ${countri} будет стоить ${prise}`);
 
} 
      console.log("В вашей стране доставка не доступна");


  



/* Задание 5
Пользователь может оформить доставку товара к себе в страну, 
указав ее при посещении страницы в prompt. 
Учти, пользователь может ввести имя страны не только буквами нижнего регистра, 
а к примеру 'кИтАЙ'.
Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну. 
Обязательно используй switch. Формат сообщения: 'Доставка в [страна] будет стоить [цена] кредитов'. 
Но доставка есть не везде, если указанной страны нет в списке, 
то выводи в alert сообщение 'В вашей стране доставка не доступна'.
Ниже приведен список стран и стоимость доставки.
Китай - 150 кредитов Чили - 250 кредитов Австралия - 165 кредитов 
Индия - 90 кредитов Ямайка - 130 кредитов
 */