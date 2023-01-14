// Dot Product Algorithm (Procedure)

function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
        ps += v1[i] * v2[i];
    }
    return ps;
}
// Orthogonal Vectors Algorithm (Procedure)

function isOrthogonal(vectors) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i+1; j < vectors.length; j++) {
            if (dotProduct(vectors[i], vectors[j]) !== 0) {
                return false;
            }
        }
    }
    return true;
}
// Orthogonal Vectors Algorithm (Function)

function isOrthogonal(vectors, dotProductFunc) {
    for (let i = 0; i < vectors.length; i++) {
        for (let j = i+1; j < vectors.length; j++) {
            if (dotProductFunc(vectors[i], vectors[j]) !== 0) {
                return false;
            }
        }
    }
    return true;
}
// logic behind the work 

// In the first algorithm, dotProduct is a procedure that calculates the dot product of two vectors and saves the result in the variable "ps".
// In the second algorithm, isOrthogonal is a procedure that takes a list of vectors as input and returns true if all pairs of vectors in the list are orthogonal (dot product is zero) and false otherwise.
// In the third algorithm, isOrthogonal is a function that takes a list of vectors and dotProductFunc as input and returns true if all pairs of vectors in the list are orthogonal (dot product is zero) and false otherwise.