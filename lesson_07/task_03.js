'use strict';
// Напишите функцию addPrefix
// Функция получает массив в виде параметров и возвращает массив с префиксами
// После префикса пробел добавляется автоматически
// Вызов функции:
// addPrefix(names, 'Mr')
// Результат функции:
// ['Mr Noah', 'Mr Liam', 'Mr Mason', 'Mr Jacob', 'Mr. Robot', 'Mr William', 'Mr Ethan', 'Mr Michael', 'Mr Alexander'];

{
	const names = ['Noah', 'Liam', 'Mason', 'Jacob', 'Robot', 'William', 'Ethan', 'Michael', 'Alexander'];

	const addPrefix = ([...arr], str) => arr.map(el => str + ' ' + el);

	console.log('addPrefix: ', addPrefix(names, 'Mr'));
};