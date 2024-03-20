const { areIsomorphic } = require('./code');

const tests = [
    {
        graph1: { 'A': ['B', 'C'], 'B': ['A'], 'C': ['A'] },
        graph2: { '1': ['2', '3'], '2': ['1', '3'], '3': ['1', '2'] },
        expected: false,
    },
    {
        graph1: { 'A': ['B'], 'B': ['A', 'C'], 'C': ['B'] },
        graph2: { '1': ['2'], '2': ['1', '3'], '3': ['2'] },
        expected: true,
    }
];

tests.forEach(({ graph1, graph2, expected }, index) => {
    const result = areIsomorphic(graph1, graph2);
    console.assert(result === expected, `Test ${index + 1} failed. Expected ${expected}, got ${result}.`);
});

console.log("All tests passed!");
