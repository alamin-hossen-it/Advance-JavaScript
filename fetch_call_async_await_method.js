const makeRequest = async (url, config) => {
  const res = await fetch(url, config);
  if(!res.ok){
    const mes = `Error Not Found:${res.status}`
    throw new Error(mes)
  } 
  const data =await res.json();
  return data;
};


const getData =()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then(res =>console.log(res))
    .catch(err =>console.log(err))
}

// getData()

 //send data
const sendData =()=>{
  makeRequest('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) =>console.log(response))
  .catch(err =>console.log(err))
}

sendData()

// updating data 
const updateData =()=>{
  makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'im new programming',
      body: 'im pro at programmer',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) =>console.log(response))
  .catch(err =>console.log(err))
}

updateData()

// update single data
const updatesingleData =()=>{
  makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({

      title: 'foogfhkjngh;ojr',
    
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) =>console.log(response))
  .catch(err =>console.log(err))
}

updatesingleData()


// delete method
const deleteData =()=>{
  makeRequest('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',

  })
    .then((response) =>console.log(response))
  .catch(err =>console.log(err))
}

deleteData()