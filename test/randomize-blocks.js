const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeBlocks(stringArray));
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


test('Randomize blocks', function (t) {
    let testString = `
        var a; // # b0-0
        var b; // # b1-0
        var c;
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 100);

    let testStrings = [
        `
        var b; // # b1-0
        var c; 
        var a; // # b0-0
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0])),
        `possible test randomization:

        var b; // # b1-0
        var c;
        var a; // # b0-0
    `
    );
t.end();
});

