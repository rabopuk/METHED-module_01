// Напишите функцию, которая принимает строку и возвращает модифицированную строку
// Строка начинается с большой буквы, остальные буквы маленькие
// Пример: "привет Мир" => "Привет мир"

const makeCapital = str => str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();

console.log('makeCapital: ', makeCapital('привет Мир'));