//for of

// const arr = ['a1', 'b1', 'c1', 'd1', 'e1']
// for(let name of arr){
//     console.log(name)
// }

//for in

const student = {
    id: 1,
    name : 'Alamin Hossen',
    cgpa : 4.50
}

for(let a in student){
    console.log(`${a} : ${student [a]}`)
}