const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.shuffleArrayElements(stringArray));
    }
    return returns;
}

function deepInclude(array1, object) {
    for (const element of array1) {
        if (equal(element, object)) {
            return true;
        }
    }
    return false;
}


test('Add custom inline function', function (t) {
    let testString = `
        var niz=[2,9,15,23]; // []
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var niz=[9,2,23,15]; // []
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0])),
        `possible test randomization:

        var niz=[9,2,23,15]; // []
    `
    );
t.end();
});

