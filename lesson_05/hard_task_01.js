'use strict';
// Напишите функцию, вычисляющую наибольший общий делитель двух чисел

{
	const gcd = (x, y) => {
		if (y !== 0) {
			const z = x % y;
			// console.log('z: ', z);

			// Тут пришлось подглядывать в интернет, никак не мог докрутить идею после остатка от деления)
			return gcd(y, z);
		}
		return x;
	};

	console.log('gcd: ', gcd(35, 65));
};