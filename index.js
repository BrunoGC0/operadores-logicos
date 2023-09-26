/*
    == --- igual --- a==b --- verdadeiro se a for igual a b
    === --- idêntico --- a===b --- verdadeiro se a for idêntico a b
    !== --- não idêntico --- a!==b --- verdadeiro se a não for idêntico a b
    != --- diferente --- a!=b --- verdadeiro de a for diferente de b
    < --- menor que --- a<b --- verdadeiro quando a for menro que b
    <= --- menor ou igual que --- a<=b --- verdadeiro quando a for menor ou igual a b
    > --- maior que --- a>b --- verdadeiro quando a for maior que b
    >= --- maior ou igual que --- a>=b --- verdadeiro quando a for maior ou igual a b
*/



const a = 2
const b = 2

console.log( a === b && a <=b )
// true e true = true

console.log( a === b && a < b)
//true e false = false

console.log( a<b && a ===b )
//false e true = false

console.log( a > b && a < b )
//false e false = false


// OR

console.log( a === b || a <=b )
// true e true = true

console.log( a === b || a < b)
//true e false = true

console.log( a<b || a ===b )
//false e true = true

console.log( a > b || a < b )
//false e false = false


console.log(!(a === b)) //false
console.log(!(a<b)) //true




