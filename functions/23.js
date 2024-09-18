// lexical scope
const myVar = "value 10";

function app() {
  const myVar = "value 10";
  function myFun() {
    const myVar = "value 20";
    console.log("inside myFun", myVar);
    const myFun2 = function () {
      const myVar = "value 30";

      console.log("inside myFun", myVar);
    };
    myFun2();
  }
  const myFun2 = function () {};
  const myFun3 = () => {};
  console.log(myVar);
  myFun();
}
app();
