// Object literals

function studentInfo1 (name, age){
    return {
        name, // name: name,
        age    // age: age
       
    }
}
console.log(studentInfo1('Alamin Hossen', 23))

let message = {
    body(){
        return 'hi i am object function'
    }
}

console.log(message.body())

let message1 = {
     'body name'(){
       return 'hi i am object function'
    }
}

console.log(message1['body name']())