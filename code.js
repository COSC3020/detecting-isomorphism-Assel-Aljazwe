function areIsomorphic(graph1, graph2) {
    const vertices1 = Object.keys(graph1);
    const vertices2 = Object.keys(graph2);

    if (vertices1.length !== vertices2.length) return false;

    const isBijection = (mapping, graph1, graph2) => {
        for (let i = 0; i < vertices1.length; i++) {
            for (let j = i + 1; j < vertices1.length; j++) {
                let u = vertices1[i], v = vertices1[j];
                // Check if (u,v) in E1 implies (f(u),f(v)) in E2, and vice versa
                if ((graph1[u].includes(v)) !== graph2[mapping[u]].includes(mapping[v])) {
                    return false;
                }
            }
        }
        return true;
    };
    
    const generateMapping = (vertices1, vertices2) => {
        let mapping = {};
        let shuffledVertices2 = vertices2.sort(() => 0.5 - Math.random());
        vertices1.forEach((vertex, index) => {
            mapping[vertex] = shuffledVertices2[index];
        });
        return mapping;
    };

    // Attempt to find a bijection that satisfies the isomorphism condition
    let mapping = generateMapping(vertices1, vertices2);
    return isBijection(mapping, graph1, graph2);
}

module.exports = { areIsomorphic };

