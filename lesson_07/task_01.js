// Напишите функцию filter()
// функция принимает в параметрах 2 массива
// Первый массив — список всех студентов, второй — список студентов не сдавших экзамен.
// Результат функции: массив из всех студентов, которые сдали экзамен.

const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];


// ! Ответ к задаче в первой функции filter
// * Остальные как заметочку себе оставил, чтоб мог к ним вернуться при необходимости, а не час ломать себе голову, пытаясь отфильтровать верно
// * Тема с методами массивов мне почему-то туго даётся каждый раз

{// Находит неповторяющиеся элементы со вторым в первом массиве // filter + includes
	// ? filter берёт элемент из первого массива, потом includes ищет этот элемент во втором массиве, и, если элемент не находится, filter закидывает в результат этот неповторяющийся элемент
	const filter = ([...all], [...fail]) => all.filter(elem => !fail.includes(elem));
	console.log('Решение задачи / filter: ', filter(allStudents, failedStudents));

	// Находит повторяющиеся элементы со вторым в первом массиве // filter + includes
	const filter2 = ([...all], [...fail]) => all.filter(i => fail.includes(i));
	console.log('filter2: ', filter2(allStudents, failedStudents));


	// Находит неповторяющиеся элементы со вторым в первом массиве // filter + indexOf
	const filter3 = ([...all], [...fail]) => all.filter(i => fail.indexOf(i) === -1);
	console.log('filter3: ', filter3(allStudents, failedStudents));

	// Находит повторяющиеся элементы со вторым в первом массиве // filter + indexOf
	const filter4 = ([...all], [...fail]) => all.filter(i => fail.indexOf(i) >= 0);
	console.log('filter4: ', filter4(allStudents, failedStudents));
};




