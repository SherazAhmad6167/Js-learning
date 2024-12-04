function User(email, password){
    this.email = email
    this.password = password
}
Object.defineProperty(this, 'email',{
    get:function(){
        return this.email.toUpperCase();
    },

    set:function(value){
        this.email=value
    }
})
Object.defineProperty(this, 'password',{
    get:function(){
        return this.password
    },
    set:function(value){
        this.password=value
    }
})
const ahmad = new User("abc@abc","cd")
console.log(ahmad.email);
console.log(ahmad.password);
