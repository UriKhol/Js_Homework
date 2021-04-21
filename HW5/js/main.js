// 1 Задание
function findSum() {
    let sum = 0;

    return function(value) {
        return sum += value;
    };
}
let counter = findSum()
console.log(counter(3)); // 3
console.log(counter(5)); // 8
console.log(counter(228)); // 236

// 2 Задание
function pushToArray() {
    let array = [];

    return function(value) {
        value != undefined ? array.push(value) : array = [];
        return array
    };
}

let getUpdatedArr = pushToArray()
console.log(getUpdatedArr(3)); // [3]
console.log(getUpdatedArr(5)); // [3, 5]
console.log(getUpdatedArr({name: 'Vasya'})); // [3, 5, {name: 'Vasya'}]
console.log(getUpdatedArr()); // []
console.log(getUpdatedArr(4)); // [4]

// 3 Задание
function timeCount() {
    let firstInitTime,
        firstInit = true;
    return function () {
        if(firstInit) {
            firstInitTime = new Date().getTime();
            firstInit = false;
            return "Enabled";
        } else {
            return (new Date().getTime() - firstInitTime) / 1000;
        }
    }
   }
let getTime = timeCount();

// 4 Задание
const timer = (time => {
    let min, sec;

    return function (time) {
        min = Math.floor(time/60),
        sec = time - (min * 60);

        function frontZero(value) {
            return value < 10 ? '0' + value : value;
        }

        function  countSeconds(){
            if(sec > 0) {
                sec--
            } else if(sec == 0) {
                min--;
                sec = 59;
            }

            if(min <= 0 && sec <= 0) {
                clearInterval(getCountSeconds);
                console.log('Time End');
            } else {
                console.log(frontZero(min) + ':' +  frontZero(sec));
            }
        }

        console.log(frontZero(min) + ':' +  frontZero(sec));

        let getCountSeconds = setInterval(countSeconds, 1000);
    }
})()

timer(120)





