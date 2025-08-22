import { HashMap } from "./hashmap.js";

const test = new HashMap(0.75);

console.log("-- INITIAL HASHMAP STATE --");
console.log("Length:", test.length()); // 0
console.log("Capacity:", test.capacity); // 16
test._inspect();

console.log("\n-- POPULATING HASHMAP --");

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

console.log("Length after population:", test.length()); // 12
console.log("Load factor:", (test.length() / test.capacity).toFixed(3)); // 0.75
test._inspect();

console.log("\n-- TESTING OVERWRITE (no growth) --");
test.set("apple", "green"); // overwrite apple
test.set("banana", "brown"); // overwrite banana

console.log("Length after overwrite:", test.length()); // still 12
console.log("Apple value:", test.get("apple")); // 'green'
console.log("Banana value:", test.get("banana")); // 'brown'

console.log("\n-- TRIGGERING GROWTH --");
test.set("moon", "silver");

console.log("Length after growth:", test.length()); // 13
console.log("Capacity after growth:", test.capacity); // 32
console.log("New load factor:", (test.length() / test.capacity).toFixed(3)); // 0.406
test._inspect();

console.log("\n-- TESTING METHODS AFTER GROWTH --");

console.log('get("apple"):', test.get("apple")); // 'green'
console.log('get("moon"):', test.get("moon")); // 'silver'
console.log('get("nonexistent"):', test.get("nonexistent")); // null

console.log('has("lion"):', test.has("lion")); // true
console.log('has("zebra"):', test.has("zebra")); // false

test.set("moon", "bright silver");
test.set("lion", "majestic golden");
console.log("Length after post-growth overwrite:", test.length()); // 13
console.log("moon value:", test.get("moon")); // 'bright silver'
console.log("lion value:", test.get("lion")); // 'majestic golden'

console.log("\n-- TESTING REMOVE --");
console.log('remove("dog"):', test.remove("dog")); // true
console.log('remove("zebra"):', test.remove("zebra")); // false
console.log("Length after removing dog:", test.length()); // 12
console.log('has("dog"):', test.has("dog")); // false

console.log("\n-- TESTING KEYS, VALUES, ENTRIES --");
const keys = test.keys();
const values = test.values();
const entries = test.entries();

console.log("Keys count:", keys.length); // 12
console.log("Values count:", values.length); // 12
console.log("Entries count:", entries.length); // 12

console.log("First 5 keys:", keys.slice(0, 5));
console.log("First 5 values:", values.slice(0, 5));
console.log("First 3 entries:", entries.slice(0, 3));

console.log("Sample entry format check:", entries[0]); // [key, value] array

console.log("\n-- TESTING CLEAR --");
test.clear();
console.log("Length after clear:", test.length()); // 0
console.log("Keys after clear:", test.keys()); // empty array
console.log('has("apple") after clear:', test.has("apple")); // false

console.log("\n-- FINAL STATE --");
test._inspect();
