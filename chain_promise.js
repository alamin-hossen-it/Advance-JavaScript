taskone = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('complete Task 1')
    })
}
let tasktwo = ()=>{
     return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            
            resolve('complete Task 2')
        },3000)

    })
}

let taskthree = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('complete Task 3')
    })
}

let  taskfour = ()=>{
    return new Promise((resolve, reject)=>{
        resolve('complete Task 4')
    })
}

taskone().then((res)=>{
    console.log(res)
})
.then(tasktwo).then((res)=>{
    console.log(res)
})
.then(taskthree).then((res)=>{
    console.log(res)
})
.then(taskfour).then((res)=>{
    console.log(res)
})
.catch((err)=> console.log(err))
console.log('bye')