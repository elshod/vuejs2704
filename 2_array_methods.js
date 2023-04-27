// let arr = [1,3,17,2,9]
// let max = arr[0]
// arr.forEach(val=> {
//     if (max < val){
//         max = val
//     }
//     // console.log(`massivning ${index}-indeksda = ${value}`)
// })
// console.log(max)
// arr.forEach(function(k,i,arr){
//     console.log(`${arr} massivning ${i}-indeksda = ${k}`)
// })

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }
// let summa = 0
// for(let item of arr){
//     summa += item
// }
// console.log(summa)


const createRandomArray = (n) => {
    let arr = []
    for(let i=0;i<n;i++){
        arr.push(Math.floor(Math.random()*20))
    }
    return arr
}

let massiv = createRandomArray(8)
console.log(massiv)

let yangiMassiv = massiv.filter(item => {
    if (item % 2 === 1){
        return item
    }
})
console.log(yangiMassiv)


// let person = {
//     name: 'Sardor',
//     gender: 'male',
//     age: 22
// }

let persons = [
    {name: 'Sardor',gender: 'male', age: 22, salary: 2000000 },
    {name: 'Aziza',gender: 'female',age: 18, salary: 2000000},
    {name: 'Sanjar',gender: 'male',age: 16, salary: 2000000}
]

let workers = persons.map(person => {
    if (person.age == 18){ // 10%
        person.salary *= 1.1
    } else if (person.age > 18){
        person.salary *= 1.2 // 20%
    } 

    return person
})
console.log(workers)
console.log(persons)


let maleList = persons.filter(person => {
    if (person.gender === 'male') {
        return person
    }
})

let adultList = persons.filter(person => person.age >= 18)
// let adultList = persons.filter(person => {
//     if (person.age >= 18){
//         return person
//     }
// })
console.log(adultList)
console.log(maleList)


