// 1 Задание

    for (let i = 1; i <= 10; i++) {
        if (i % 3 == 0) {
            console.log('FizBuz')
        } else if (i % 2 == 0) {
            console.log('Fiz')
        } else {
            console.log('Buz')
        }
    }


// 2 Задание 

    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }
    console.log( factorial(10) );
    // 10! = 10⋅9⋅8⋅7⋅6⋅5⋅4⋅3⋅2⋅1 = 3628800
    // n! = n * (n - 1) * (n - 2) * ...*


// 3 Задание  

    const sheetsInReamPaper = 500;
    const consumptionPerWeek = 1200;
    const weeksAmount = 8;
    const packsOfPaper = Math.ceil((consumptionPerWeek * weeksAmount) / sheetsInReamPaper)
    console.log(packsOfPaper)


// 4 Задание 

    function apartmentSearch(roomsOnFloor, floors, roomNumber) {
        const apartmentsInTheEntrance = roomsOnFloor * floors;
        const porch = Math.ceil(roomNumber / apartmentsInTheEntrance);
        const floor = Math.ceil((roomNumber - ((porch - 1) * apartmentsInTheEntrance)) / roomsOnFloor);
        console.log(porch, floor)
    }
    apartmentSearch(3,9,456)


// 5 Задание  

function createCharacter(сharactersLength, numOfLattices) {
    let leftLatticesPoint = (сharactersLength - numOfLattices) / 2;
    let massive = [];

    for(let i = 0; i < сharactersLength; i++) {
        massive.push("-")
    }
    for(let i = 0; i < numOfLattices; i++) {
        massive[leftLatticesPoint + i] = "#"
    }

    console.log(massive.join(''))
}

function pyramid(medianNumber) {
    let сharacters = medianNumber * 2 - 1,
        Lattices = 1;
    for(let i = 0; i < medianNumber; i++) {
        createCharacter(сharacters, Lattices)
        Lattices = Lattices + 2;
    }
}
pyramid(6)
pyramid(8)

