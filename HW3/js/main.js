// 1 Задание
function Emploee(employee) {
        this.id = employee.id;
        this.name = employee.name;
        this.surname = employee.surname;
        this.salary = employee.salary;
        this.workExperience = employee.workExperience;
        this.isPrivileges = employee.isPrivileges;
        this.gender = employee.gender;
}

const employeeObj = new Emploee(emplyeeArr[0]);
console.log(employeeObj)

// 2 Задание
Emploee.prototype.getFullName = function () {
         return `${this.surname}  ${this.name}`;
}
console.log(employeeObj.getFullName());

// 3 Задание
let createEmployesFromArr = (arr) => {
        let users = [];

        for(let i = 0; i < arr.length; i++) {
                users[i] = new Emploee(arr[i]);
        }

        return users;
};
const emplyeeConstructArr = createEmployesFromArr(emplyeeArr)
console.log(emplyeeConstructArr)

// 4 Задание
const getFullNamesFromArr = (arr) => {
        let fullNames = [];

        for(let i = 0; i < arr.length; i++) {
                fullNames[i] = arr[i].name + " " + arr[i].surname;
        }

        return fullNames;
}

console.log(getFullNamesFromArr(emplyeeConstructArr))

// 5 Задание
const getMiddleSalary = (arr) => {
        let SumOfSalaries = 0,
            salariesLength = arr.length;

        for(let i = 0; i < arr.length; i++) {
                SumOfSalaries += arr[i].salary;
        }

        const averageSalary = SumOfSalaries / salariesLength;

        return averageSalary;
}

console.log(getMiddleSalary(emplyeeConstructArr))

// 6 Задание
const getRandomEmployee = (arr) => {
        let casualWorker = arr[Math.floor(Math.random() * arr.length)];

        return casualWorker;
}

console.log(getRandomEmployee(emplyeeConstructArr))

// 7 Задание
Object.defineProperty(employeeObj, 'fullInfo', {
        get: function() {

                let object_keys = Object.keys(this),
                    properties = '';

                for (var i = 0; i < object_keys.length; i++) {
                        if(i == object_keys.length -1) {
                                properties += object_keys[i] + ' - ' + this[object_keys[i]];
                        } else {
                                properties += object_keys[i] + ' - ' + this[object_keys[i]] + ', ';
                        }
                }
                return properties;
        },
        set: function (value) {
                let value_keys = Object.keys(value);

                for (var i = 0; i < value_keys.length; i++) {
                        if(this[value_keys[i]]) {
                                this[value_keys[i]] = value[value_keys[i]];
                        }
                }
        }
})
console.log(employeeObj.fullInfo)
employeeObj.fullInfo = {name: 'Вася', salary: 9000, email: 'ex@mail.ua'}
console.log(employeeObj)