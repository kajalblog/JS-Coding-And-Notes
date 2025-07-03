// variables var,let,const
// we have initially 2 scope global & local
// var ->re-declared & updated , global scope (access anywhere).
// let->can't redeclared but can updated ,local(block) scope (access only within block).
// const ->can't redeclared & updated ,block scope.
// var variables are initialized with undefined whereas let & const are not initialized
// const must be initialized during declaration unlike let & const
// ex const totalCount;
//  we can't do this 
// const totalCount=0;

var a; //this is called variable declaration
// var variables are initialized with undefined
console.log(a);
let b = 20; //this is called variable initialization
const c = 30;

{
    var name = "Palak";
    console.log("inside block var", name);
}
console.log("outside block var", name)


// if variable have global scope then it will assign to window object

var lastName = "Muchhal";
// window.lastName;
console.log(window.lastName);
// but this is not apply for let bcoz block scope

{
    let firstName = "Palash";
    console.log("inside block let", firstName);
}
console.log("outside block let", firstName);

{
    const count = 100;
    console.log("inside block const", count);
}
console.log("outside block const", count);


