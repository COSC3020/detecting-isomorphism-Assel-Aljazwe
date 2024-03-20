function areIsomorphic(graph1, graph2) {
    const vertices1 = Object.keys(graph1).sort();
    const vertices2 = Object.keys(graph2).sort();
    // Quick check to make sure both graphs have same number of vertices
    if (vertices1.length !== vertices2.length) return false;

    const usedVertices = new Set();
    const bijection = {};
    // Checks if the current mapping preserves adjacency between Graph1 and Graph2
    const checkIsomorphism = () => {
        for (let u of vertices1) {
            for (let v of graph1[u]) {
                if (!(graph2[bijection[u]].includes(bijection[v]))) {
                    return false;
                }
            }
        }
        return true;
    };
    // Recursively mapping vertices to attempt to create a valid bijection
    const attemptMapping = (index) => {
        if (index === vertices1.length) {
            return checkIsomorphism();
        }

        const u = vertices1[index];
        for (let v of vertices2) {
            if (!usedVertices.has(v)) {
                bijection[u] = v;
                usedVertices.add(v);
                if (attemptMapping(index + 1)) {
                    return true;
                }
                usedVertices.delete(v);
            }
        }
        return false;
    };

    return attemptMapping(0);
}

module.exports = { areIsomorphic };


