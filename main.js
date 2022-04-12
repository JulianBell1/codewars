function countBy(x, n){
    let z = []

    for(i = 1; i <= n; i++){
        z.push(x * i)
    }

    return z
}

console.log(countBy(1, 10))

// // APRIL 11 // //

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// Two solutions I gave, both correct: 

// 1. As prompted by codewars
        function even_or_odd(number) {
          if (number % 2 === 0){
              return 'Even'
          } else {
              return 'Odd'
          }
        }
// 2. My second attemp to use ternary 

        let even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd'



////// Given an array of integers, return a new array with each value doubled. 

// 1. Had to reference 100Devs discord for this. Was getting the correct overall idea but was inputing theh wrong thing - was putting in maps.map instead of x.map (as x would be the array that is input later)

        function maps(x){
            return x.map(function(element){
              return element * 2;
            })
          }

// 2. 

        let maps = x => x.map(num => num*2)