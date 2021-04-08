// 1 Задание
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};

const result = [
    `${Object.keys(citiesAndCountries)[0]} - это ${Object.values(citiesAndCountries)[0]}`,
    `${Object.keys(citiesAndCountries)[1]} - это ${Object.values(citiesAndCountries)[1]}`,
    `${Object.keys(citiesAndCountries)[2]} - это ${Object.values(citiesAndCountries)[2]}`,
    `${Object.keys(citiesAndCountries)[3]} - это ${Object.values(citiesAndCountries)[3]}`,
    `${Object.keys(citiesAndCountries)[4]} - это ${Object.values(citiesAndCountries)[4]}`,
    `${Object.keys(citiesAndCountries)[5]} - это ${Object.values(citiesAndCountries)[5]}`,
    `${Object.keys(citiesAndCountries)[6]} - это ${Object.values(citiesAndCountries)[6]}`
]

console.log(result)

// 2 Задание

function getArray(amount){
    let arrayA = [],
        arrayB = [];

    for (let i = 1; i <= amount; i++) {
        if (i % 3 == 0){
            arrayB.push(i)
            arrayA.push(arrayB)
            arrayB = []
        } else {
            arrayB.push(i)
        }
    }
    console.log(arrayA)
}

getArray(9)
getArray(12)

// 3 Задание

const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг' ,'Пятница', 'Суббота', 'Воскресенье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',  'Sunday'],
}

function getNameOfDay(lang, day){
    console.log(namesOfDays[lang][day - 1])
}

getNameOfDay('en', 7) /// 'Sunday'
getNameOfDay('ru', 3) /// 'Среда'

// 4 Задание
function getSumOfNum() {
    let array = [10, 800, 3453000, 8010, 4, 20.3, -50, 15.365],
        newArray = [],
        min = Infinity,
        secondMin = Infinity;

    for (let i = 0; i < array.length; i++) {
        if (Number.isInteger(array[i]) && array[i] >= 0){
            newArray.push(array[i])
        }
    }

    for (let i= 0; i< newArray.length; i++) {
        if (newArray[i] < min) {
            secondMin = min;
            min = newArray[i];
        } else if (newArray[i]< secondMin) {
            secondMin = newArray[i];
        }
    }

    console.log(min + secondMin)
}
getSumOfNum()

// 5 Задание
function binaryNumber(massive) {
    let degree = massive.length - 1,
        sum = 0;
    for (let i = 0; i < massive.length; i++) {
        sum += massive[i]*Math.pow(2, degree);
        degree--;
    }
    console.log('Testing: [' + massive + '] ==> ' + sum)
}
binaryNumber([0, 0, 0, 1])
binaryNumber([0, 0, 1, 0])
binaryNumber([0, 1, 0, 1])
binaryNumber([1, 0, 0, 1])
binaryNumber([0, 0, 1, 0])
binaryNumber([0, 1, 1, 0])
binaryNumber([1, 1, 1, 1])
binaryNumber([1, 0, 1, 1])

binaryNumber([1, 0, 0, 0, 1])
binaryNumber([1, 0, 0, 1, 0])
binaryNumber([1, 0, 1, 0, 1])
binaryNumber([1, 1, 1, 0, 0, 1])
