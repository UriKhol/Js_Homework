// 1 задание
const arr = ['Vasya', 'Petya', 'Alexey']

function removeUser(array, index) {
    array.splice(index, 1);
}
removeUser(arr, 1)
console.log(arr) /// ['Vasya', 'Alexey']

// 2 задание
const obj = { name: 'Vasya', age: 1}

function getAllKeys(object) {
    let keys = [];

    for(let [key] of Object.entries(object)) {
        keys.push(key);
    }

    return keys;
}

console.log(getAllKeys(obj)); /// ["name", "age"]

// 3 задание
function getAllValues(object) {
    let values = [];

    for(let [key, value] of Object.entries(object)) {
        values.push(value);
    }

    return values;
}
console.log(getAllValues(obj)); /// ["Vasya", 1]

// 4 задание

const obj1 = {
    id: 3,
    name: 'Vasya'
}

const secondObj = {
    id: 4,
    name: 'Katya'
}

const arr1 = [
    {
        id: 1,
        name: 'Kolya'
    },
    {
        id: 2,
        name: 'Petya'
    },
];
function insertIntoarr(candidate, index) {
    let indexOfPrevCandidate = arr1.indexOf(arr1.find(item => item.id === index))
    arr1.splice(indexOfPrevCandidate, 0, candidate);
}
insertIntoarr(obj1, 2)
console.log(arr1)

insertIntoarr(secondObj, 1)
console.log(arr1)

// 5 задание

// 1 вариант
// function Condidate(object) {
//     Object.assign(this, object)
//
//     Object.defineProperty(this, 'state', {
//         get: function() {
//            console.log(this.address.split(',')[2])
//         },
//
//     });
// }

// 2 вариант
class Condidate {
    constructor(object) {
        Object.assign(this, object)
    }

    get state() {
        console.log(this.address.split(',')[2])
    }
}

const condidate = new Condidate(condidateArr[0])
condidate.state /// Colorado

// 6 задание
function getCompanyNames() {
    let companys = [];
    condidateArr.forEach(function(obj) {
        if(companys.indexOf(obj.company) == -1) {
            companys.push(obj.company)
        }
    });
    console.log(companys);
}
getCompanyNames()

// 7 задание
function getUsersByYear(year) {
    let candidatsID = [];
    condidateArr.forEach(function(obj) {
        let registeredYear = new Date(obj.registered).getFullYear();
        if(registeredYear == year) {
            candidatsID.push(obj._id)
        }
    });
    console.log(candidatsID);
}
getUsersByYear(2017)

// 8 задание
function getCondidatesByUnreadMsg(value) {
    let candidats = [];
    condidateArr.forEach(function(obj) {
        let greetingNum = obj.greeting.match(/\d+/g);
        if(greetingNum[0] == value) {
            candidats.push(obj)
        }
    });
    console.log(candidats);
}
getCondidatesByUnreadMsg(8)

// 9 задание
function getCondidatesByGender(value) {
    let sameGender = [];
    condidateArr.forEach(function(obj) {
        if(obj.gender == value) {
            sameGender.push(obj)
        }
    });
    console.log(sameGender);
}
getCondidatesByGender('male')

// 10 задание

// custom reduce function
const massive = [1,2,3,4,5]

const sumReducer = (initialValue, current) => initialValue + current;

const reduce = (reducer, initialValue, array) => {
    let value = initialValue;

    for(let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        value = reducer(value, currentValue)
    }

    return value;
}

const sumOfNumbersCustom = reduce(sumReducer, 0, massive)

console.log(sumOfNumbersCustom);

// custom join function
let names = ["Joe", "Kevin", "Peter"];

const join = (array, separator) => {
    let string = '';

    if(separator == undefined ) separator = ',';

    for(let i = 0; i < array.length; i++) {
        string += array.length - 1 != i ? array[i] + separator : array[i];
    }

    return string;
}
const customJoinFunc = join(names, '-')
console.log(customJoinFunc)