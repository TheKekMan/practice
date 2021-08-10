"use strict"

class Math {
    constructor(){
        console.log("class Math");
    }
    sum = (a = 0,b = 0, ...args) => {
        let res = a + b;
        for(let arg of args){
           res += arg;
        }
    return res;
    };  
}
    
class Child extends Math {
    constructor(){
        super();
        console.log("class Child");
    }
    sum1(){
        console.log("Testing 'super' keyword: " + this.sum(50,20));
    }
}

let arr = [10, 5, 7];
let math = new Math();
console.log('Testing rest, spread and default parameter: ' + math.sum(5,6,7,1) + ' ' + math.sum(...arr, 5, 10) + ' ' + math.sum(5));

let child = new Child();
child.sum1();

function* iterate(index){
    yield 1;
    yield 2;
    yield 3;
}

let iterator = iterate();
for(let value of iterator){
    console.log(value);
}

let {x: first, y:second, z:third} = {x: 10, y:20, z:30};
console.log(first);
console.log(second);
console.log(third);

function logic(){
    let elem = document.getElementById('result2');
    try{
        let a = "test";
        let b = "test";
        if(a == b){
            elem.innerHTML = "true";
        }
        a = "test1";
        if(a != b){
            console.log("false");
        }
    }
    catch(err){
        console.log(err.name);
        console.log(err.message);
    }
}


let sum = (a = 0,b = 0, ...args) => {
    let res = a + b;
    for(let arg of args){
        res += arg;
    }
    return res;
};

let sumStr = (a,b) => {
    console.log(`Concat of ${a} and ${b} is "${a+b}"`);
    console.log("\"Escaping\"");
    return a+b;
}