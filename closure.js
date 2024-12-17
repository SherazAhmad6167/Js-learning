//                      Lexical Scoping                 //

/*function closure(){
    let name= "Google"
    console.log(name);
    
    function displayName(){
        let id = "13"
            console.log(name);     
    }
    displayName();
}
closure();*/

//                      closure                         //
// when function execute, its lexical scope return, it return value to outer function
//
function closure(){
    let name= "Firefox"
    console.log(name);
    function displayName(){
        console.log("Inner",name);
        
    }
    return displayName;
}
const fun= closure();
fun()
