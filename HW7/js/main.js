// Task 1
const searchCandidatesByPhoneNumber = phone => {
    let CandidatesByPhoneNumber = [];
    condidateArr.forEach(obj => {if (obj.phone.indexOf(phone) != -1) CandidatesByPhoneNumber.push(obj)});
    return CandidatesByPhoneNumber;
}
console.log(searchCandidatesByPhoneNumber('43'));

// Task 2
const getCandidateById = id => {
    let candidate = condidateArr.find(candidate => candidate._id == id),
        registered = new Date(candidate.registered),
        newFormatOfRegistered = registered.toLocaleDateString("en-GB", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        });

    candidate.registered = newFormatOfRegistered;
    return candidate;
}
console.log(getCandidateById('5e216bc9a6059760578aefa4'));

// Task 3
const sortCandidatesArr = sortBy => {
    let newArray;

    switch (sortBy) {
        case 'asc':
            newArray = condidateArr.sort((a, b) => a.balance.replace(/[$,.]/g, '') - b.balance.replace(/[$,.]/g, ''));
            break
        case 'desc':
            newArray = condidateArr.sort((a, b) => b.balance.replace(/[$,.]/g, '') - a.balance.replace(/[$,.]/g, ''));
            break
        case undefined:
            newArray = condidateArr;
            break
    }
    return newArray;
}
console.log(sortCandidatesArr());

// Task 4
const getEyeColorMap = () => {
    let array = {};
    condidateArr.forEach(obj => {let color = obj.eyeColor; array[color] == undefined ? array[color] = [obj] : array[color].push(obj);});
    return array;
}
console.log(getEyeColorMap());