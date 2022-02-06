const currentArray = [1, 2, 3, 4, 5];
function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}
console.log(`For: ${sumFor(currentArray)}`);

function sumWhile(list) {
  let counter = 0;
  let sum = 0;
  while (counter < list.length) {
    sum += list[counter];
    counter++;
  }
  return sum;
}

console.log(`While: ${sumWhile(currentArray)}`);

function sumRecursion(list) {
  if (list.length === 1) {
    return list[0];
  }
  return list[0] + sumRecursion(list.slice(1));
}

console.log(`Recursive: ${sumRecursion(currentArray)}`);

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo, each) { return memo + each; }, 0);
}

console.log(`Underscore: ${sumTheSimpleWay(currentArray)}`);
