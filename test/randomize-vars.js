const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeVars(stringArray));
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


test('Randomize vars', function (t) {
    let testString = `
        a; // var
        b; // var
        c; // var
    `
        ;
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        a; // var
        var b; // var
        c; // var
        `,
        `
        var a; // var
        b; // var
        var c; // var
        `,
        `
        a; // var
        b; // var
        c; // var
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1]) ||
        deepInclude(testArray, testStrings[2])),
        ` starting string:

        a; // var
        b; // var
        c; // var

        options for testing:

        a; // var
        var b; // var
        c; // var

        var a; // var
        b; // var
        var c; // var

        a; // var
        b; // var
        c; // var

    `
    );
t.end();
});

