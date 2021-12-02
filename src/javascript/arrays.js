let arr = ['akshatha', 'vandhana', 'praneetha', 'ierene', 'neha']
console.log(arr.length)
console.log(arr[0]) //return first index value
console.log(arr[arr.length - 1]) //return lastindex value

arr.forEach(function (item, index, array) {
    console.log(item)
    console.log(index)
    console.log(array)
}) //forEach looping over a array

//for loop
for (let i = 0; i < arr.length; i++) {
    const ele = arr[i];
    console.log(i, ele);
}

//for in loop (returns values)
for (const key in arr) {
    console.log(key)
}

//.forEach (values and index)
arr.forEach((index, element) => { console.log(index, element) });

//.some() to break forEach
arr.some((elem, index) => {
    if (index >= 1) {
        return true;
    }
    console.log(elem);
})//akshatha

//for off loop (best for arrays)
for (const elem of arr) {
    console.log(elem);
}

//add item
let addValue = arr.push('Andy')
console.log(arr)

//remove from end
let del = arr.pop()
console.log(arr)

//remove from start
let start = arr.shift()
console.log(arr)

//add to start
let addStart = arr.unshift('akshatha')
console.log(arr)

//find item  by indexof 
let index = arr.indexOf('akshatha')
console.log(index)

//remove by index
//Splicing
let remove = arr.splice(0, 1)
console.log(arr)

//accessing elements
console.log(arr[0])
console.log(arr[3])
console.log(arr[2])

//concat
const arr2 = ['lol'];
const arr3 = arr.concat(arr2);
console.log(arr3)

//find (only first element greater than 12)
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element > 12);
console.log(found);

//filter (list will be returned)
const arra1 = [5, 12, 8, 130, 44];
const foun = arra1.filter(element => element > 12);
console.log(foun);

//findindexof
const array = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array.findIndex(isLargeNumber));

//destructuring and arrow func
const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
];

const result = inventory.find(({ name }) => name === 'cherries');
console.log(result)

//flat
const ar = [0, 1, 2, [3, 4]];
console.log(ar.flat());
const arrr2 = [0, 1, 2, [[[3, 4]]]];
console.log(arrr2.flat(2));

//includes
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));