// * Вторая задача
const rain = Math.round(Math.random());

console.log('rain: ', rain);
console.log(rain ? 'Пошёл дождь. Возьмите зонт!' : 'Дождя нет!');


// * Третья задача
const cap = 265,
	firstScore = +prompt('Введите кол-во баллов по математике:', 0),
	secondScore = +prompt('Введите кол-во баллов по русскому языку', 0),
	thirdScore = +prompt('Введите кол-во баллов по информатике:', 0);

alert(cap < firstScore + secondScore + thirdScore ? 'Поздравляю, вы поступили на бюджет!' : 'Сочувствую, братан(((');

console.log(cap < firstScore + secondScore + thirdScore ? 'Поздравляю, вы поступили на бюджет!' : 'Сочувствую, братан(((');


// * Четвёртая задача
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