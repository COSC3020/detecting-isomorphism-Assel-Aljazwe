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

The complexity for detecting graph isomorphism relies on several operations, the creation and sorting of degree sequences and then their subsequent comparison:

- **Generating Degree Sequences**: The first step involves traversing each graph to generate the degree sequences, where each degree represents the number of connections a vertex has. Since this process iterates over all vertices ($V$) and edges ($E$), it has a time complexity of $O(V + E)$.
- **Sorting Degree Sequences**: The majority of the computational effort goes into sorting these degree sequences. Given $V$ degrees per graph, sorting them to prepare for comparison involves a time complexity of $O(V\ log V)$ for each graph. Sorting is vital for sequence comparison and it's the most time-intensive operation in the algorithm.
- **Comparing Degree Sequences**: After sorting, the degree sequences are compared to check for a match, indicating potential isomorphism. This comparison is a linear operation in terms of the number of vertices, with a complexity of $O(V)$, as it requires a 1-to-1 comparison of degree counts.

The combination of these steps (particularly the sorting of degree sequences) determines the overall time complexity of the algorithm. While generating and comparing the degree sequences indicate a combined complexity of $O(V + E) + O(V)$, the sorting step with $O(V\ log V)$ dominates. Therefore, the overall worst-case time complexity converges to $Θ(V\ log V)$.
