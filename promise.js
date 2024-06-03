// let promise = new Promise((resolve, reject)=>{
//     console.log('Hi iam a promise')
//     reject(new Error('im time out'))
// })

console.log("Hi");


const taskOne = () => {
  return new Promise((resolve, reject) => {
    resolve("task 1 is completed");
  });
};

const taskTwo = () => {
  return new Promise((resolve, reject) => {
    resolve("task 2 is completed");
  });
};

const taskThree = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("task 3 is completed");
    }, 5000);
  });
};

const taskFour = () => {
  return new Promise((resolve, reject) => {
    reject("task 4 is not completed");
  });
};

taskOne().then((res) => {
    console.log(res);
  })
  .then(taskTwo)
  .then((res) => {
    console.log(res);
  })
  .then(taskThree).then((res) => {
    console.log(res);
  })
  .then(taskFour).then((res) => {
    console.log(res);
  }).catch((err) => { console.log(err);
  });
console.log("Bye");




let p1 = new Promise((resolve, reject)=>{
  resolve('Hi i am a promise1 and iam resolve')
})

let p2 = new Promise((resolve, reject)=>{
  resolve('Hi i am a promise2 and iam resolve')
})

Promise.all([p1, p2]).then((res)=>{
  console.log(res)
})



let p3 = new Promise((resolve, reject)=>{
 return setTimeout(()=>{
    resolve('Hi im p3 and im the winner')
  },2000)
})

let p4 = new Promise((resolve, reject)=>{
 return setTimeout(()=>{
    resolve('Hi im p4 and im the winner')
  },4000)
})

Promise.race([p3,p4]).then((res)=>{
  console.log(res)
})