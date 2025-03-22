// Write your function here
function getFirstElementOfProperty(obj,key){
    if(obj[key] === undefined || obj[key].length === 0) return undefined;
    return obj[key][0];
}

let obj = {
    key: [1, 2, 4]
  };
console.log(getFirstElementOfProperty(obj,'key')); // --> 1