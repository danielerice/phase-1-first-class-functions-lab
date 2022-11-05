const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (driverArray){
    return driverArray.slice(0,2);
}
const returnLastTwoDrivers =function (driverArray){
    return driverArray.slice(driverArray.length-2);
}
let selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(x){ 
    return function fareMultiplier(number){
            return number*x
    }
}

const fareTripler = createFareMultiplier(3)
const fareDoubler = createFareMultiplier(2)

function selectDifferentDrivers(drivers, someFunction){
   return someFunction(drivers);
}