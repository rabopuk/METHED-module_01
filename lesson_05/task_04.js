// Напишите функцию calculate(), которая вычисляет стоимость корзины товаров после применения всех акций и скидок.
// В качестве аргументов функция принимает 3 параметра:
// Общая сумма корзины
// Количество товаров в корзине
// Промокод
// Правила и порядок(порядок важен!) начисления скидок:
// Если товаров больше 10, то ко всей сумме применяется скидка 3 % ко всей сумме;
// При сумме, превышающей 30 000, применяется скидка 15 % к сумме превышения
// Если промокод равен "METHED", то скидка 10 %
// 	Если промокод равен "G3H2Z1", то скидка 500 рублей, но только если сумма  корзины после предыдущих скидок превышает 2000р
// Порядок применения скидок должен соблюдаться
// Каждая последующая скидка учитывает применение предыдущих

const calculate = (total, count, promo) => {
	let discount = 0,
		totalAfterDiscount = total;

	if (count > 10) {
		discount = .03;
		totalAfterDiscount = totalAfterDiscount * (1 - discount);
		// console.log('totalAfterDiscount: ', totalAfterDiscount);
	}

	if (total > 30000) {
		discount = .15;
		totalAfterDiscount = totalAfterDiscount - (total - 30000) * discount;
		// console.log('totalAfterDiscount: ', totalAfterDiscount);
	}

	if (promo === 'METHED') {
		discount = .1;
		totalAfterDiscount = totalAfterDiscount * (1 - discount);
		// console.log('totalAfterDiscount: ', totalAfterDiscount);
	}

	if (promo === 'G3H2Z1' && totalAfterDiscount > 2000) {
		totalAfterDiscount = totalAfterDiscount - 500;
		// console.log('totalAfterDiscount: ', totalAfterDiscount);
	}

	return totalAfterDiscount;
};

console.log('calculate: ', calculate(35000, 15, 'METHED'));