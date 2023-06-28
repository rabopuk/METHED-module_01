// * Вторая задача
// ✔ Создайте константу rain
// ✔ С помощью Math.Random и Math.round напишите выражение, которое будет возвращать 1 или 0
// ✔ Далее используя условную конструкцию выведите сообщение,
// если rain = 1
// Пошёл дождь.Возьмите зонт!
// если rain = 0
// Дождя нет!

const rain = Math.round(Math.random());

console.log('rain: ', rain);
console.log(rain ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');


// * Третья задача
// ✔ Артур хочет поступить на бюджет в институт, для этого ему нужно хорошо сдать три экзамена и набрать минимум 265 баллов.
// ✔ Напишите программу, которая запрашивает у пользователя(prompt) результаты экзаменов по трём направлениям и проверяет, поступил он в институт или нет.
// Пример:
// Введите кол - во баллов по математике: 85
// Введите кол - во баллов по русскому языку: 75
// Введите кол - во баллов по информатике: 95
// Поздравляю, вы поступили на бюджет!

const cap = 265,
	firstScore = +prompt('Введите кол-во баллов по математике:', 0),
	secondScore = +prompt('Введите кол-во баллов по русскому языку', 0),
	thirdScore = +prompt('Введите кол-во баллов по информатике:', 0);

alert(cap < firstScore + secondScore + thirdScore ? 'Поздравляю, вы поступили на бюджет!' : 'Сочувствую, братан(((');

console.log(cap < firstScore + secondScore + thirdScore ? 'Поздравляю, вы поступили на бюджет!' : 'Сочувствую, братан(((');


// * Четвёртая задача
// ✔ Вам необходимо написать программу для банкомата, который может выдавать минимальные купюры 100р
// ✔ Владимир хочет снять деньги в банкомате, с помощью prompt спросите сколько денег он хочет снять
// ✔ Ваша программа должна проверить, сможет ли банкомат выдать сумму, которую запросил Владимир
// ✔ Выведите сообщение в консоль

const res = +prompt('Сколько денег вы хотите снять (₽)?', 0);

alert(
	res % 100
		? `Банкомат может выдать вам ${res - res % 100}₽ из ваших ${res}₽`
		: `Банкомат может выдать вам всю сумму: ${res}₽`
);

console.log(
	res % 100
		? `Банкомат может выдать вам ${res - res % 100}₽ из ваших ${res}₽`
		: `Банкомат может выдать вам всю сумму: ${res}₽`
);