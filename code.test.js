const assert = require('assert');
const { areIsomorphic } = require('./code');

const graph1 = {
    a: ['b', 'c'],
    b: ['a', 'd'],
    c: ['a', 'd'],
    d: ['b', 'c']
};

const graph2 = {
    w: ['x', 'y'],
    x: ['w', 'z'],
    y: ['w', 'z'],
    z: ['x', 'y']
};

// graph 1 and 3 should not be isomorphic due to different connections
const graph3 = {
    a: ['b'],
    b: ['a', 'c', 'd'],
    c: ['b'],
    d: ['b']
};

try {
    assert.strictEqual(areIsomorphic(graph1, graph2), true, 'Graph1 and Graph2 should be isomorphic');

    assert.strictEqual(areIsomorphic(graph1, graph3), false, 'Graph1 and Graph3 should not be isomorphic');

    console.log('All tests passed!');
} catch (error) {
    console.error('One or more tests failed.');
    console.error(error.message);
}

module.exports = { areIsomorphic };
