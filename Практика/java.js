// Кейс-задача № 2: Программа для работы с датой рождения
// Запрашиваем дату рождения у пользователя
function getUserBirthday() {
	let day = prompt('Введите день рождения (число):')
	let month = prompt('Введите месяц рождения (число):')
	let year = prompt('Введите год рождения (четыре цифры):')
	return { day: parseInt(day), month: parseInt(month), year: parseInt(year) }
}

// Определение дня недели
function getWeekday(day, month, year) {
	let date = new Date(year, month - 1, day)
	let weekdays = [
		'Воскресенье',
		'Понедельник',
		'Вторник',
		'Среда',
		'Четверг',
		'Пятница',
		'Суббота',
	]
	return weekdays[date.getDay()]
}

// Определение високосного года
function isLeapYear(year) {
	return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}

// Рассчет возраста пользователя
function getUserAge(year) {
	let currentYear = new Date().getFullYear()
	return currentYear - year
}

// Форматированное отображение даты звёздочками
function formatDateStars(day, month, year) {
	const starNumbers = {
		0: '***\n* *\n* *\n* *\n***',
		1: ' * \n** \n * \n * \n***',
		2: '***\n  *\n***\n*  \n***',
		3: '***\n  *\n***\n  *\n***',
		4: '* *\n* *\n***\n  *\n  *',
		5: '***\n*  \n***\n  *\n***',
		6: '***\n*  \n***\n* *\n***',
		7: '***\n  *\n  *\n  *\n  *',
		8: '***\n* *\n***\n* *\n***',
		9: '***\n* *\n***\n  *\n***',
	}
	let dateString = `${day.toString().padStart(2, '0')} ${month
		.toString()
		.padStart(2, '0')} ${year}`
	let result = ''
	for (let i = 0; i < 5; i++) {
		result +=
			dateString
				.split('')
				.map(num => (num === ' ' ? '   ' : starNumbers[num].split('\n')[i]))
				.join('  ') + '\n'
	}
	return result
}

// Основная функция
function main() {
	let { day, month, year } = getUserBirthday()
	console.log('День недели:', getWeekday(day, month, year))
	console.log('Високосный год:', isLeapYear(year) ? 'Да' : 'Нет')
	console.log('Возраст:', getUserAge(year), 'лет')
	console.log('Дата в формате звёздочек:')
	console.log(formatDateStars(day, month, year))
}

main()
