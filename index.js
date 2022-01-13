// Code your solution in this file!
//function1
const returnFirstTwoDrivers = function (drivers) {
    console.log('first two drivers');
    return drivers.slice(0, 2)
}
//function2
const returnLastTwoDrivers = function (drivers) {
    console.log('last two drivers');
    return drivers.slice(2, 4)
}

//function3
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
console.log('selecting drivers');


//function4- not passing?
function creatFareMultiplier(fare, number) {
    console.log('fare charge')
    return (fare, number) => (fare * number);
}

//function5
const fareDouble = createFareMultiplier(2);

//function6
const fareTriple = function() {
    return createFareMultiplier(fare, 3)
}

//function 7
function selectDifferentDrivers(drivers, selectingDrivers) {
    return [returnFirstTwoDrivers, returnLastTwoDrivers];
}
