/* eslint-disable max-len */
'use strict';
// Методы объекта cart не должны обращаться к объекту по имени
// В объект cart добавьте сеттер setDiscount и свойство discount
// Сеттер setDiscount будет принимать promocode
// если promocode будет строка METHED, то в discount будет добавляться значение 15
// если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
// метод calculateItemPrice должен учитывать скидку равную процентному значению discount


{
  {
    const cart = {
      items: [], // товары
      count: 0, // количество товаров
      discount: 0, // скидка

      add(name, price, count = 1) { // добавить товар
        const newItemObj = {};

        newItemObj.name = name;
        newItemObj.price = price;
        newItemObj.count = count;
        newItemObj.totalPrice = newItemObj.price * newItemObj.count;

        this.items.push(newItemObj);

        this.calculateItemPrice();
        this.increaseCount(count);
      },

      increaseCount(n) { // увеличить количество товаров
        this.count += n;
      },

      calculateItemPrice() { // посчитать общую стоимость товаров
        return this.items.reduce((sum, item) => sum += item.totalPrice, 0) * (1 - this.discount);
      },

      get totalPrice() { // общая стоимость корзины
        return this.calculateItemPrice();
      },

      set setDiscount(promocode) {
        promocode === 'METHED' ?
          this.discount = .15 :
          promocode === 'NEWYEAR' ?
            this.discount = .21 :
            this.discount = 1;
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


    cart.print();

    cart.setDiscount = 'NEWYEAR';
    console.log('cart.discount: ', cart.discount);

    cart.print();
  }
}
