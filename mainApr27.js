// 1.   Write a function called repeatStr which repeats the given string string exactly n times.
            // repeatStr(6, "I") // "IIIIII"
            // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

        //couldn't get this one by myself

        


// 2.   It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with   
//      less than two characters.

        //got this one

   

//3.    Given an array of integers your solution should find the smallest integer.

      // For example:

      // Given [34, 15, 88, 2] your solution will return 2
      // Given [34, -345, -1, 100] your solution will return -345

      // You can assume, for the purpose of this kata, that the supplied array will not be empty.

      //got this one

  

//4. Complete the square sum function so that it squares each number passed into it and then sums the results together.

  // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



//5. Simple, remove the spaces from the string, then return the resultant string.

 


//6. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

      // For example,

      // [true,  true,  true,  false,
      //   true,  true,  true,  true ,
      //   true,  false, true,  false,
      //   true,  false, false, true ,
      //   true,  true,  true,  true ,
      //   false, false, true,  true]

      //timed out on this one and looked at solutions. Nearly had it though. 

   

        //OR










// 1.   Write a function called repeatStr which repeats the given string string exactly n times.
            // repeatStr(6, "I") // "IIIIII"
            // repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

        //couldn't get this one by myself

        function repeatStr (n, s) {
            return s.repeat(n);
          }

          // OR

        function repeatStr (n, s) {
          var str="";
          for(var i=0; i < n; i++)
            str+=s;
            return str;
          }


// 2.   It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with   
//      less than two characters.

          //got this one

          function removeChar(str){
 
            str = str.slice(1).slice(0, -1)
            return str
        };

        //also 
        function removeChar(str) {
            return str.slice(1, -1);
          } 

//3.    Given an array of integers your solution should find the smallest integer.

        // For example:

        // Given [34, 15, 88, 2] your solution will return 2
        // Given [34, -345, -1, 100] your solution will return -345

        // You can assume, for the purpose of this kata, that the supplied array will not be empty.

        //got this one

        class SmallestIntegerFinder {
            findSmallestInt(args) {
              let order = args.sort( (a, b) => a - b)
              let smallest = order.shift()
              
              return smallest
            }
          }

          //other solutions
          class SmallestIntegerFinder {
            findSmallestInt(args) {
              return Math.min(...args)
            }
          }

//4. Complete the square sum function so that it squares each number passed into it and then sums the results together.

    // For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.


    function squareSum(numbers){

        return numbers.reduce( (acc, c) => acc + c**2, 0 )
        
      }

//5. Simple, remove the spaces from the string, then return the resultant string.

        function noSpace(x){
            return x.split(' ').join('')
        }   


//6. Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

        // For example,

        // [true,  true,  true,  false,
        //   true,  true,  true,  true ,
        //   true,  false, true,  false,
        //   true,  false, false, true ,
        //   true,  true,  true,  true ,
        //   false, false, true,  true]

        //timed out on this one and looked at solutions. Nearly had it though. 

        function countSheeps(arrayOfSheeps) {
            return arrayOfSheeps.filter(Boolean).length;
          }

          //OR

          function countSheeps(arrayOfSheep) {
            // TODO May the force be with you
            var num = 0;
            
            for(var i = 0; i < arrayOfSheep.length; i++)
              if(arrayOfSheep[i] == true)
                num++;
                
            return num;
          }
