'use strict';
// Напишите функцию, которая принимает строку и возвращает обратную строку
// Пример: "Привет мир" => "рим тевирП"

{
	const revertStr = str => str.split('').reverse().join('');

	console.log('revertStr: ', revertStr('Привет мир'));
};