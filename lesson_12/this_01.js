/* eslint-disable max-len */
'use strict';
// Создать объект rectangle, который описывает ширину и высоту(свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника
// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"
// По умолчанию значения высоты и ширины заданы 5 см

{
  const rectangle = {
    _width: 5,
    _height: 5,

    set width(value) {
      if (typeof value === 'number') {
        this._width = value;
      }
    },

    set height(value) {
      if (typeof value === 'number') {
        this._height = value;
      }
    },

    get perimeter() {
      return `${2 * (this._width + this._height)}см`;
    },

    get area() {
      return `${this._width * this._height}кв.см`;
    },
  };

  console.log('rectangle.perimeter: ', rectangle.perimeter);
  console.log('rectangle.area: ', rectangle.area);

  rectangle.width = 13;
  rectangle.height = 13;

  console.log('rectangle.perimeter: ', rectangle.perimeter);
  console.log('rectangle.area: ', rectangle.area);
}
