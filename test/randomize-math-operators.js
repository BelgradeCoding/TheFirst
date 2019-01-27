const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeMathOperators(stringArray));
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


test('Randomize math operators', function (t) {
    let testString = `
        var a = 2 + 5 + 1 + 2 + 3; // +013
    `;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 300);

    let testStrings = [
        `
        var a = 2 - 5 - 1 + 2 * 3; // +013
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0])),
        `possible test randomization:

        var a = 2 - 5 - 1 + 2 * 3; // +013
    `
    );
t.end();
});

