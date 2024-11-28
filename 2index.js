//const Arr= [1,2,3,4,5,6,7,8]
//console.log(Arr[4]);
/*const myArr = new Array(1,2,3,4,5)
myArr.push(5)
myArr.push(6)       //add from end
myArr.pop(6)        //remove from end
myArr.unshift(7)    //add from start
myArr.shift()       //remove from start

//join bind and convert type to string
const newArr= myArr.join();
console.log(myArr);
console.log(newArr);*/

//merge 2 aray
/*const apl= ["a","b","c","d"]
const apl1= ["e","f","h"]
const newApl= [...apl,...apl1]
console.log(newApl);*/

//array within array merge
/*const Arr=[1,2,3,4,[3,4],5,[2,4,6,4,[5,6,7]]]
const newArr= Arr.flat(Infinity);
console.log(newArr);*/

// any datatype can be converted into Array by using isArray,from,of
/*console.log(Array.isArray("sheraz"));
console.log(Array.from({name:"sheraz"}))
console.log(Array.of("sheraz"))

let a=1
b=2
c=3
console.log(Array.of(a,b,c));*/

//                              objects             //

// objects
/*const mySym= Symbol("123");
const myObj= {
    name: "sheraz",
    age : 20,
    email: "sheraz@google.com",
    [mySym] : "key",
    isLoggedIn: true
}*/
/*console.log(myObj);
console.log(myObj["email"]);
console.log(myObj.email)
console.log(myObj[mySym])
Object.freeze(myObj.email)
myObj.email="ahmad@gmail.com"*/

/*myObj.greeting = function(){
    console.log("helo");
    
}
myObj.greeting2 = function(){
    console.log(`helo your name is, ${this.name}`);
    
}

myObj.greeting();
myObj.greeting2()

myObj.greet = function(){
    console.log(`helo your name is, ${this.name}`);
    
}

myObj.greet();*/

//                              singleton object                //
/*const user= new Object()
console.log(user);*/

// const user= {}
//   user.id=1
//   user.name="sheraz"
// user.isLoggedIn= true
// console.log("username:",user);
/*const user = {
    id: 1,
    name: "sheraz",
    isLoggedIn: true,
    logName: function() {
        console.log(this.name);  // 'this' refers to the 'user' object here
    }
};

user.logName();*/

// object in object
/*const regular={
    email: "12343ds",
    name :{
        fullname: {
            myname:{
                    n1: "shherraz",
                    age: 20
            }
        }
    }
}
console.log(regular.name.fullname.myname)*/

// merge objects
/*const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj4={5:"c", 6:"d"}
const obj3= {... obj1,... obj2,... obj4}
console.log(obj3);*/

/*console.log(user);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));*/

