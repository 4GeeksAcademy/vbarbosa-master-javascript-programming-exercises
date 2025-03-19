function keep (array, n){
    return array.filter(function (element){
        return element === n;
    })
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]