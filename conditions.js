//                              conditions                      //
// >,<,==, >=,          " ===  "  is used for comparison and to check type....
//if(2==="2"){
  //  console.log("executed"); }   


//                  switch          //
/*let day = "wed"
switch(day){
    case("mon"):
    console.log("monday");
    break;
    case("tues"):
    console.log("tuesday");
    break;
    case("wed"):
    console.log("wednesday");
    break;
    default:
    console.log("not matched");
    break; 
}*/


// falsy value:  0, false ,-0, "" , NaN , undefined, null
// truly value: "  ", [], "0", 'false', {}, function(){}


//              Ternary operator
// const price = 10;
// price <= 5 ? console.log("true") : console.log("false");

//                      Array Loops               //

// For of loop    ==  iterative loop
/*const arr=[1,2,3,4,5]
for ( const i of arr){
  console.log(i); 
}
const name="sheraz"
for( const  i of name){
  console.log(i);
}*/

//                    map show data in order form
/*const map= new Map()
map.set('1',"a")
map.set('2',"b")
console.log(map);
for(const i of map){
  console.log(i);
  
}*/

//        for of loop gives values and for in loop gives keys     //
//          for in loop used for objects and for of, for Each is used for Arrrays     //

//          for in loops      //
/*const myObj={
  name: "shheraz",
  age: 10,
  id: 2200,
  email:"abbc "
}
for(const i in myObj){
  //console.log(`${i} is for ${myObj[i]}` );
  console.log(i);
  
}*/

//            for each loop           //
/*const myphone=[
  {
    phonename: "Samsung",
    model: "11"
  },
  {
    phonename: "Nokia",
    model: "12"
  },
  {
    phonename: "Oppo",
    model: "13"
  }
]
myphone.forEach((item)=>{
  console.log(item.phonename);
  
})*/

//            filters           //
// const arr= [1,2,3,4,5,6,7,8,9]
// //const newArr= arr.filter((num)=> num>4)
// const newArr= arr.filter((num)=>{
//   return num>4
// })
// console.log(newArr);

//          map             //
/*const arr=[1,2,3,4,5,6,7,8,9]
const newArr= arr
.map((num)=>num+10 )
.filter((num)=> num>15)
console.log(newArr);*/

//        reduce          //
const num =[1,2,3,4]
const newNum= num.reduce((acc,val)=> acc + val , 0)
console.log(newNum);
