// 4 Way to call api - XMLHttp request.
//
// fetch() has repleased XMLHttp request.
// fetch() - global method for making http request.
// 2 way to call - then, async await.


// + fetch() is easy to use compair to XMLHttp request.
// + fetch () returns a promise.
// - retruned promise can only handle network error.
// - dose not support all the older browser.


console.clear()

fetch('https://jsonplaceholder.typicode.com/posts')
.then((res) =>{
    if(!res.ok){
        const message = `not found: ${res.status}`
        throw new Error(message)
    }else return res.json()
})
.then(res=>console.log(res))
.catch((err)=>console.log(err))





// push new data using post method

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({

    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
 
})
.then((res) =>{
    if(!res.ok){
        const message = `not found: ${res.status}`
        throw new Error(message)
    }else return res.json()
})
  .then((response)=>console.log(response))
  .catch((err)=>console.log(err))





  // Updating all data using put method.

  fetch('https://jsonplaceholder.typicode.com/posts/1', {
  method: 'PUT',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify({
    id:1,
    title: 'fooma',
    body: 'barma',
    userId: 1,
  }),
 
})
.then((res) =>{
    if(!res.ok){
        const message = `not found: ${res.status}`
        throw new Error(message)
    }else return res.json()
})
  .then((response)=>console.log(response))
  .catch((err)=>console.log(err))



  //Patch method using update single data.


  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      title: 'fooDHGHJFG',
  
    }),
   
  })
  .then((res) =>{
      if(!res.ok){
          const message = `not found: ${res.status}`
          throw new Error(message)
      }else return res.json()
  })
    .then((response)=>console.log(response))
    .catch((err)=>console.log(err))




    //DELETE Method using for requesting data from api

    fetch('https://jsonplaceholder.typicode.com/posts/1', {
        method: 'DELETE',
      })
      .then((res) =>{
          if(!res.ok){
              const message = `not found: ${res.status}`
              throw new Error(message)
          }else return res.json()
      })
        .then((response)=>console.log(response))
        .catch((err)=>console.log(err))