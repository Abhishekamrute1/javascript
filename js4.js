// let user = "abhi";
// // console.log(user);

// function add(){
//     let num
//     console.log(num);
// }
// add();
// console.log(user);

function outer(){
    iner();
    var a = 5;
    function iner(){
        console.log(a);
    }
}
outer();
