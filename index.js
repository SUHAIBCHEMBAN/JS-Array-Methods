
// array
let arr = [1,2,3,4,5];

// array values get with index 
var first_element = arr[0];
console.log('Array First Value = ' + first_element);

// ADDING AND REMOVING

// push
console.log('Before value add ' + arr);
arr.push(6,7,8,9,10);
console.log('After value add ' + arr);

// pop
let poped_value = arr.pop(6);
console.log( 'Poped Value ' + poped_value);
console.log('After Value Poped ' + arr);

// unshift
arr.unshift(99);
console.log('Array After Add value to start ' + arr);

// shift
arr.shift();
console.log('Array after remove the first value '+ arr);

// COMBINING AND SLICING ARRAYS

// concat
let arr2 = arr.concat([122,144]);
console.log('After Concat the array '+arr2);

// slice
let someNumbers = arr.slice(2,6);
console.log('After Slice '+someNumbers);

// splice
arr.splice(2,1, 22);
console.log('last update ' + arr);

// SEARCHING AND SORTING

// indexof
let c = arr.indexOf(4);
console.log('Selected element index '+c);

// includes
let v = arr.includes('Banana')
console.log(v);

// find
// let b = arr.find(arr => arr.startwith('A'));
// console.log(b);

// flat
let g = [1,2,[3,4],5,[6,7]];
let result = g.flat(Infinity);
console.log('After flat the array '+result);

// sort
let sorted_array = arr.sort();
console.log('Array after sorting '+ arr);

// map
let veg = ['tomato','onion','chelly'];
let uppercase_veg = veg.map(veg => veg.toUpperCase());
console.log('After to upper the veg '+uppercase_veg);

// filter
let filter_veg = veg.filter(veg => veg.startsWith('t'));
console.log('Array After filtering '+filter_veg);

// forech
veg.forEach(veg => console.log(veg));

// reduse
let allveg = veg.reduce((acc,veg) => acc +' ' + veg,' ');
console.log('all items '+allveg);

// revers
let veg_revers = veg.reverse();
console.log('After reversing '+veg_revers);

