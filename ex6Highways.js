const northCity = {
    name: "Gdansk",
}

const capitalCity = {
    name: "Warsaw"
}

const southCity = {
    name: "Cracow",
}

const westCity = {
    name: "Poznan",
}

// Connect Gdańsk to Warsaw
const northAndCapitalRoute = getNewHighways(northCity, capitalCity);
northCity.highways = northAndCapitalRoute.cityOneHighways;
capitalCity.highways = northAndCapitalRoute.cityTwoHighways;

// Connect Warsaw to Cracow
const capitalAndSouthRoute = getNewHighways(capitalCity, southCity);
capitalCity.highways = capitalAndSouthRoute.cityOneHighways;
southCity.highways = capitalAndSouthRoute.cityTwoHighways;

// Connect Cracow to Poznań
const southCityAndWestCityRoute = getNewHighways(southCity, westCity);
southCity.highways = southCityAndWestCityRoute.cityOneHighways;
westCity.highways = southCityAndWestCityRoute.cityTwoHighways;

// Connect Poznań to Gdańsk
const westAndNorthRoute = getNewHighways(westCity, northCity);
westCity.highways = westAndNorthRoute.cityOneHighways;
northCity.highways = westAndNorthRoute.cityTwoHighways;

console.log(getNewHighways(northCity, capitalCity))
console.log(isThereADirectWayBetweenCities(northCity, westCity)) // true
console.log(isThereADirectWayBetweenCities(capitalCity, southCity)) // true
console.log(isThereADirectWayBetweenCities(southCity, capitalCity)) // true
console.log(isThereADirectWayBetweenCities(westCity, capitalCity)) // false

function getNewHighways(inputCityOne, inputCityTwo) {
    return {
        cityOneHighways : {
            [inputCityOne.name]: {
                name: inputCityOne.name,
                highways: {}
            }
        },
        cityTwoHighways : {
            [inputCityTwo]: {
                name: inputCityTwo.name,
                highways: {}
            }
        },
    }
}


//function isThereADirectWayBetweenCities(inputCityOne, inputCityTwo) {
