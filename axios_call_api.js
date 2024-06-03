// 4 Way to call api -- 1- XMLHttpRequest, 1-- fetch(), 3-- axios, 4-- jquery.
// axios is a library.
// its helps to make request from browser (plain js/ Vue/ React/ Aungular), node.js.

//some of possitive site using axios .
//1 very easey to use.
//2 it support all modern browser includig old.
//4 its retrun promise.
//5 throws error brilliantly.
//6 no ned to set header cause axios is intelligent

// Exios Methid//
//1. axios(config).
//2. axios(url[,config])

//1. axios.get(url[, config])
//2. axios.post(url[, cofig])
//3. axios.put(url[,config])
//4. axios.patch(url[, config])
//5. axios.delete(url[, config])

//axios retrun response object - data, status, statusTaxt, headers, config

console.clear();
axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .post("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .put("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .patch("https://jsonplaceholder.typicode.com/posts/1", {
    body: JSON.stringify({
      body: "barmaryhtr",
    }),
  })
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

axios
  .delete("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err));

// useing async/await

const makeRequest = async (config) => {
  return await axios(config);
};

const getData = () => {
  makeRequest("https://jsonplaceholder.typicode.com/posts");
};

// getData();

const creatData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1 ",
    method: "put",
    data: JSON.stringify({
      id: 1,
      title: "fooma",
      body: "barma",
      userId: 1,
    }),
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

creatData();

const deleteData = () => {
  makeRequest({
    url: "https://jsonplaceholder.typicode.com/posts/1 ",
    method: "delete",
  })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

deleteData();
