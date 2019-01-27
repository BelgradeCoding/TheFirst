const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeRows(stringArray));
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


test('Randomize rows', function (t) {
    let testString = `
        var a; // # r0
        var b; // # r0
        var c; // # r0
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var a; // # r0
        var c; // # r0
        var b; // # r0
        `,
        `
        var c; // # r0
        var a; // # r0
        var b; // # r0
        `,
        `
        var c; // # r0
        var b; // # r0
        var a; // # r0
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        `possible test randomizations:

        var a; // # r0
        var c; // # r0
        var b; // # r0

        var c; // # r0
        var a; // # r0
        var b; // # r0

        var c; // # r0
        var b; // # r0
        var a; // # r0
    `
    );
t.end();
});

