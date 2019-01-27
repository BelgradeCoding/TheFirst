const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeReturns(stringArray));
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

function trimCode(mainArray) {
    mainArray.forEach(array => {
        array.forEach(element => {
            element.code = element.code.trim();
        });
        return array;
    });
    return mainArray;
}


test('Randomzie returns', function (t) {
    let testString = `
    function testReturn() {
        return { // # ret3-n-O
            lorem: 1,
            ispum: 2
        };
    }
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 100);
    testArray = trimCode(testArray);

    let testStrings = [
        `
        function testReturn() {
            return {
                x: "ff"
            };
        }
        `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0])),
        `possible test randomization:

        function testReturn() {
            return {
                x: "ff"
            };
        }
    `
    );
t.end();
});

