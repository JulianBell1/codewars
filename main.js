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



// // APRIL 22 // //  ------------------------------------------------------------------------------


      // 1. Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of       //    petals it means they are in love.
      //    Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

      function lovefunc(flower1, flower2){
        if (flower1 % 2 === 0 && flower2 %2 !== 0 || flower2 % 2 === 0 && flower1 %2 !== 0 ){
          return true
        } else {
          return false
        }
      }

        //alternate from codewars
        
        function lovefunc(flower1, flower2){
          return flower1 % 2 !== flower2 % 2;
        }

    // 2. In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
            // Examples
                  // 
            // makeNegative(1);    // return -1
            // makeNegative(-5);   // return -5
            // makeNegative(0);    // return 0
            // makeNegative(0.12); // return -0.12
                  // 
            // Notes  
                  // 
                // The number can be negative already, in which case no change is required.
                // Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

        function makeNegative(num) {
          if (num > 0){
              return -num
          } else {
            return num
          }   
        }


    // 3. You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

          // #Examples:

          // Kata.getMiddle("test") should return "es"

          // Kata.getMiddle("testing") should return "t"

          // Kata.getMiddle("middle") should return "dd"

          // Kata.getMiddle("A") should return "A"

          // #Input

          // A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

          // #Output

          // The middle character(s) of the word represented as a string.


          function getMiddle(s){
            if(s.length % 2 === 0){
              let centerLeft = s[(s.length/2) - 1]
              let centerRight = s[(s.length/2)]
              return centerLeft + centerRight
            } else {
              let middle = s[Math.floor(s.length/2)]
              return middle
            }
          } 


          //alternate from solutions 

          function getMiddle(s)
          {
            return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
          }


// // APRIL 26 // //  ------------------------------------------------------------------------------

    //1. 8kyu

          // You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
          // If it is a square, return its area. If it is a rectangle, return its perimeter.

          // area_or_perimeter(6, 10) --> 32
          // area_or_perimeter(3, 3) --> 9

          // Note: for the purposes of this kata you will assume that it is a square if its length and width are equal, otherwise it is a rectangle.
    
          
          const areaOrPerimeter = function(l , w) {
            if (l === w){
              return l * w
            } else {
              return 2*(l + w)
            }
          };

          const areaOrPerimeter = (l, w) => l === w ? l * w : 2 * (l + w)


    // 2. 7kyu
            // Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
            // Examples:
            // Input: 42145 Output: 54421
            // Input: 145263 Output: 654321
            // Input: 123456789 Output: 987654321


            function descendingOrder(n){
              return Number(n.toString().split('').sort((a,b)=> b-a).join(''));
            }

    // 3. 7kyu
            // Complete the solution so that it reverses the string passed into it.

            // 'world'  =>  'dlrow'
            // 'word'   =>  'drow'

            function solution(str){
              return str.split('').reverse().join('')
            }
    
    
    