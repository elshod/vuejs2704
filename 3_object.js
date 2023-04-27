let a = 5,
    b = a 

    b += 5

    console.log(a)
    console.log(b)

let personA = {
    name: 'Ali',
    age: 22
}

let personB = {...personA}

personB.age = 18

console.log(personA,personB)


let massivF = [1,2,3,4]
let massivB = [6,7,...massivF]

massivB.pop()

console.log(massivF,massivB)