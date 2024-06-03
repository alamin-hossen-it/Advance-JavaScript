
 // CallBack systame


function modify(x, y) {
  return x + y;
}

function sum(a, b, cb) {
 return cb(a, b);
}

// console.log(sum(2,4, modify))



// CallBack Hell systame

function Data1(callback) {
  console.log("Data1");
  callback()
}

function Data2(callback) {
  console.log("Data2");
  callback()
} 

function Data3(callback) {
  setTimeout(() =>{
    console.log('Data3 is loading...')
    callback()
}, 3000)
}

function Data4(callback) {
  console.log("Data4");
  callback()
}

function Data5 (callback){
    console.log('Data5')
    callback()
}

 function Data6 (){
    console.log('Data6')
}   


Data1(()=>{
    Data2(() =>{
        Data3(()=>{
            Data4(()=>{
                Data5(()=>{
                    Data6()
                })

            })
        })
    })
});






 function userdata(userdata, callback){
    setTimeout(()=>{
        console.log(`User Data : ${userdata}`)
    
        callback()
    }, 3000)
}
userdata(1, () =>{
  userdata(2, ()=>{
    userdata(3, ()=>{
      userdata(4, ()=>{
        userdata(5,()=>{

        })
      })
    })
  })
})
