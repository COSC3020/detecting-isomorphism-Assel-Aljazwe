[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/NYae883E)
# Graph Isomorphism

Devise an algorithm to determine whether two given graphs are isomorphic or not.
It takes two graphs as an argument and returns `true` or `false`, depending on
whether the graphs are isomorphic or not. Your algorithm needs to handle both
the case where the two graphs are isomorphic and where they are not isomorphic.

Hint: Your algorithm does not need to be the best possible algorithm, but should
avoid unnecessarily repeating work.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

## Runtime Analysis

What is the worst-case big $\Theta$ time complexity of your algorithm?


# Time Complexity Analysis of the Detecting Isomorphism Algorithm:

The formal definition of isomorphism that guides the algorithm:

- $G_1=(V_1 , E_1)$ is isomorphic to $G_2 = (V_2, E_2)$ if there exists a
one-to-one and onto function (bijection) $f: V_1 \rightarrow V_2$ such that $(u,v)
\in E_1$ iff $(f(u),f(v)) \in E_2$.

## Key Components of the Algorithm:

1. **Generation of Bijections**: The algorithm systematically tries to map each vertex in the first graph to a unique vertex in the second graph.
   - This process involves exploring all permutations of vertices in the second graph to find a valid mapping that preserves adjacency.
   
3. **Adjacency Preservation Check**: For each potential bijection generated, the algorithm checks if the adjacency relationships are preserved.
   - This check requires iterating through all edges in the first graph and verifying that corresponding edges exist in the second graph according to the mapping.

## Worst-Case Time Complexity Analysis:

### Bijections Generation:

- The process of generating bijections is essentially exploring all permutations of the vertex set of the second graph. For a graph with $\(n\)$ vertices, there are $\(n!\)$ (factorial) possible permutations. Therefore, the bijection generation step has a time complexity of $O(n!)$, which dominates the overall time complexity of the algorithm.

### Adjacency Preservation Check:

- For each bijection, the adjacency preservation check iterates through all edges of the first graph. In the worst case, a graph can have up to $\(\frac{n(n-1)}{2}\)$ edges (for an undirected graph), making this step $O(n^2)$ for each bijection. However, since $O(n^2)$ is negligible compared to the $O(n!)$ complexity of generating bijections, it does not significantly impact the overall time complexity.

## Conclusion:

Given the steps involved and their computational demands, the overall worst-case time complexity of the graph isomorphism algorithm is:
$$\Theta(n!)$$

This demonstrates the algorithm's exhaustive approach, as it tests all potential vertex pairings to identify a correct bijection that maintains all edge relationships. However, this method becomes too demanding for larger graphs due to the exponential increase in permutations. 

References: 
https://stackoverflow.com/questions/3876354/algorithm-for-determining-if-2-graphs-are-isomorphic
https://networkx.org/nx-guides/content/algorithms/isomorphism/isomorphism.html
