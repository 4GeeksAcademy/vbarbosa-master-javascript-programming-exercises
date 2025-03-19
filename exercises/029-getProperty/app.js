function getProperty(car,model) {
  // your code here
  if (model in car) return car[model];
    return undefined;
}

let car = {
  model: 'Toyota',
};

console.log(getProperty(car,'model'))
