'use strict';

const LinkedList = require('./linkedList');

let list = new LinkedList([0, 1, 2, 3, 4]);
console.log(list.toArray());
console.log('size:', list.size);

console.log('\nincludes 0:', list.includes(0));
console.log('includes 1:', list.includes(1));
console.log('includes 5:', list.includes(5));
console.log("includes 'a':", list.includes('a'));

console.log("\ninsert 'a' at index 2...");
list.insert('a', 2);
console.log(list.toArray());
console.log('size:', list.size);
console.log("includes 'a':", list.includes('a'));

console.log('\nreverse!');
list.reverse();
console.log(list.toArray());

console.log('\nget -1:', list.get(-1));
console.log('get 0:', list.get(0));
console.log('get 3:', list.get(3));
console.log('get 5:', list.get(5));
console.log('get 6:', list.get(6));

console.log('\nremove index 4...');
list.remove(4);
console.log(list.toArray());
console.log('size:', list.size);

console.log('\npopping from tail...');
while (list.size > 0) {
  console.log(list.popTail());
}
console.log(list.popTail());
console.log(list.toArray());
console.log('size:', list.size);
