/*const promiseOne= new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task is completed");
        resolve();
    },4000)
})
promiseOne.then(function(){
    console.log('task completed');
    
})


new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Asyn2 is complete');
        resolve();
    },3000)
})
.then(function(){
    console.log("taskk 2 completed");
    
})*/


/*const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "sheraz", email: "abc" })
        }else{
            reject("ERROR Not Matched")
        }
        
    })
},1000)
promiseThree.then(function(user){
        console.log(user);
        return user.username        
})
.then(function(username){
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log("Task resolved or rejected");
    
})*/

/*const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username: "shheraz", email:"abc"})
        }else{
            reject('Error Not Matched')
        }
    })
},2000);
async function consumePromiseThree(){
    try{
    const response = await promiseThree
    console.log(response);
    }
    catch(error){
        console.log(error);
        
    }
}
consumePromiseThree();*/

async function User(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data); 
}catch(error){
    console.log('ERROR');  
}
}
User();