function receivesAFunction(callback){
    console.log(callback());
}
receivesAFunction();

function returnsANamedFunction(){
    return function namedFunction(){
        console.log ("Hello, RJ");
    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log("Hello RJ");
    }
}