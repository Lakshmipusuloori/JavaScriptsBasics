function identity<T>(arg: T): T {
    return arg;
}

let op1 =  identity<String>("Testing");
let op2 = identity<number>(10);

console.log(op1)
console.log(op2)

function getItem(items: any[]): any[]{
    return new Array().concat(items)
}

let Arry1 = getItem([10,20,30])
let Arry2 = getItem(["Java","TypeScript"])
Arry1.push(40)
Arry1.push("testing");

Arry2.push(10);

console.log(Arry1)
console.log(Arry2)

function getItems<T>(items: T[]): T[]{
    return new Array().concat(items)
}

let arry1 = getItems<number>([10,20,30])
let arry2 = getItems<string>(["Java","TypeScript"])
arry1.push(40)
//arry1.push("testing");

arry2.push("JS");

console.log(arry1)
console.log(arry2)