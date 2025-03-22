// Write your function here
function getLastElementOfProperty(obj,key){
    if (obj[key] === undefined || obj[key].length === 0) return undefined;
    return obj[key][obj[key].length -1];
}
let obj = {
    key: [1, 2, 5]
  };

let output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5