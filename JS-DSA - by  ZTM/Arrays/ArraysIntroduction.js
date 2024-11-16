const strings = ['a', 'b', 'c', 'd'];

// Note: All operations are performed on main array on line 1

/***** adding and deleting at Start or End of the Array *****/
// push:
// adds one item at the end of the array
// Time Complexity : O(1)
// code:
// strings.push('e');
// console.log(strings)
// o/p:
// ['a', 'b', 'c', 'd', 'e']

// pop:
// removes the last item in the array.
// pop doesnt need parameters
// Time Complexity : O(1)
// code:
// strings.pop()
// console.log(strings)
// o/p :
// ['a', 'b', 'c']

// unshift:
// adds one item at the start of the array
// Time Complexity : O(n)
// code:
// strings.unshift('x')
// console.log(strings)
// o/p:
// ['x', 'a', 'b', 'c', 'd']

// shift:
// removes one item at the start of the array
// shift doesnt need parameters
// Time Complexity : O(n)
// code:
// strings.shift()
// console.log(strings)
// o/p:
// ['b', 'c', 'd']
// *********************

/***** adding and deleting at Middle of the Array *****/

// splice:
// adds or deletes element/elements in the middle of the array
// parameter:
// 1: is start point which is inclusive,
// 2: how many items to be deleted
// 3: one or more items to add from starting point
// Time Complexity : O(n)
// code1:
// strings.splice(1, 0, 'vishwas', 'Bhoir');
// console.log(strings);
// o/p:
// ['a', 'vishwas', 'Bhoir',b', 'c', 'd')] => deleting nothing
// code2:
// strings.splice(1, 2, 'vishwas', 'Bhoir');
// console.log(strings);
// o/p:
// ['a', 'vishwas', 'Bhoir, 'd')] => deleting 2 items(b,c) including item at index starting parameter

/***** CLASSES IN JAVASCRIPT *****/

// reference type
// object1 = { value: 10 };
// object2 = object1;
// object3 = { value: 10 };
// console.log(object1 === object2);
// console.log(object1 === object3);

// object2.value = 15;
// console.log(object1.value);

// context vs scope