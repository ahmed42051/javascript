/*

slice()	

This method is used to get a new array by selecting a sub-array of a given array.

The parameter ‘s’ indicates the starting index and ‘e’ indicates the ending index. They denote the index of the sub-array to be taken. By default, the value for start is ‘0’ and end is ‘n’.

The changes do not reflect in the original array.

The result has to be assigned to a new array variable.

The return value is new array with the values in the selected sub-array of the given array. The values in the range start to (end-1) will be selected.

Takes exactly 2 arguments

splice()  

This method is used to add/remove an item from the given array.

The parameter ‘i’ denotes the starting index, ‘n’ denotes the number of items to be removed from the specified starting index.‘item 1, item 2, …..item n’ represents the list of new items to be added at the given index. If n=0, no item is removed, the new items are just added to the specified starting index.

The changes reflect in the original array

The result need not be assigned to any other new variable.

The return value is an array containing the deleted element.

Takes ‘n’ number of arguments (a list of new items can be supplied)

*/

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));