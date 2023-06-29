// Напишите функцию конвертер, которая на вход принимает стоимость покупки в евро и выводит результат в рублях
// 1 евро = 1.2 доллара,
// 1 доллар = 64 рубля.

const convertEurosToRubles = euro => euro * 1.2 * 64;

console.log('convertEurosToRubles: ', convertEurosToRubles(100));