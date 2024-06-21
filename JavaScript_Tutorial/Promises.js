// const promise1 = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Asyn task is completed");
//     }, 1000)
//     resolve();
// })

// promise1.then(function(){
//     console.log("promise fulfilled")
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 solved")
// })
// const error = false;
// const fullPromise = new Promise(function(resolve, reject){
//     setTimeout(function(){    
//         if(error == true){
//           resolve({username : "dakshkanaujia", age : 18});
//         }else{
//             reject("something went wrong");
//         }
//     }, 1000)
// })

// async function consumeFullPromise(){
//     try{
//         const response = await fullPromise;
//         console.log(response);
//     }catch(error){
//         console.log(error);
//     }
// }

// consumeFullPromise();

// fetch("https://api.github.com/users/dakshkanaujia")
// .then(function(response){
//     return response.json();
// })
// .then(function(data){
//     console.log(`${data.login} successfully logged in with id, ${data.id} .`)
// })
// .catch(function(error){
//     console.log(error)
// })

// function makeCounter(){
//     var count = 0;
//     return function(){
//         return count++;
//     }
// }

// var counter = makeCounter();
// var counter2 = makeCounter();
// counter();
// counter();
// counter();
// counter2();
// counter2();
// console.log(counter());
// console.log(counter2());


// function addArgs(){
//     var sum = 0;
//     console.log(typeof arguments)
//     for(var i = 0; i<arguments.length; i++){
//         sum += arguments[i];
//     }
//     return sum;
// }   

// console.log(addArgs(1,2,3,4,5));

// function add(a){
//     return function(b){
//         return function(c){
//             return(a+b+c);
//         }
//     }
// }


// add(1,2);
// console.log(add(1)(2)(3));


console.log(typeof typeof typeof [])

const object = {
    first : function(){
        console.log("I am first")
        return this;
    },
    second : function(){
        console.log("I am second")
        return this;
    },
    third : function(){
        console.log("I am third")
        return this;
    }
}
object.first().third();