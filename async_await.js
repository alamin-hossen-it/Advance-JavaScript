console.log("hi");
taskone = () => {
  return new Promise((resolve, reject) => {
    resolve("complete Task 1");
  });
};
let tasktwo = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("complete Task 2");
    }, 3000);
  });
};

let taskthree = () => {
  return new Promise((resolve, reject) => {
    reject("not complete Task 3");
  });
};

let taskfour = () => {
  return new Promise((resolve, reject) => {
    resolve("complete Task 4");
  });
};

taskone()
  .then((res) => {
    console.log(res);
  })
  .then(tasktwo)
  .then((res) => {
    console.log(res);
  })
  .then(taskthree)
  .then((res) => {
    console.log(res);
  })
  .then(taskfour)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

let allTheTask = async () => {
  try {
    const t1 = await taskone();
    console.log(t1);
    const t2 = await tasktwo();
    console.log(t2);
    const t3 = await taskthree();
    console.log(t3);
    const t4 = await taskfour();
    console.log(t4);
  } catch (e) {
    console.log(e);
  }
};

allTheTask();

console.log("bye");
