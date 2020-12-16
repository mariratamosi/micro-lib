import uniqueRandomArray from "unique-random-array";
var myVars = require("./ints.json");
export const all = myVars;
export const random = uniqueRandomArray(myVars);
