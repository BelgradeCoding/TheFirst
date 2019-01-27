const test = require('tape');
const global = require('../global');
const rMethods = require('../randomize-methods');
const equal = require('fast-deep-equal');

function makeReturnsArray(string, times) {
    const returns = [];
    let stringArray = global.makeCodeArrayTrim(string);

    for (let i = 0; i < times; i++) {
        returns.push(rMethods.randomizeIfs(stringArray));
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


test('Randomize ifs', function (t) {
    let testString = `
        var x = 0;
        if (1 === 1) { // # if1-0
            x = 1;
        } else if (x === 2) { // # if2-0
            x = 2;
            var y = 2;
        } else if (x > 2 && x < 10 ) { // # if1-0
            x = "between";
        } else {
            x = -10;
        }
    `
        ;
    console.log(testString);
    let testArray = makeReturnsArray(testString, 100);

    let testStrings = [
        `
        var x = 0;
        if (x === 2) { // # if2-0
            x = 2;
            var y = 2;
        } else if (x > 2 && x < 10 ) { // # if1-0
            x = "between";
        } else if (1 === 1) { // # if1-0
            x = 1;
        } else {
            x = -10;
        }
    `,
    `
        var x = 0;
        if (x > 2 && x < 10 ) { // # if1-0
            x = "between";
        } else if (x === 2) { // # if2-0
            x = 2;
            var y = 2;
        } else if (1 === 1) { // # if1-0
            x = 1;
        } else {
            x = -10;
        }
    `
    ]
    testStrings = testStrings.map(element => global.makeCodeArrayTrim(element));
    t.true((deepInclude(testArray, testStrings[0]) || deepInclude(testArray, testStrings[1])),
        `possible test randomizations:

        var x = 0;
        if (x > 2 && x < 10 ) { // # if1-0
            x = "between";
        } else if (x === 2) { // # if2-0
            x = 2;
            var y = 2;
        } else if (1 === 1) { // # if1-0
            x = 1;
        } else {
            x = -10;
        }

        var x = 0;
        if (x > 2 && x < 10 ) { // # if1-0
            x = "between";
        } else if (x === 2) { // # if2-0
            x = 2;
            var y = 2;
        } else if (1 === 1) { // # if1-0
            x = 1;
        } else {
            x = -10;
        }
    `
    );
t.end();
});

