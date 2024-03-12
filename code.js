function areIsomorphic(graph1, graph2) {
    const getDegreeSequence = (graph) => {
        return Object.values(graph).map(edges => edges.length).sort((a, b) => a - b);
    };

    const vertices1 = Object.keys(graph1).length;
    const vertices2 = Object.keys(graph2).length;

    // Quick check for differing numbers of vertices
    if (vertices1 !== vertices2) return false;

    const edges1 = getDegreeSequence(graph1);
    const edges2 = getDegreeSequence(graph2);

    // Compare sorted degree sequences
    for (let i = 0; i < edges1.length; i++) {
        if (edges1[i] !== edges2[i]) return false;
    }

    return true;
}

module.exports = { areIsomorphic };

