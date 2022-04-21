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


// // APRIL 19 // //  ------------------------------------------------------------------------------

          // 1. Description:  Make a simple function called greet that returns the most-famous "hello world!"

              function greet(){
                    return 'hello world!'
                }

          // 2.  Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

                // The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

                // Mind the input validation.
                // Example

                // { 6, 2, 1, 8, 10 } => 16
                // { 1, 1, 11, 2, 3 } => 6

                // Input validation

                // If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.
          
          
          
          
          
              function sumArray(array) {
                  array.sort( (a, b) => a - b)
                   if ( array == null || array.length < 2){
                    return 0
                  } else {
                    array = array.sort(function(a, b) {return a - b;})
                    let total = 0
                    for (let i = 1; i < array.length - 1; i++){
                      total += array[i]
                    }
                    return total
                  }
                }           


// // APRIL 20 // //  ------------------------------------------------------------------------------

                // 1. Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

                    function boolToWord( bool ){
                      //...
                      if (bool === true){
                        return "Yes"
                      } else if (bool === false){
                        return "No"
                      }
                    }

                        // alternative 

                        function boolToWord( bool ){
                          return bool ? 'Yes':'No';
                        }


                // 2. Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

                  // Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
                                        
                  // If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
                  // If he doesn't get 10 hoops, return the string "Keep at it until you get it".



                       function hoopCount (n) {
                         if (n >= 10){
                           return "Great, now move on to tricks"
                         } else if (n < 10){
                           return "Keep at it until you get it"
                         }
                        }

                        // alternate

                        function hoopCount (n) {
  
                          return n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it"
                          
                        }

                // 3. Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
                          // Examples (Input -> Output):

                          // * "String"      -> "SSttrriinngg"
                          // * "Hello World" -> "HHeelllloo  WWoorrlldd"
                          // * "1234!_ "     -> "11223344!!__  "


                          function doubleChar(str) {                              // Needed help with this one. for loop makes sense, but indexing of string I wasn't sure on
                            let doubleChar = ''
                            for (let i = 0; i < str.length; i++){
                              doubleChar += str[i] + str[i]
                          }
                            return doubleChar
                          }


                          // alternates from codewars solutions

                          1. const doubleChar = (str) => str.split("").map(c => c + c).join("");       // I like this one the most

                          2. function doubleChar(str) {
                              return str.replace(/(.)/g, "$1$1")
                              }


                // 4. Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

                    // Note: input will never be an empty string


                          let fakeBin = x => x.split("").map((x) => x >= 5 ? 1 : 0).join("")


                          //alternatives from solutions

                          function fakeBin(x) {
                            return x.replace(/\d/g, d => d < 5 ? 0 : 1);
                          }


                          function fakeBin(str){
                            var newStr = "";
                            for(var i=0;i<str.length;i++){
                              if(Number(str[i])>=5){
                                newStr += "1"
                              }
                              else{
                                newStr += "0";
                              }
                            }
                            return newStr;
                          }


                          function fakeBin(x){
                            let result = '';
                            for(let i = 0; i < x.length; i++){
                              x[i] < 5 ? result += 0 : result += 1;
                            }
                            return result;
                          }


// // APRIL 21 // //  ------------------------------------------------------------------------------

        //1. Bob need a fast way to calculate the volume of a cuboid with three values: length, width, and height of the cuboid. Write a function to help Bob with this calculation. 
                
              class Kata {
                static getVolumeOfCuboid(length, width, height){
                  return length * width * height
                }
              }

              //alternate

              const Kata = {
                getVolumeOfCuboid : (length, width, height) => length * width * height
              }
            
        //2. An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

            // Example: (Input --> Output)

            // "Dermatoglyphics" --> true
            // "aba" --> false
            // "moOse" --> false (ignore letter case)


            function isIsogram(str){
 
              if (str === ''){
                return true
              }
              
              let arr = String(str).toLowerCase()
              
              for (let i = 0; i < arr.length; i++){
                for (let j = i + 1; j < arr.length; j++){
                  if (arr[i] === arr[j]){
                    return false
                  }
                }
              }
              
              return true
              
            }

            //alternates 

            function isIsogram(str){
              return new Set(str.toUpperCase()).size == str.length;             //what is this?
            }

