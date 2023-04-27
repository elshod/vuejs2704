// let btn = document.querySelector('button')
// btn.innerHTML = '<b>Hello</b>'
// btn.textContent = '<b>Privet</b>'


// let count = 1
// let start = document.querySelector('#start')
// let stop = document.getElementById('stop')

// let timer = null 

// start.addEventListener('click',()=>{
//     timer = setInterval(()=>{
//         console.log(count++);
//     },1000)
// })



let btn = document.getElementById('random')
let h2 = document.querySelector('h2')
btn.addEventListener('click',()=>{
    h2.textContent = Math.floor(Math.random() * 100)
})