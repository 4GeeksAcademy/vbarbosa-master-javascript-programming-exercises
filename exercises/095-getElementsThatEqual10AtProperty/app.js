// Write your function here
function getElementsThatEqual10AtProperty(obj,key){

    if (obj[key] == 10) return obj.key
    return [];
}

let obj = {
    key: [1000, 10, 50, 10]
};

let output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]