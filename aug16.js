//  1.  7kyu

        // We have the number 12385. We want to know the value of the closest cube but higher than 12385. The answer will be 13824.

        // Now, another case. We have the number 1245678. We want to know the 5th power, closest and higher than that number. The value will be 1419857.

        // We need a function find_next_power ( findNextPower in JavaScript, CoffeeScript and Haskell), that receives two arguments, a value val, and the exponent of the power, pow_, and outputs the value that we want to find.

        // Let'see some cases:

        // findNextPower(12385, 3) == 13824

        // findNextPower(1245678, 5) == 1419857

        // The value, val will be always a positive integer.

        // The power, pow_, always higher than 1.

        // Happy coding!!

        function findNextPower(val, pow) {

            let test = val - 1
            
            for(let i = 0; i <= val.length; i++){
                if ( Math.pow(test) <= val){

                }
            }
        
        }

    //Parameters
            // p1, value that will be the closest to p2
    //Returns
            //closest p2 value relative to p1
    //Examples
            //findNextPower(12385, 3) == 13824
    //Pseudocode 
            //  need to find cube root of a number following val??
            // not quite sure what to do here...

    
        // solutions

            // was right there with my thought, but wasn't using Math.pow correctly

            function findNextPower(val, pow_) {
                for (let i = 1; i <= val; i++) {
                 if (Math.pow(i, pow_) > val) {
                   return Math.pow(i, pow_);
                 }
               }
             }

        //or 
             
        const findNextPower = (val, pow_) => (((val + 0.1) ** (1 / pow_) | 0) + 1) ** pow_;



//  2.  7kyu

        // Given an array of ones and zeroes, convert the equivalent binary value to an integer.

        // Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

        // Examples:

        // Testing: [0, 0, 0, 1] ==> 1
        // Testing: [0, 0, 1, 0] ==> 2
        // Testing: [0, 1, 0, 1] ==> 5
        // Testing: [1, 0, 0, 1] ==> 9
        // Testing: [0, 0, 1, 0] ==> 2
        // Testing: [0, 1, 1, 0] ==> 6
        // Testing: [1, 1, 1, 1] ==> 15
        // Testing: [1, 0, 1, 1] ==> 11

        // However, the arrays can have varying lengths, not just limited to 4.


        const binaryArrayToNumber = arr => {
            // your code
          };

        
    //Parameters
            // arr of 1s and 0s
    //Returns
            //return the number that is represented by the binary code in the array
    //Examples
            //see above 
    //Pseudocode 
            //  again, had the right idea of where I wanted to go with it but didn't understand the parse function...which makes sense after reading

    
    //solution

    const binaryArrayToNumber = arr => parseInt(arr.join(''), 2); //the 2 at the end denotes the base that the first parameter is based off of (which is binary in this case)


//  3.  8kyu

        // An AI has infected a text with a character!!

        // This text is now fully mutated to this character.

        // If the text or the character are empty, return an empty string.
        // There will never be a case when both are empty as nothing is going on!!

        // Note: The character is a string of length 1 or an empty string.
        // Example

        // text before = "abc"
        // character   = "z"
        // text after  = "zzz"

        function contamination(text, char){
            
            if(text === '' || char === ''){
                return ''
            } else {
                for(let i = 0; i < text.length; i++){
                    char++
                }
                return char
            }

          }

          console.log(contamination('ads', 'z'))


          //solution

          function contamination(text, char){
            return char.repeat(text.length)
          }

          


