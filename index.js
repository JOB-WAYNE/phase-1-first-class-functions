function receivesAFunction (wayne){
    console.log(wayne());
}
receivesAFunction (function() {
    return "This is hard !"

})
 function returnsANamedFunction(){
    function namedFunction () {
     console.log("before all")
    }
  return namedFunction;
}

function returnsAnAnonymousFunction() {
    return function() {
      console.log("I'm an anonymous function!");
}};
  