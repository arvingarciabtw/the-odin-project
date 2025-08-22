import { LinkedList } from "./classes.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.prepend("parrot"); // The project spec appended this, but I prepended to test if prepend method works
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());

// Tested the other methods below!

console.log("\nNumber of nodes in the list: " + list.size());
console.log("The first node is:");
console.log(list.head());
console.log("The last node is:");
console.log(list.tail());
console.log("The node at index 4 is:");
console.log(list.at(4));
console.log(list.pop());
console.log(list.toString());
console.log("\nDoes the list contain a cat?: " + list.contains("cat"));
console.log("Does the list contain a dragon?: " + list.contains("dragon"));
console.log("The index of cat is: " + list.find("cat"));
console.log("The index of dragon is: " + list.find("dragon"));
