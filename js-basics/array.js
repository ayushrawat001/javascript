// const arr = [0,1,2,3,4,5]
// const heros = ["spider", "thanos"]
// const arr2 = [14,15,16]

// array methods

// arr2.push(10); //[14,15,16,10]
// arr2.pop() //[14,15,16]
// arr2.unshift(5) //push an element at starting of an array [5,14,15,16]
// console.log(arr2)
// //join function = join the element of the array in new array but in stirng form
// const arr3 = arr2.join(); // 5,14,15,16(its in string form)
// console.log(arr3) 

//slice and splice

// slice doesn't include last parameter which you give and the other hand splice include 
// slice does not manipulate array whereAS splice do
const arr = [11,12,13,14,15]
console.log(arr.slice(1,4)) //[ 12, 13, 14 ]
console.log(arr) //[ 11, 12, 13, 14, 15 ]
console.log(arr.splice(1,4)) //[ 12, 13, 14, 15 ]
console.log(arr) //[ 11 ]


