// 1 Задание
const studentsArr = [{
    name: 'Сергей',
    surname: 'Войлов',
    ratingPoint: 880,
    schoolPoint: 1000,
    course: 2,
},
    {
        name: 'Татьяна',
        surname: 'Коваленко',
        ratingPoint: 880,
        schoolPoint: 700,
        course: 1,
    },
    {
        name: 'Анна',
        surname: 'Кугир',
        ratingPoint: 1430,
        schoolPoint: 1200,
        course: 3,
    },
    {
        name: 'Станислав',
        surname: 'Щелоков',
        ratingPoint: 1130,
        schoolPoint: 1060,
        course: 2,
    },
    {
        name: 'Денис',
        surname: 'Хрущ',
        ratingPoint: 1000,
        schoolPoint: 990,
        course: 4,
    },
    {
        name: 'Татьяна',
        surname: 'Капустник',
        ratingPoint: 880,
        schoolPoint: 500,
        course: 3,
    },
    {
        name: 'Максим',
        surname: 'Меженский',
        ratingPoint: 880,
        schoolPoint: 1100,
        course: 1,
    },
    {
        name: 'Денис',
        surname: 'Марченко',
        ratingPoint: 570,
        schoolPoint: 1300,
        course: 4,
    },
    {
        name: 'Антон',
        surname: 'Завадский',
        ratingPoint: 1090,
        schoolPoint: 1010,
        course: 3
    },
    {
        name: 'Игорь',
        surname: 'Куштым',
        ratingPoint: 870,
        schoolPoint: 790,
        course: 1,
    },
    {
        name: 'Инна',
        surname: 'Скакунова',
        ratingPoint: 1560,
        schoolPoint: 200,
        course: 2,
    },
];

class Student {

    static listOfStudents = [];

    constructor(enrollee) {
        this.id = Student.listOfStudents.length + 1;
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;

        if (enrollee.ratingPoint >= 800) {
            let LimitOfBudgetPlaces = 5,
                budgetPlaces = 0;

            for (let i = 0; i < Student.listOfStudents.length; i++) {
                if (Student.listOfStudents[i].isSelfPayment == false) {
                    budgetPlaces++
                }
            }

            if (LimitOfBudgetPlaces > budgetPlaces) {
                this.isSelfPayment = false;
            } else {
                let competitors = [];

                for (let i = 0; i < Student.listOfStudents.length; i++) {
                    if (Student.listOfStudents[i].ratingPoint <= this.ratingPoint && Student.listOfStudents[i].isSelfPayment == false) {
                        competitors[competitors.length] = Student.listOfStudents[i];
                    }
                }

                if (competitors.length == 0) {
                    this.isSelfPayment = true;
                } else {
                    let loserRatingPoint = competitors[0];

                    for (let i = 0; i < competitors.length; i++) {

                        if (competitors[i].ratingPoint < loserRatingPoint.ratingPoint) {
                            loserRatingPoint = competitors[i];
                        }
                    }

                    let severalLosers = [];

                    for (let i = 0; i < competitors.length; i++) {
                        if (competitors[i].ratingPoint == loserRatingPoint.ratingPoint) {
                            severalLosers[severalLosers.length] = competitors[i];
                        }
                    }

                    if (severalLosers.length == 1) {
                        this.isSelfPayment = false;

                        for (let i = 0; i < Student.listOfStudents.length; i++) {
                            if (Student.listOfStudents[i].id == loserRatingPoint.id) {
                                Student.listOfStudents[i].isSelfPayment = true;
                            }
                        }

                    } else {
                        this.isSelfPayment = false;

                        let loserSchoolPoint = severalLosers[0]

                        for (let i = 0; i < severalLosers.length; i++) {
                            if (severalLosers[i].schoolPoint < loserSchoolPoint.schoolPoint) {
                                loserSchoolPoint = severalLosers[i];
                            }
                        }


                        for (let i = 0; i < Student.listOfStudents.length; i++) {
                            if (Student.listOfStudents[i].id == loserSchoolPoint.id) {
                                Student.listOfStudents[i].isSelfPayment = true;
                            }
                        }
                    }

                }

            }
        } else {
            this.isSelfPayment = true;
        }

        Student.listOfStudents[Student.listOfStudents.length] = this;
    }
}

console.log(Student.listOfStudents)

new Student(studentsArr[0])
// console.log(Student.listOfStudents)

new Student(studentsArr[1])
// console.log(Student.listOfStudents)

new Student(studentsArr[2])
// console.log(Student.listOfStudents)

new Student(studentsArr[3])
// console.log(Student.listOfStudents)

new Student(studentsArr[4])
// console.log(Student.listOfStudents)

new Student(studentsArr[5])
// console.log(Student.listOfStudents)

new Student(studentsArr[6])
// console.log(Student.listOfStudents)

new Student(studentsArr[7])
// console.log(Student.listOfStudents)


// 2 Задание
class CustomString {
    reverse(value) {
        return value.split("").reverse().join("");

    }

    ucFirst(value) {
        return value[0].toUpperCase() + value.slice(1);
    }

    ucWords(value) {
        return value.replace(/(^|\s)\S/g, function (a) {
            return a.toUpperCase()
        })
    }
}

let myString = new CustomString();
console.log(myString.reverse('qwerty'))
console.log(myString.ucFirst('qwerty'))
console.log(myString.ucWords('qwerty qwerty qwerty'))

// 3 Задание
class Validator {
    checkIsEmail(value) {
        if (/@gmail\.com$/.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    checkIsDomain(value) {
        if (/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:.(com))+$/.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    checkIsDate(value) {
        let arrD = value.split(".");
        arrD[1] -= 1;
        let d = new Date(arrD[2], arrD[1], arrD[0]);
        if ((d.getFullYear() == arrD[2]) && (d.getMonth() == arrD[1]) && (d.getDate() == arrD[0])) {
            return true;
        } else {
            return false;
        }
    }

    checkIsPhone(value) {
        let result = value.replace(/[- )(]/g, '');

        if (result.substr(0, 4) == '+380') {
            return true;
        } else {
            return false;
        }
    }
}

let validator = new Validator();

console.log(validator.checkIsEmail('vasya.pupkin@gmail.com')); // true
console.log(validator.checkIsDomain('google.com')); // true
console.log(validator.checkIsDate('30.11.2019')); // true
console.log(validator.checkIsPhone('+38 (066) 937-99-92')); // если код страны Украинский, то возвращаем true иначе false