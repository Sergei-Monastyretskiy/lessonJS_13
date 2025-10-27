console.log('#13. JavaScript homework example file')

/*
 * #1
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідною електронною адресою за допомогою регулярного виразу.
 * Функція повертає true, якщо електронна адреса валідна, і false в іншому випадку.
 *
 */

function isValidEmail(email) {
  // Проверяем тип данных
  if (typeof email !== 'string' || email === '') {
    return false;
  }

  // Комплексное регулярное выражение для email валидации:
  // - Локальная часть: начинается и заканчивается буквой/цифрой, может содержать точки, _, %, +, - внутри
  // - Одна @ 
  // - Домен: начинается буквой/цифрой, может содержать дефисы внутри, заканчивается буквой/цифрой
  // - Субдомены: аналогично домену
  // - TLD: только буквы, длина 2-5 символов
  // - Исключает двойные точки, точки/дефисы в начале/конце
  const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._%+-]*[a-zA-Z0-9])?@[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?(\.[a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?)*\.[a-zA-Z]{2,5}$/;

  // Дополнительная проверка на двойные точки (regex выше не может их полностью исключить)
  if (email.includes('..')) {
    return false;
  }

  return emailRegex.test(email);
}

// Тестові випадки
console.log(isValidEmail('example@example.com')) // Повинно вивести: true
console.log(isValidEmail('example.com'))        // Повинно вивести: false (немає @)
console.log(isValidEmail('example@'))           // Повинно вивести: false (немає домену)
console.log(isValidEmail('example@example.abcdef')) // Повинно вивести: false (довгий TLD)
console.log(isValidEmail('mail@.mail.com.ua'))  // Повинно вивести: false (крапка на початку домену)
console.log(isValidEmail(''))                   // Повинно вивести: false (пустий рядок)
console.log(isValidEmail(undefined))            // Повинно вивести: false (undefined)
console.log(isValidEmail('user@sub.domain.com')) // Повинно вивести: true (коректна адреса)
console.log(isValidEmail('u.ser+123@domain.org')) // Повинно вивести: true (допустимі символи)
console.log(isValidEmail('example@domain.c'))   // Повинно вивести: false (TLD занадто короткий)
console.log(isValidEmail('example@-domain.com')) // Повинно вивести: false (дефіс на початку домену)
console.log(isValidEmail('example@domain..com')) // Повинно вивести: false (подвійна крапка в домені)
console.log(isValidEmail('.example@domain.com')) // Повинно вивести: false (крапка на початку локальної частини)

/*
 * #2
 *
 * Написати функцію, яка приймає рядок як вхідний параметр і перевіряє, чи є цей рядок валідним URL веб-сайту за допомогою регулярного виразу.
 * Функція повертає true, якщо URL валідний, і false в іншому випадку.
 *
 */

/*

*/

function isValidUrl(url) {
  // Проверяем тип данных
  if (typeof url !== 'string' || url === '') {
    return false;
  }

  // Комплексное регулярное выражение для URL валидации:
  // - Обязательный протокол http:// или https://
  // - Опциональный www.
  // - Домен: буквы, цифры, точки, дефисы
  // - Обязательный TLD: только буквы, 2-6 символов
  // - Опциональный путь: буквы, цифры, точки, _, %, +, -, /
  const urlRegex = /^https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}(\/[a-zA-Z0-9._%+-]*)*\/?$/;

  return urlRegex.test(url);
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false

// Експорт функції для використання та тестування
export { isValidEmail, isValidUrl }
