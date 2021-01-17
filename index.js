// Code your solution here

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() == name.toLowerCase())
}

let fuzzyMatch = (drivers, word) => {
    return drivers.filter(driver => driver.startsWith(word))
} 

function matchName(drivers, name){
    return drivers.filter(driver => driver.name == name)
}