//hoisting

// console.log(a);
// var a=2;

// console.log(b)
// let b = 5;

// add()
// var add=()=>{
// console.log ("hello")
// }


// add();
// function add(){
//     console.log("hiii")
// }


// var a = 8;
// {
//     var a= 5;
//     console.log(a)
// }
// console.log(a)




// let b = 5;

// {
//     let b = 9;
//     console.log(b);
// }
// console.log(b);

// Higher oder function



// function outer(a){
//     console.log("outre");
//     a();
// }

// function iner(){
//     console.log("iner")
// }
// outer(iner);


// function outer(){
//     console.log("outer");
//     function iner(){
//         console.log("iner");
//     }
//     return iner;
// }

// let a = outer();
// a();

// function outer(a){

// console.log("outer");
//  a()
// function iner(){
//     console.log("iner");
// }
//   return iner;
// }


// function add(){
//     console.log("add")
// }
// let b = outer(add);
// b(); 




// let arr=[1,2,3,4,5,false,true,"hiii","hello"]

// let arr = [1,2,3,4,false,true,'hii','hello'];

// function get(a){
//   let arr1 = [];
//   for(let valu of a)
//   if(typeof valu =="string")
//   {
//      arr1.push(valu);
//   }
//   return arr1;
// }
// function get2(a){
//   let arr1 = [];
//   for(let valu of a)
//   if(typeof valu =="boolean")
//   {
//      arr1.push(valu);
//   }
//   return arr1;
// }
// function get3(a){
//   let arr1 = [];
//   for(let valu of a)
//   if(typeof valu =="number")
//   {
//      arr1.push(valu);
//   }
//   return arr1;
// }
 
// console.log(get(arr));
// console.log(get2(arr));
// console.log(get3(arr));

// let arr = [1,2,3,4,5,'hii','hello',false,true];

// function getstring(a){
//   return typeof a === 'string';
// }
// function getnumber(a){
//   return typeof a === 'number';
// }
// function getbool(a){
//   return typeof a === 'boolean';
// }

// function get(arr1,ob){
//   let arr2 = [];
//   for(let a of arr1){
//   if(ob(a)){
//     arr2.push(a);
//   }
// }q
//   return arr2;
// }

// console.log(get(arr,getstring));
// console.log(get(arr,getnumber));
// console.log(get(arr,getbool));

//closare


function outer(){
    let userr = 'yhi ayega';
    function inar(){
        console.log(userr);
    }
    return inar
}
let a = outer();
a();

