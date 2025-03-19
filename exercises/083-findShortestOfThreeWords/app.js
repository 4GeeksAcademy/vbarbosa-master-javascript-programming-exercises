function findShortestOfThreeWords(word1, word2, word3) {
    if (word1.length <= word2.length && word1.length <= word3.length) {
        return word1;
    }
    if (word2.length <= word1.length && word2.length <= word3.length) {
        return word2;
    }
    if (word3.length <= word1.length && word3.length <= word2.length) {
        return word3;
    }
    
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'