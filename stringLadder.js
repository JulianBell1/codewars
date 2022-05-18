//  1.  8kyu

        // Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
        // The output should be two capital letters with a dot separating them.
        // It should look like this:
        // Sam Harris => S.H
        // patrick feeney => P.F

        function abbrevName(name){

            let firstLetters = name.split(' ').map(word => word[0]).join('.').toUpperCase()
            return firstLetters
          
        }


//  2.  7kyu

        // Return the number (count) of vowels in the given string.
        // We will consider a, e, i, o, u as vowels for this Kata (but not y).
        // The input string will only consist of lower case letters and/or spaces.

        // basically had this, but initially had (i === 'a') and not (str.charAt(i) === 'a'). Close! 

        function getCount(str) {
            let vowelsCount = 0;

            for(let i = 0; i < str.length; i++){
                if(str.charAt(i) === 'a' || str.charAt(i) === 'e' || str.charAt(i) === 'i' || str.charAt(i) === 'o' || str.charAt(i) === 'u'){
                vowelsCount ++
                
            }
            }
            return vowelsCount
          }

        // alternate from solutions

        function getCount(str) {
            var vowelsCount = 0;
            var vowels = ["a","e","i","o","u"];
            for(var i = 0;i < str.length;i++){
              for(var j=0;j<vowels.length;j++){
                if(str[i] === vowels[j]){
                  vowelsCount++;
                }
              }
            }
            
            return vowelsCount;
          }

    
//  3.  6kyu

        // Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
        // Example
        // createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
        // The returned format must be correct in order to complete this challenge.
        // Don't forget the space after the closing parentheses!


//Parameter
//Result
//Example
//Pseudocode

          //P   -   numbers (10, for phone number), whole number, not negative
          //R   -   return 
          //E   -   "(123) 456-7890"
          //P   -
          //        iterate over array (numbers)    ------ forEach? for...of?
          //        split indexes [0-2], [3-5], [6-9]
          //        join on ([0-2]) [3-5]'-'[6-9]


        function createPhoneNumber(numbers){
  
            let number = numbers.toString().split('')
            let backToNumber = number.map(Number)

            return (`(${backToNumber[0]}) ${backToNumber[3-5]}-${backToNumber[6-9]}`)
            
          }

          console.log(createPhoneNumber(1234567890))

          ////////////////////// couldn't get this one.


          //solutions

          function createPhoneNumber(numbers){
            var format = "(xxx) xxx-xxxx";
            
            for(var i = 0; i < numbers.length; i++)
            {
              format = format.replace('x', numbers[i]);
            }
            
            return format;
          }

          //or

          function createPhoneNumber(numbers){
            numbers = numbers.join('');
            return '(' + numbers.substring(0, 3) + ') ' //this is what I was trying to do, but didn't know what substring was
                + numbers.substring(3, 6) 
                + '-' 
                + numbers.substring(6);
          }

          //or

          function createPhoneNumber(numbers){
            return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
          }



//  4.  7kyu

        // In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
        // Examples

        // highAndLow("1 2 3 4 5");  // return "5 1"
        // highAndLow("1 2 -3 4 5"); // return "5 -3"
        // highAndLow("1 9 3 4 -5"); // return "9 -5"

        // Notes

        //     All numbers are valid Int32, no need to validate them.
        //     There will always be at least one number in the input string.
        //     Output string must be two numbers separated by a single space, and highest number is first.




//Parameter
//Result
//Example
//Pseudocode

          //P   -   
          //R   -   
          //E   -   
          //P   -
          //        
          //        
          //       

          //my attempt, couldn't get it 

          function highAndLow(numbers){
            
            let number = [numbers.split(' ').map().join(',')]

            let min = Math.min(...number)
            let max = Math.max(...number)

            return `${min} ${max}`
          }

          // solution. Was close...trying to do too much at the start when split alone would have sufficed 

          function highAndLow(numbers){
            numbers = numbers.split(' ');
            return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
          }



//  4.  7ky

        // Implement a function which convert the given boolean value into its string representation.
        // Note: Only valid inputs will be given.




//Parameter
//Result
//Example
//Pseudocode

          //P   -   
          //R   -   
          //E   -   
          //P   -
          //        
          //        
          //   

          function booleanToString(b){
            return b.toString()
          }

          // got it














