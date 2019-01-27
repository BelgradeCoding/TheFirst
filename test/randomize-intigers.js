const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeIntigers(stringArray));
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

test('Randomize intigers', function (t) {
    let testString = `
        var a = 000;
        var b = 000;
        `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var a = 1;
        var b = 2;
        `,
        `
        var a = 8;
        var b = 5;
        `,
        `
        var a = 7;
        var b = 8;
        `,
        `
        var a = 7;
        var b = 7;
        `,
        `
        var a = 8;
        var b = 8;
        `,
        `
        var a = 1;
        var b = 1;
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        `different numbers:
    var a = 000;
    var b = 000;
    `
    );
    t.true((deepInclude(testArray, testStrings[3]) || deepInclude(testArray, testStrings[4]) ||
        deepInclude(testArray, testStrings[5])),
        `same numbers:
    var a = 000;
    var b = 000;
    `
    );
    t.end();
});

test('Randomize intigers', function (t) {
    let testString = `
        var a = 000 + 000;
        `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var a = 1 + 2;
        `,
        `
        var a = 8 + 6;
        `,
        `
        var a = 7 + 4;
        `,
        `
        var a = 7 + 7;
        `,
        `
        var a = 8 + 8;
        `,
        `
        var a = 1 + 1;
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        `possible test randomization:
        var a = 8 + 6;
    `
    );
    t.true((deepInclude(testArray, testStrings[3]) || deepInclude(testArray, testStrings[4]) ||
        deepInclude(testArray, testStrings[5])),
        `possible test randomization:
        var a = 1 + 1;
    `
    );
    t.end();
});

test('Randomize intigers', function (t) {
    let testString = `
        var a = ('"000" + (000)');
        `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var a = ('"2" + (1)');
        `,
        `
        var a = ('"2" + (3)');
        `,
        `
        var a = ('"2" + (9)');
        `,
        `
        var a = ('"2" + (2)');
        `,
        `
        var a = ('"1" + (1)');
        `,
        `
        var a = ('"7" + (7)');
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        `possible test randomization:
        var a = ('"2" + (9)');
    `
    );
    t.true((deepInclude(testArray, testStrings[3]) || deepInclude(testArray, testStrings[4]) ||
        deepInclude(testArray, testStrings[5])),
        `possible test randomization:
        var a = ('"7" + (7)');
    `
    );
    t.end();
});

test('Randomize intigers', function (t) {
    let testString = `
        var a = 000 + 000; // [] # p1
        `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        var a = 1 + 2; // [] # p1
        `,
        `
        var a = 8 + 6; // [] # p1
        `,
        `
        var a = 7 + 4; // [] # p1
        `,
        `
        var a = 7 + 7; // [] # p1
        `,
        `
        var a = 8 + 8; // [] # p1
        `,
        `
        var a = 1 + 1; // [] # p1
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        `possible test randomization:
        var a = 8 + 6; // [] # p1
    `
    );
    t.true((deepInclude(testArray, testStrings[3]) || deepInclude(testArray, testStrings[4]) ||
        deepInclude(testArray, testStrings[5])),
        `possible test randomization:
        var a = 1 + 1; // [] # p1
    `
    );
    t.end();
});

