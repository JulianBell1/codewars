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
        // function even_or_odd(number) {
        //   if (number % 2 === 0){
        //       return 'Even'
        //   } else {
        //       return 'Odd'
        //   }
        // }
// 2. My second attemp to use ternary 

        let even_or_odd = number => number % 2 === 0 ? 'Even' : 'Odd'



////// Given an array of integers, return a new array with each value doubled. 

// 1. Had to reference 100Devs discord for this. Was getting the correct overall idea but was inputing theh wrong thing - was putting in maps.map instead of x.map (as x would be the array that is input later)

        // function maps(x){
        //     return x.map(function(element){
        //       return element * 2;
        //     })
        //   }

// 2. 

        let maps = x => x.map(num => num*2)


// /// //// -------------   April 16  ------------- //// /// // -------------------------------------------------------------


      function dnaConverter(dna){
        dna.split('')
        .forEach((x) => {
          if(x==='A')
            {dna.replace('A','T')
          } else if (x==='T'){dna.replace('T','A')
          } else if (x==='C'){dna.replace('C','G')
          } else if (x==='G'){dna.replace('G','C')
          
          })
            return dna.join('')
      }
    }
        console.log(dnaConverter('ATGC'))



// /// //// -------------   April 23  ------------- //// /// // -------------------------------------------------------------

    // 1.       You get an array of numbers, return the sum of all of the positives ones.
                // Example [1,-4,7,12] => 1 + 7 + 12 = 20
                // Note: if there is nothing to sum, the sum is default to 0.

                function positiveSum(arr) {
  
                        let sum = 0
                        
                        for(let i = 0; i < arr.length; i++){
                          if (arr[i] > 0){
                            sum += arr[i]
                          }
                        }
                        return sum
                      }

                //alternate from solutions

                function positiveSum(arr) {
                        return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
                     }

                
        //2. You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
                // Array can contain numbers or strings. X can be either.
                // Return true if the array contains the value, false if not.

                function check(a, x) {
                        return a.includes(x) ? true : false
                       }



        // These are all solutions provided from Discord 
        //use foreach (really not the best thing to do) you will need an intermediate value, you can also use for example a boolean variable

                function check1(array, searchElement) {
                  let found = 0;
                  array.forEach(el => el === searchElement && found++);
                  return found > 0; 
                }
                //you could also throw inside the forEach function,
                //but this is not what we want (slow and bad to read as well also not meant for it)

                //a more traditional approach, make use of return in a conventional collection iteration
                function check2(array, searchElement) {
                    for(const el of array){
                        if(searchElement === el){
                            return true;
                        }
                    }
                    return false;
                }
                //traditional approach, make use of array index
                function check3(array, searchElement) {
                    for (let i = 0; i < array.length; i++) {
                        if (searchElement === array[i]) {
                            //you could also just break here or continue as you wish, not possible in forEach!
                            return true;
                        }
                    }
                    return false;
                }
                //make use of nice functions provided by the array class in JS the nicest and most readable way to do it in my eyes
                function check4(array, searchElement) {
                    return array.some(el => el === searchElement);
                }
                function check5(array, searchElement) {
                    return array.includes(searchElement);
                }
                //technically its also possible to do this with find or filter, find will be faster here
                function check6(array, searchElement) {
                    return !!array.find(el => el === searchElement);
                }
                function check7(array, searchElement) {
                    return array.filter(el => el === searchElement).length > 0;
                }

// /// //// -------------   April 25  ------------- //// /// // -------------------------------------------------------------


    // 1. Given an integral number, determine if it's a square number:
          // In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.
          // The tests will always use some integral number, so don't worry about that in dynamic typed languages.

          var isSquare = function(n){
  
            if (Number.isInteger(Math.sqrt(n))){
                return true;
              } else {
                return false;
              }
          }

          // alternative 

          function isSquare(n) {
            return Math.sqrt(n) % 1 === 0;
          }

          const isSquare = n => Number.isInteger(Math.sqrt(n));


    // 2. Very simple, given an integer or a floating-point number, find its opposite.

          function opposite(number) {
            return -number
          }


    // 3. Make a program that filters a list of strings and returns a list with only your friends name in it.
            // If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
            // Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
            // i.e. friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
            // Note: keep the original order of the names in the output.

            function friend(friends){
              return friends.filter( x => x.length === 4)
            }

            //anternative 

            const friend = friends => friends.filter(friend => friend.length == 4);

    // 4. Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
            // Use conditionals to return the proper message:
            // case 	                    return
            // name equals owner 	    'Hello boss'
            // otherwise 	            'Hello guest'

            function greet (name, owner) {
              if(name === owner){
                return "Hello boss"
              } else {
                return "Hello guest"
              }
            }
            
            //alternative

            function greet (name, owner) {
              return name === owner ? 'Hello boss' :  'Hello guest';
            }

            