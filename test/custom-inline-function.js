const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.addCustomInline(stringArray));
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
        console.log('ovo je 5','555'); // ~ c--555--n-Math.sqrt(25)--
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 200);

    let testStrings = [
        `
        console.log('ovo je 5','Math.sqrt(25)'); // ~ c--555--n-Math.sqrt(25)--
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0])),
        `possible test randomization:

        console.log('ovo je 5','Math.sqrt(25)'); // ~ c--555--n-Math.sqrt(25)--
    `
    );
t.end();
});

