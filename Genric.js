function identity(arg) {
    return arg;
}
var op1 = identity("Testing");
var op2 = identity(10);
console.log(op1);
console.log(op2);
function getItem(items) {
    return new Array().concat(items);
}
var Arry1 = getItem([10, 20, 30]);
var Arry2 = getItem(["Java", "TypeScript"]);
Arry1.push(40);
Arry1.push("testing");
Arry2.push(10);
console.log(Arry1);
console.log(Arry2);
function getItems(items) {
    return new Array().concat(items);
}
var arry1 = getItems([10, 20, 30]);
var arry2 = getItems(["Java", "TypeScript"]);
arry1.push(40);
//arry1.push("testing");
arry2.push("JS");
console.log(arry1);
console.log(arry2);
