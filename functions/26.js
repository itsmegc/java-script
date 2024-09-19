// call back function

// function myFun(a){
//     console.log(a)
//     console.log('hello world')
// }

// myFun([1,2,3])

function myFun(callback) {
  console.log("XXX")
  callback('gc');
}

function myFun1(name) {
  console.log("myFun1",name);
}

myFun(myFun1);
