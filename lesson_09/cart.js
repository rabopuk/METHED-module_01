'use strict';
// Создайте объект cart — корзина
// Объект будет содержать следующие свойства:
// items = пустой массив - это товары
// totalPrice = 0 - общая стоимость корзины
// count = 0 - количество товаров
// и методы
// getTotalPrice - получить общую стоимость товаров
// add - добавить товар
// increaseCount - увеличить количество товаров
// calculateItemPrice - посчитать общую стоимость товаров
// clear - очистить корзину
// print - распечатать корзину
// Далее описание каждого метода
// getTotalPrice()
// метод возвращает значение свойства totalPrice
// calculateItemPrice()
// пересчитывает стоимость всей корзины используя метод reduce и записывает значение в totalPrice
// increaseCount()
// Принимает один параметр(число)
// Увеличивает свойство count на это число
// add()
// Принимает три параметра:
// название товара
// цену товара
// количество товара(опциональный параметр, по умолчанию 1 товар)
// этот метод формирует объект из полученных параметров и добавляет его в свойство items
// так же вызывает все необходимые методы чтобы свойства count и totalPrice были актуальные
// clear()
// Очищает полностью нашу корзину, возвращает все значения в изначальные
// print()
// Выводит в консоль JSON строку из массива items и на следующей строке выводит общую стоимость корзины
// Для проверки работы функционала добавить 3 или более товаров в корзину
// После вызвать метод print для вывода информации в консоль

{
	const cart = {
		items: [], // товары
		totalPrice: 0, // общая стоимость корзины
		count: 0, // количество товаров

		getTotalPrice() { // получить общую стоимость товаров
			return this.totalPrice;
		},

		add(name, price, count = 1) { // добавить товар
			const newItemObj = {};

			newItemObj.name = name;
			newItemObj.price = price;
			newItemObj.count = count;
			newItemObj.totalPrice = newItemObj.price * newItemObj.count; // * без введения этого свойства мне было трудно догадаться как решить задание

			this.items.push(newItemObj);

			this.calculateItemPrice();
			this.increaseCount(count);
		},

		increaseCount(n) { // увеличить количество товаров
			this.count += n;
		},

		calculateItemPrice() { // посчитать общую стоимость товаров
			this.totalPrice = this.items.reduce((sum, item) => sum += item.totalPrice, 0);
			// console.log('this.totalPrice: ', this.totalPrice);
		},

		clear() { // очистить корзину
			this.items = [];
			this.totalPrice = 0;
			this.count = 0;
		},

		print() { // распечатать корзину
			console.log(JSON.stringify(this.items));
			console.log(this.totalPrice);
		},
	};

	cart.add('мышь', 1300);
	cart.add('клавиатура', 2600, 2);
	cart.add('наушники', 2000, 5);

	const totalPrice = cart.getTotalPrice();
	console.log('totalPrice: ', totalPrice);

	cart.print();

	console.log('cart.count: ', cart.count);

	cart.clear();
	console.log('cart: ', cart);
};